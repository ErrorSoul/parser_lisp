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
		    (print "THis
