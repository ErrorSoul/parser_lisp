(defun range (a b)
  (do ((x a (+ x 1)))
      ((= x b) b)
    (format "~A ~%" x)))


(defun range (a b)
  (let ((lst nil))
    (do ((x b (- x 1)))
	((= x a) lst)
      (progn
	(format t "~A ~%" x)
      (push x lst)))))


(defmacro range (start end)
  (let ((g (gensym))
	(h (gensym)))
  `(do ((,g ,start (1+ ,var)) (,h ,end))
       ((> ,g ,h))
     (print ,g)))
