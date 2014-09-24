/* TeaserBlock plugin */
(function (pluginName){
	new adriver.Plugin(pluginName);
new adriver.Plugin.require('functions.adriver').onLoadComplete(function(){
	adriver.prototype.TeaserBlock = {
		draw: function(a){
		/* if(a.reply.auditPixel){
				var ar_pix = a.checkRnd(a.checkHttp(a.reply.auditPixel));
				if (location.href.indexOf('mngcgi')==-1&&ar_pix) {
						if(document.createElement){
						var i=document.createElement('img');
						i.style.position='absolute';i.style.width=i.style.height='0px';
						i.src=ar_pix;
						a.p.appendChild(i);
						}
						else{new Image().src = ar_pix}
				}
			} */
			var ar_img = ((/^http:\/\//i.test(a.reply.comp0) ? '': a.reply.comppath) + a.reply.comp0).replace(/!\[rnd\]/g, a.reply.rnd),
			
					sep = '|',
					alt = this.decode(a.reply.alt).split(sep),
					title = (alt[0] || ''),
                    desc = (alt[1] || '');
			
			a.p.innerHTML = '<a target="_blank" href="' + a.reply.cgihref + '"><img src="' + ar_img + '" alt="' + a.reply.alt + '" style="width:70px; height:50px;"></a>'
			+ '<a href="' + a.reply.cgihref + '" target="_blank" title="' + a.reply.alt + '">' + title + '<\/a>';

			return a
		},
		decode: function(s){
				return s.replace(/&#x(.+?);/ig, function(s, v){return String.fromCharCode('0x' + v)});
			}
	}

	adriver.TeaserBlock = {
		drawContainer: function(id){
			var container = document.getElementById(id);

			var items = container.getElementsByTagName('TD');
			for (var i = 0; i < items.length; i++){
				var a = adriver(items[i].id);
				if (a && a.reply) a.TeaserBlock.draw(a);
			}

			return container
		}
	}

	adriver.Plugin(pluginName).loadComplete();
	});
})("TeaserBlock.six");
