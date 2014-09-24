/* custom modernizr tests */
Modernizr.addTest('hiddenscroll', function() {
	var box = $('<div>', {
		css: {
			position: 'absolute',
			left: '-9999px',
			top: '-9999px',
			width: '100px',
			minHeight: '100px',
			overflow: 'auto'
		}
	});
	var content = $('<div>', {
		css: {
			width: '200px',
			height: '100px'
		}
	});

	var heightBefore, heightAfter;

	$('body').append(box);

	heightBefore = box.outerHeight();

	box.append(content);

	heightAfter = box.outerHeight();

	box.remove();

	return !(heightAfter - heightBefore > 0);
});

Modernizr.addTest('positionfixed', function () {
    var test = document.createElement('div'),
        control = test.cloneNode(false),
        fake = false,
        root = document.body || (function () {
            fake = true;
            return document.documentElement.appendChild(document.createElement('body'));
        }());
 
    var oldCssText = root.style.cssText;
    root.style.cssText = 'padding:0;margin:0';
    test.style.cssText = 'position:fixed;top:42px';
    root.appendChild(test);
    root.appendChild(control);
    
    var ret = test.offsetTop !== control.offsetTop;
 
    root.removeChild(test);
    root.removeChild(control);
    root.style.cssText = oldCssText;
    
    if (fake) {
        document.documentElement.removeChild(root);
    }
    
    navigator.userAgent.match(/OS (\d)/i);
    return ret && (!Modernizr.appleios || (Modernizr.appleios && RegExp.$1 >= 5));
});