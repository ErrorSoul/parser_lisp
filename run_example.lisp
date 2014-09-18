(defun x () 
  (print "This is example"))
(x)

(defmacro ntimes (x &body body)
  (let ((i (gensym)))
    `(do ((,i 0 (1+ ,i)))
	 ((>= ,i ,x))
        (,@body ,i))))

(defun open-file (filename)
  (with-open-file (out filename :direction :output
		                :if-exists :supersede)
		  (progn
		    (ntimes 3 (lambda (x) (format out "~A" (form-group "email" )))))))


(defun str-cycle (n symbol)
  (let ((str ""))
    (ntimes n (lambda (x) (setf str (concatenate 'string str symbol))))
    str))

(defun space (n)
  (str-cycle n " "))



(defun form-group (name)
  (let ((first (format nil ".form-group~%"))
	(second (format nil "~A%label.com-sm-2.control-label(for='input~A')~%" 
			(space 2)
			(string-capitalize name)))
	(x (format nil "~A~A~%" (space 4) (string-upcase name)))
			
	(third (format nil "~A.col-md-10~%" (space 2)))
	(fourth (format nil "~A%input#input~A.form-control(type='~A' placeholder='~A')~%"
			(space 4)
			(string-upcase name)
			name
			(string-capitalize name))))
    (progn
      (concatenate 'string  first second x third fourth))))
  





(defclass tag ()
  ((name :accessor tag-name
	 :initarg :name
	 :initform "none")
   (attribute :accessor tag-attribute
	      :initarg :attribute
	      :initform (make-hash-table))
   (intags    :accessor tag-intags
	      :initform '())))
	      
(defmethod add ((x tag) new_tag)
  (setf (tag-intags x) (append (tag-intags x) (list new_tag))))

(defmacro range (start end)
  (let ((g (gensym))
	(n (gensym))
	(acc(gensym)))
    `(do ((,g ,start (1+ ,g))
	  (,n ,end)
	  (,acc nil))
	 ((>= ,g ,n) ,acc)
       (setf ,acc (append ,acc (list ,g))))))



(defun range1 (start end)
  (let ((acc nil))
    (defun range2 (start end acc)
      (cond ((>= start end) acc)
	    (t (range2 (1+ start) end (append acc (list start))))))
    (range2 start end acc)))



(defun string-split (str sep)
  (let ((acc nil)
	(flag 0)
	(buf "")
	(s (concatenate 'string str (list sep))))
    (defun parser (chr)
      (cond ((equal chr sep) (progn 
			       (setf acc (append acc (list buf)))
			       (setf buf "")))
	    (t (setf buf (concatenate 'string buf (list chr))))))
    (map nil #'parser s)
    (pprint acc)
    (print "dfdsfadsf")))


