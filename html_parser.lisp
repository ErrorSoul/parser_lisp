

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

(defun change-tag(current-tag list-of-tag first-tag)
  (if (equal (tag-tag current-tag) "none")
      (setf current-tag (make-instance 'tag))
    (progn 
      (push current-tag list-of-tag)
      (setf current-tag (make-instance 'tag))))
  (when (null first-tag) (setf first-tag current-tag)))

(defun back-tag(tag current-tag list-of-tag first-tag)
  (print (format nil "~A - tagbuf" (buf tag)))
  (print (format nil "~A - current-tag" (tag-tag current-tag)))
  (if (equal (buf tag) (tag-tag current-tag))
      (progn
	(when (not (null (car list-of-tag)))
	  (add (car list-of-tag) current-tag)
	  (setf current-tag (pop list-of-tag))))
    (error "wrong parsing")))

(defun html_parser (str)
  (let ((newtagflag nil)
	(backtagflag nil) 
	(first-tag nil)
	(list-of-tag nil )
	(current-tag (make-instance 'tag))
	(tag (make-instance 'storage :name "tag"))
	(attr (make-instance 'storage :name "attr"))
	(content (make-instance 'storage :name "content")))
    (defun analizator (chr)
      (case chr
	(#\< 
	 (change-flag tag)
	 (when-flag content current-tag)
	 (setf newtagflag t))
	
	(#\Space 
	 (when (flag tag)
	   (change-flag attr))
	 (when-flag tag current-tag))
	
	(#\/ 
	 (when newtagflag
	   (setf newtagflag nil)
	   (setf backtagflag t)))

	(#\> 
	 (when-flag attr current-tag)
	 (change-flag content)
	 (when (not backtagflag)
	   (when-flag tag current-tag))
	 (when backtagflag
	   (setf backtagflag nil)
	   (back-tag tag current-tag list-of-tag first-tag)
	   (when (flag tag)
	     (change-flag tag)
	     (reset-buf tag))))
	(otherwise (cond
		    (newtagflag (setf newtagflag nil)
				(change-tag current-tag list-of-tag first-tag )
				(add-char tag chr))

		    ((flag tag) (add-char tag chr))
		    ((flag attr) (add-char attr chr))
		    ((flag content) (add-char content chr))))))
    (map nil #'analizator str)
    first-tag))
       


(defun reset ()
  (setf list-of-tag nil current-tag (make-instance 'tag) first-tag nil tag (make-instance 'storage) content (make-instance 'storage) attr (make-instance 'storage) backtagflag nil newtagflag nil))

(setf st #\< bt #\> sl #\/)
