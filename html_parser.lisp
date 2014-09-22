

(defclass tag ()
  ((name :accessor tag-tag
	 :initarg :tag
	 :initform "none")

   (content   :accessor tag-content
	      :initarg :content
	      :initform "")

   (attribute :accessor tag-attr
	      :initarg :attribute
	      :initform (make-hash-table))
   (intags    :accessor tag-intags
	      :initform '())))
	      
(defmethod add ((x tag) new_tag)
  (setf (tag-intags x) (append (tag-intags x) (list new_tag))))


(defclass storage ()
  ((name  :accessor name
	  :initarg  :name
	  :initform "")

   (flag  :accessor flag
	  :initarg  :flag
	  :initform nil)
   
   (buf   :accessor buf
	  :initarg  :buf
	  :initform "")))


(defmethod change-flag ((s storage))
  (setf (flag s) (not (flag s))))


(defmethod reset-flag ((s storage))
  (setf (flag s) nil))

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
       

(defun back-tag(tag tag-s)
  (print (format nil "~A - tagbuf~%" (buf tag)))
  (print (format nil "~A - current-tag~%" (tag-tag (current-tag tag-s))))
  (if (equal (buf tag) (tag-tag (current-tag tag-s)))
      (progn
	(when (not (null (car (list-of-tag tag-s))))
	  (add (car (list-of-tag tag-s)) (current-tag tag-s))
	  (setf (current-tag tag-s) (pop (list-of-tag tag-s)))))
    (error "wrong parsing")))

(defun html_parser (str)
  (let ((newtagflag nil)
	(backtagflag nil) 
	(tag-s (make-instance 'tag-storage))
	(tag (make-instance 'storage :name "tag"))
	(attr (make-instance 'storage :name "attr"))
	(content (make-instance 'storage :name "content")))
    (defun analizator (chr)
      (case chr
	(#\< 
	 (change-flag tag)
	 (when-flag content (current-tag tag-s))
	 (setf newtagflag t))
	
	(#\Space 
	 (when (flag tag)
	   (change-flag attr))
	 (when-flag tag (current-tag tag-s)))
	
	(#\/ 
	 (when newtagflag
	   (setf newtagflag nil)
	   (setf backtagflag t)))

	(#\> 
	 (when-flag attr (current-tag tag-s))
	 (change-flag content)
	 (when (not backtagflag)
	   (when-flag tag (current-tag tag-s)))
	 (when backtagflag
	   (setf backtagflag nil)
	   (back-tag tag tag-s)
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
