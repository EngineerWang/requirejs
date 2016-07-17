define(['jquery'], function($){
	function Dialog(options){
		this.settings = {
			width: '400',
			height: '300',
			title: '弹出层',
			content: ''
		};
		$.extend(this.settings, options);
		this.$container = $('<div class="dialog-container"></div>');
		this.$mask = $('<div class="dialog-mask"></div>');
		this.$box = $('<div class="dialog-box"></div>').css({
			width: this.settings.width,
			height: this.settings.height,
			marginTop: -this.settings.height / 2,
			marginLeft: -this.settings.width / 2
		});
		this.$title = $('<div class="dialog-title"></div>');
		this.$item = $('<span class="dialog-title-item">'+ this.settings.title +'</span>');
		this.$close = $('<sapn class="dialog-title-close">[X]</sapn>');
		this.$content = $('<div class="dialog-content"></div>').css({
			height: this.settings.height - 30
		});
	}
	Dialog.prototype.open = function(){
		this.$content.load(this.settings.content);
		this.$title.append(this.$item).append(this.$close);
		this.$box.append(this.$title).append(this.$content);
		this.$container.append(this.$mask).append(this.$box);
		$('body').append(this.$container);
		var _this = this;
		this.$close.on('click', function(){
			_this.close();
		});
		this.$title.on('mousedown', function(e){
			var iLeft = e.pageX - _this.$box.offset().left;
			var iTop = e.pageY - _this.$box.offset().top;
			$(document).on('mousemove', function(e){
				var iDisX = e.pageX - iLeft;
				var iDisY = e.pageY - iTop;
				if(iDisX < 0){
					iDisX = 0;
				}else if(iDisX > $(document).width() - _this.$box.width()){
					iDisX = $(document).width() - _this.$box.width();
				}
				if(iDisY < 0){
					iDisY = 0;
				}else if(iDisY > $(document).height() - _this.$box.height()){
					iDisY = $(document).height() - _this.$box.height();
				}
				_this.$box.css({
					left : iDisX,
					top : iDisY,
					marginLeft : 0,
					marginTop : 0
				});
			});
		});
		$(document).on('mouseup', function(){
			$(document).off('mousemove');
		});
	};
	Dialog.prototype.close = function(){
		this.$container.remove();
	};
	return Dialog;
});