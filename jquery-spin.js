/*
 * JQuery SPIN - jQuery Plugin - 1.0
 * Copyright (c) 2015 Sandeep K
 * Licensed under MIT
 * Date: Wed, Apr 22 2015 16:02:56 +0530
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jQuery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($){
	var methods = {
		globals : {
			timer:null,
			count:0
		},
		option:null,
		init: function(options) {
			methods.option = $.extend({
				size: 'med', //Options - max,med,min
				message: '',
				colors: ['#625EA0','#F52724','#00A662','#FFE01D']
			}, options || {});
			methods._create(this);
			return this;
		},
		_create: function(element){
			var target = element;
			var self = this;
			var topMargin = (target.height()/3);
			var spinContainer = $('<div/>').attr('id','spinner').css('margin-top',topMargin);
			var spinner = $('<div/>').addClass('spincover').addClass(this.option.size)
			.html('<div class="windows8"><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div>'+
				'<div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div>'+
				'<div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div>'+
				'<div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div>'+
				'<div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div>');
			if(this.option.message!=''||this.option.message!=undefined)
				spinContainer.append(spinner).append('<div class="message">'+this.option.message+'</div>');
			else
				spinContainer.append(spinner);
			target.append(spinContainer);
			target.find('#spinner div.wInnerBall').attr('style','background:'+this.option.colors[methods.globals.count]);
			methods.globals.count++;
			methods.globals.timer = setInterval(function(){
				target.find('#spinner div.wInnerBall').attr('style','background:'+self.option.colors[methods.globals.count]);
				methods.globals.count==self.option.colors.length-1?methods.globals.count=0:methods.globals.count++;
			},4980);
		},
		destroy: function() {
			this.find('#spinner').remove();
			clearInterval(methods.globals.timer);
		}
	};
	
	$.fn.spin = function(method){
		// Method calling logic
		if (methods[method] && method.charAt(0) != '_') {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' +  method + ' does not exist in this plugin.');
		}
	};
}));
