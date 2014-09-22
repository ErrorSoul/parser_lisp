

(defclass tag ()
  ((name :accessor tag-tag
	 :initarg :tag
	 :initform "none")

   (content   :accessor tag-content
	      :initarg :content
	      :initform "")

   (attribute :accessor tag-attr
	      :initarg :attribute
	      :initform "")
   (intags    :accessor tag-intags
	      :initform '())))
	      
(defmethod add ((x tag) new_tag)
  (setf (tag-intags x) (append (tag-intags x) (list new_tag))))


(defmethod recur-print ((x tag))
  (if (null x) 
      (print "need not null argument")
	 
  (let ((counter 1))
    (defun r-print(counter x)
      (let ((sp (space_n counter)))
	(cond ((null x) (print "stop!"))
	      

	      (t
	       (format t "~A~A~%" sp (make-string 20 :initial-element #\_))
	       (format t "~ATag  <~A>~%" sp (tag-tag x))
	       (format t "~AAttr ~A~%" sp (tag-attr x))
	       (format t "~AContent ~A~%" sp (tag-content x))
	       
	       (if (not (null (tag-intags x)))
		   (mapcar (lambda (z) (r-print (* 3 counter) z)) (tag-intags x)))))))
    (r-print counter x))))



(defmethod recur-print ((x tag))
  (let ((counter 1))
    (defun r-print(counter x)
      (let ((sp (space_n counter)))
	(cond ((null (tag-intags x))
	       (format t "~ATag  <~A>~%" sp (tag-tag x))
	       (format t "~AAttr ~A~%" sp (tag-attr x))
	       (format t "~AContent ~A~%" sp (tag-content x)))

	     ((consp (tag-intags x))
	       (mapcar (lambda (z) (r-print (* counter 3) z)) (tag-intags x))))))
    (r-print counter x)))


(defclass storage ()
  ((name  :accessor name
	  :initarg  :name
	  :initform "")

   (flag  :accessor flag-host
	  :initarg  :flag
	  :initform (make-instance 'flag))
   
   (buf   :accessor buf
	  :initarg  :buf
	  :initform "")))

(defmethod flag ((s storage))
  (flag-init (flag-host s)))

(defmethod change-flag ((s storage))
  (change-flag (flag-host s)))

(defmethod on-flag ((s storage))
  (on (flag-host s)))

(defmethod off-flag ((s storage))
  (off (flag-host s)))


(defmethod reset-flag ((s storage))
  (off (flag-host s)))

(defmethod reset-buf ((s storage))
  (setf (buf s) ""))

(defmethod add-char ((s storage) chr)
  (let ((buffer (buf s)))
    (setf (buf s) (concatenate 'string buffer (list chr)))))

(defclass tag-storage ()
  ((first-tag :accessor first-tag
	      :initarg  :first-tag
	      :initform nil)
   (list-of-tag :accessor list-of-tag 
		:initarg  :list-of-tag
		:initform nil)
   (current-tag :accessor current-tag
		:initarg  :current-tag
		:initform (make-instance 'tag))))





(defclass flag ()
  ((flag :accessor flag-init
	 :initarg :flag
	 :initform nil)))

(defmethod on ((f flag))
  (setf (flag-init f) t))

(defmethod off ((f flag))
  (setf (flag-init f) nil))

(defmethod change-flag ((f flag))
  (setf (flag-init f) (not (flag-init f))))


(defun addc (str chr)
  (concatenate 'string str (list chr)))

(defun space_n (n)
  (make-string n :initial-element #\space))

(defun split (str sep)
  (let ((acc nil)
	(buf "")
	(s (addc str sep)))
    (defun parser (chr)
      (cond ((equal chr sep) (progn 
			       (setf acc (append acc (list buf)))
			       (setf buf "")))
	    (t (setf buf (addc buf chr)))))
    (map nil #'parser s)
    acc))


(defun string-split (str sep)
  (cond ((string= "" str) ( print nil))
	((= (length str) 1) (string (char str 0)))
	(t (split str sep))))

(defmethod when-flag ((s storage) (current-tag tag))
  (when (flag s) 
    (change-flag s)
    (cond 
      ((equal "tag" (name s))
       (setf (tag-tag current-tag) (buf s)))
      ((equal "attr" (name s))
       (setf (tag-attr current-tag) (buf s)))
      ((equal "content" (name s))
       (setf (tag-content current-tag)(buf s))))
    (reset-buf s)))


(defun change-tag(tag-s)
  (if (equal (tag-tag (current-tag tag-s)) "none")
      (setf (current-tag tag-s) (make-instance 'tag))
    (progn
      (format t "current-tag ~A~%" (tag-tag (current-tag tag-s)))
      (format t "list of tag ~A~%" (list-of-tag tag-s))
      (push (current-tag tag-s) (list-of-tag tag-s))
      (format t "list of tag ~A~%" (list-of-tag tag-s))
      (setf (current-tag tag-s) (make-instance 'tag))
      (format t "current-tag ~A~%" (tag-tag (current-tag tag-s)))))
  (when (null (first-tag tag-s)) 
    (setf (first-tag tag-s) (current-tag tag-s))
    (format t "first-tag  ~A\~%" (tag-tag (first-tag tag-s)))))
       

(defun back-tag(tag tag-s onetagflag)
  (print (format nil "~A - tagbuf~%" (buf tag)))
  (print (format nil "~A - current-tag~%" (tag-tag (current-tag tag-s))))
  (if 
      (or 
       (flag-init onetagflag) 
       (equal (buf tag) (tag-tag (current-tag tag-s))))
      (progn
	(off onetagflag)
	(when (not (null (car (list-of-tag tag-s))))
	  (add (car (list-of-tag tag-s)) (current-tag tag-s))
	  (setf (current-tag tag-s) (pop (list-of-tag tag-s)))))
    (error "wrong parsing")))

(defun check-onetagelem (current-tag onetagflag)
  (print "check-onetagelem")
  (when (member (tag-tag current-tag) '("input") :test #'equal)
    (print "checkiiiiing")
    (on onetagflag)))

(defun html_parser (str)
  (let ((newtagflag nil)
	(backtagflag )
	(onetagflag (make-instance 'flag))
	(tag-s (make-instance 'tag-storage))
	(tag (make-instance 'storage :name "tag"))
	(attr (make-instance 'storage :name "attr"))
	(content (make-instance 'storage :name "content")))
    (defun analizator (chr)
      (case chr
	(#\< 
	 (change-flag tag)
	 (when-flag content (current-tag tag-s))
	 (setf newtagflag t)
	 (when (flag-init onetagflag) 
	   (back-tag tag tag-s onetagflag)))
	
	(#\Space 
	 (when (flag tag)
	   (change-flag attr))
	 (when-flag tag (current-tag tag-s))
	 (mapcar (lambda (x) (when (flag x) (add-char x chr)))
		 (list tag attr content)))
	
	(#\/ 
	 (when newtagflag
	   (setf newtagflag nil)
	   (setf backtagflag t)))

	(#\> 
	 (when-flag attr (current-tag tag-s))
	 (change-flag content)
	 (when (not backtagflag)
	   (when-flag tag (current-tag tag-s))
	   (check-onetagelem (current-tag tag-s) onetagflag))
	 (when backtagflag
	   (setf backtagflag nil)
	   (back-tag tag tag-s onetagflag)
	   (when (flag tag)
	     (change-flag tag)
	     (reset-buf tag))))
	(otherwise (cond
		    (newtagflag (setf newtagflag nil)
				(change-tag tag-s )
				(add-char tag chr))

		    ((flag tag) (add-char tag chr))
		    ((flag attr) (add-char attr chr))
		    ((flag content) (add-char content chr))))))
    (map nil #'analizator str)
    (first-tag tag-s)))
       


(defun reset ()
  (setf tag-s (make-instance 'tag-storage) tag (make-instance 'storage :name "tag") content (make-instance 'storage :name "content") attr (make-instance 'storage :name "attr") backtagflag nil newtagflag nil))

(setf st #\< bt #\> sl #\/)

(setf h "<div><p>dfjdkf</p></div>")




(defun goro (lst)
  (cond ((null lst) (print "stop the list"))
	 ((consp (car lst)) (goro (car lst)) (goro (cdr lst)))
	 (t (print (car lst)) (goro (cdr lst)))))
