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


(defun addc (str chr)
  (concatenate 'string str (list chr)))

(defun split (str sep)
  (let ((acc nil)
	(flag 0)
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


  
  
(defun analiz-init (str)
  (let ((tagflag 0)
	(attrflag 0)
	(newtagflag 0)
	(backtagflag 0)
	(contentflag 0)
	(current-tag )
	(first-tag nil)
	(list-of-tag nil)
	(contentbuf "")
	(taglist nil)
	(tagbuf "")
	(attrlist nil)
	(attrbuf ""))
    (defun change-tag ()
      ;(print current-tag)
      (when (not (null current-tag))
    
	(push current-tag list-of-tag))
      (setf current-tag (make-instance 'tag))
      (print current-tag)
      (when (null first-tag) (setf first-tag current-tag)))
  

    (defun back-tag ()
      (print (format nil "~A - tagbuf" tagbuf))
      (print (format nil "~A - current-tag" (tag-tag current-tag)))
      (if (equal tagbuf (tag-tag current-tag))
	  (progn (when (not(null (car list-of-tag))) 
		   (print (tag-tag (car list-of-tag))))
		 (when (not (null (car list-of-tag)))
		   (print "check")
		   (add (car list-of-tag) current-tag)
		   (setf current-tag (pop list-of-tag))))
	(print "wrong parsing")))
    (defmacro when-flag (name current-tag)
      (let ((flag (read-from-string (concatenate 'string (string name) "flag")))
	    (cl (read-from-string (concatenate 'string  "tag-" (string name) )))
	    (buf (read-from-string (concatenate 'string (string name) "buf"))))
	`(when (= ,flag 1)
	   (setf ,flag 0)
	   (setf (,cl  ,current-tag) ,buf)
	   (setf ,buf ""))))
    (defun analizator (chr)
      (case chr
	(#\< (setf tagflag 1)
         (when-flag "content" current-tag )
	 (setf newtagflag 1))

	(#\Space (when (= tagflag 1)
		   (setf attrflag 1))
	 (when-flag tag current-tag))
     
	(#\/ (when (= newtagflag 1)
	       (setf newtagflag 0)
	       (setf backtagflag 1)))
	   
	(#\> (when-flag attr current-tag)
         (setf contentflag 1)
	 (when (= backtagflag 0)
	   (when-flag "tag"  current-tag   ))
	 (when (= backtagflag 1)
	   (setf backtagflag 0)
	   (back-tag)
	   (when (= tagflag 1)
	     (setf tagflag 0)
	     (setf tagbuf ""))))
	
	(otherwise (cond
		    ((= newtagflag 1) (setf newtagflag 0) (change-tag) (setf tagbuf (addc tagbuf chr)))
		    ((= tagflag 1) (setf tagbuf (addc tagbuf chr)))
		    ((= attrflag 1) (setf attrbuf (addc attrbuf chr)))
		    ((= contentflag 1) (setf contentbuf (addc contentbuf chr)))))))
    (map nil #'analizator str)
    first-tag))
	


(defun when-tagflag ()
  (when (= tagflag 1)
       (setf tagflag 0)
       (setf (tag-tag current-tag) tagbuf)
       (setf tagbuf "")))

(defun when-contentflag ()
  (when (= contentflag 1)
    (setf contentflag 0)
    (setf x 1)))



(defmacro when-flag (name current-tag)
  (let ((flag (read-from-string (concatenate 'string (string name) "flag")))
	(cl (read-from-string (concatenate 'string  "tag-" (string name) )))
	(buf (read-from-string (concatenate 'string (string name) "buf"))))
    `(when (= ,flag 1)
       (setf ,flag 0)
       (setf (,cl  ,current-tag) ,buf)
       (setf ,buf ""))))
       
       
(setf s "<div class=\"form-group\"> <label for=\"exampleInputEmail1\">Email address</label><input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\"></div>")
(setf st #\< bt #\> sl #\/)

(defun reset ()
(SETF TAGBUF "" ATTRBUF "" CONTENTBUF "" LIST-OF-TAG NIL TAGFLAG 0 ATTRFLAG 0 BACKTAGFLAG 0 NEWTAGFLAG 0 CONTENTFLAG 0 first-tag nil current-tag nil))


(defun xar ()
  (let ((a 1)
	(b 0))
    (defun retro ()
      (setf a 5)
      (setf b 4))
    (retro)
    a))


