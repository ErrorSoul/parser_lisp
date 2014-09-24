var rtFilter = {
	onChange: function(input, obj){
		setTimeout(function(){
			var key = input.val() ? input.val() : null;
			
			if(key){
				obj.p.list.children().each(function(){
					obj.addMark($(this), key);
				});
				obj.p.input.next().addClass("show");
			} else {
				obj.removeMark(obj.p.list);
				obj.p.input.next().removeClass("show");
			}
			
			obj.afterChange();
		}, 0);
	},
	
	addMark: function(elem, key){
		var re = new RegExp("^"+key, "i");
	
		this.removeMark(elem);
		
		$(".profiles__name, .profiles__sport a", elem).each(function(){
			var t = $(this).text().split(" ");
				
			for(var i = 0, j = t.length; i < j; i++){
				var match = t[i].match(re);
				
				if(match){
					t[i] = t[i].replace(re, '<mark class="yellow">'+match+'</mark>');
				}
			}
			
			this.innerHTML = t.join(" ");
		});
		
		elem[$(".yellow", elem).length ? "show" : "hide"]();
	},
	
	removeMark: function(elem){
		var el = elem ? $(".yellow", elem) : $(".yellow");
		
		el.parent().each(function(){
			var html = ""+$(this).html();
			
			if(html){
				html = html.replace(/<mark class="yellow">/g, '').replace(/<\/mark>/g, '');
				html = html.replace(/<mark class=yellow>/g, '').replace(/<\/mark>/g, '');
	
				$(this).html(html);
			}
		});
	},
	
	afterChange: function(){
		var $li = this.p.list.children(":has(.yellow)"),
			elems = $li.length ? $li : this.list.children();
		
		elems.hide();
		elems.filter(":lt(" + this.p.visible + ")").show();
		
		if(elems.length <= elems.filter(":visible").length){
			this.p.btnLoad.hide();
		} else {
			this.p.btnLoad.show();
		}
	},
	
	toggleBtn: function(elems){
		if(elems.length <= this.p.visible){
			this.p.btnLoad.hide();
		} else {
			this.p.btnLoad.show();
		}
	},
	
	onClickBtn: function(){
		var $li = this.p.list.children(":has(.yellow)"),
			elems = $li.length ? $li : this.list.children(),
			elemsShow = elems.filter(":hidden").filter(":lt(" + this.p.visible + ")"),
			self = this;
		
		elemsShow.slideDown(0, function(){
			if(elems.length <= elems.filter(":visible").length){
				self.p.btnLoad.hide();
			}
		});
		
		if(elemsShow.length){
			$("html:not(:animated), body:not(:animated)").animate({
				scrollTop: elemsShow.eq(0).offset().top - ($(".profiles__filter.fixed-block").length ? $(".profiles__filter.fixed-block").outerHeight() : 0)
			}, 600);
		}
	},
	
	init: function(params){
		this.list = params.list;
		this.p = params;
		
		var self = this;
		
		params.input.on("input "+($(".ie8").length?"keydown":""), function(){
			self.onChange($(this), self);
		});
		
		params.input.next().click(function(){
			params.input.val("");
			self.onChange(params.input, self);
		});
		
		this.toggleBtn(this.list.children());
		
		if(this.list.children().length > params.visible){
			this.list.children().filter(":gt(" + (this.p.visible-1) + ")").hide();
		}
		
		params.btnLoad.click($.proxy(this.onClickBtn, this));
	}
};

