


(defun while-reader (test str &key (start 0))
  (let ((buffer "")
	(num start)
	(len (length str)))
    (do ((i start (1+ i)))
	((or (= len i)
	     (equal (char str i) test)))
      (setf num i)
      (setf buffer (addc buffer  (char str i))))
    (cons buffer num)))


(defun not-split-inside (string chr)
  (let ((one-quotes-flag (make-instance 'flag))
	(two-quotes-flag (make-instance 'flag))
	(acc nil)
	(buf "")
	(str (concatenate 'string string (list chr)))
	(len (1+ (length string))))
        
    (do ((i 0 (1+ i)))
	((= len i))
      (cond ((and (equal (char str i) chr)
	       (and (not (flag-init one-quotes-flag))
		    (not (flag-init two-quotes-flag)))) (push buf acc) (setf buf ""))

	    ((equal (char str i) #\') (change-flag one-quotes-flag))
	    ((equal (char str i) #\") (change-flag two-quotes-flag))
	    (t (setf buf (addc buf (char str i))))))
    (reverse acc)))

(defun attr-spliter(str ht)
  (let ((s (string-split str #\=)))
    (cond ( (= (length s) 1) (setf (gethash (car s) ht) 'true))
	  (t (setf (gethash (car s) ht) (car(cdr s)))))))
(defun attr-handler (str ht)
  (let ((sp #\space)
	(lst (remove-if #'(lambda (x)(equal "" x)) 
			(not-split-inside str #\space))))
    (if (not (null lst))
	(mapcar (lambda (x) (attr-spliter x ht))
		lst)
      nil)))
    
