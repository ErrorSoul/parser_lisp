/* adriver old banners support plugin */
(function(pluginName){
	new adriver.Plugin(pluginName);

	function go(){
		/* for ver 2.0 */
		adriver.request = function(req){
			var def = adriver.toQueryString(adriver.defaults);
			adriver.loadScript(adriver.redirectHost + '/cgi-bin/merle.cgi?rnd=![rnd]' + (def ? '&' + def : '') + (req ? '&' + req : ''));
		}
		adriver.toQueryString = function(o, delimiter, assign){
			delimiter = delimiter || "&";
			assign = assign || "=";
			var l = [];
			for (var i in o){if(o.hasOwnProperty(i)) l.push(i + assign + escape(o[i]))}
			return l.join(delimiter)
		}
		/* end */

		/* for ver 1.x */
		adriver.prototype.checkFlash = function(ver){return this.hasFlash(ver)}
		adriver.prototype.detachScript = function(){}

		adriver.prototype.setAnchor = function(){return this.anchor = this.addDiv(this.p, {position:"relative"})}
		adriver.prototype.addPanel = function(id, params, inner, anchor){
			if (!this.panels){this.panels = {}}
			this.panels[id] = this.addDiv(anchor||this.anchor, params, inner);

			return this.panels[id];
		}
		window.adriver_dispatcher = function(ph, panel, command, arg){
			try {
				var a = adriver(ph);
				if (a && a.dispatch) a.dispatch(panel, command, arg);
			}catch(e){}
		}

		adriver.oldLoadScript = adriver.loadScript;
		adriver.loadScript = function(req){
			try {
				(/\?v(.*)$/).test(req);
				var ph = RegExp.$1;
				if (ph&&adriver(ph)) {
					var a = adriver(ph);
					a.p.adriver = a;
					adriver.extend(a, a.reply);
					setTimeout(function(){a.loadComplete()}, 500);
				}
				adriver.oldLoadScript(req);
			}catch(e){}
			return this;
		}
		/* end */

		adriver.Plugin(pluginName).loadComplete();
	}
	new adriver.Plugin.require("checkFlash.adriver", "functions.adriver").onLoadComplete(go);
})("old.adriver");