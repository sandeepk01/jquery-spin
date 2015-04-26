/*
 * JQuery SPIN - jQueryUI Plugin - 1.0
 * Copyright (c) 2015 Sandeep K
 * Licensed under MIT
 * Date: Sun, Apr 26 2015 19:30:23 +0530
 */

(function( $, undefined ) {
  $.widget( "ui.spin", {
	version: "@1.0",
	widgetEventPrefix: "spin",
	timer:null,
	count:0,
    // These options will be used as defaults
    options: { 
		size: 'med', //Values can be 'max','med','min'
		message: '',
		colors: ['#625EA0','#F52724','#00A662','#FFE01D']
    },
    // Set up the widget
    _create: function() {
		var target = this.element;
		var self = this;
		var topMargin = (target.height()/2-50);
		var spinContainer = $('<div/>').attr('id','spinner').css('margin-top',topMargin);
		var spinner = $('<div/>').addClass('spincover').addClass(this.options.size)
		.html('<div class="windows8"><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div>'+
			'<div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div>'+
			'<div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div>'+
			'<div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div>'+
			'<div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div>');
		if(this.options.message!=''||this.options.message!=undefined)
			spinContainer.append(spinner).append('<div class="message">'+this.options.message+'</div>');
		else
			spinContainer.append(spinner);
		target.append(spinContainer);
		self._changeColor(this.options.colors[self.count]);
		self.count++;
		timer = setInterval(function(){
			self._changeColor(self.options.colors[self.count]);
			self.count==self.options.colors.length-1?self.count=0:self.count++;
		},4980);
    },
	_changeColor: function(color){
		this.element.find('#spinner div.wInnerBall').attr('style','background:'+color);
	},
    // Use the destroy method to clean up any modifications your widget has made to the DOM
    destroy: function() {
		this.element.find('#spinner').remove();
		clearInterval(timer);
    }
  });
}(jQuery));
