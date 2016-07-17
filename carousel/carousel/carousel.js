define(['jquery'], function($){
	function Carousel(options){
		this.settings = {
			imgs: [],
			itemStyle: 'square',
			arrowPosition: 'bottom',
			speed: 1000
		};
		$.extend(this.settings, options);
		this.$container = $('<div class="carousel-container"></div>');
		this.$imgs = $('<div class="carousel-imgs"></div>');
		this.$items = $('<ul class="carousel-items"></div>');
		this.$arrows = $('<div class="arrows"></div>');
		this.$prev = $('<span class="prev">&lt;</span>');
		this.$next = $('<span class="next">&gt;</span>');
	}
	Carousel.prototype.init = function(){
		for(var i=0; i<this.settings.imgs.length; i++){
			this.$imgs.append('<img src='+ this.settings.imgs[i] +'>');
			this.$items.append('<li>' + (this.settings.itemStyle=='circle'?'':(i + 1)) + '</li>');
		}
		this.$imgs.children().eq(0).addClass('selected');
		this.$items.addClass(this.settings.itemStyle).children().eq(0).addClass('selected');
		this.$arrows.append(this.$prev).append(this.$next).addClass(this.settings.arrowPosition);
		this.$container.append(this.$imgs).append(this.$items).append(this.$arrows);
		$(this.settings.selector).append(this.$container);
		var nowIdx = 0;
		var $lis = $('li', this.$items);
		var _this = this;
		start();
		$lis.on('click', function(){
			changeImg($(this).index());
		});
		this.$prev.on('click', function(){
			nowIdx--;
			if(nowIdx == -1){
				nowIdx = $lis.length - 1;
			}
			changeImg(nowIdx);
		});
		this.$next.on('click', function(){
			nowIdx++;
			if(nowIdx == $lis.length){
				nowIdx = 0;
			}
			changeImg(nowIdx);
		});
		this.$container.hover(function(){
			clearInterval(_this.timer);
		}, function(){
			start();
		});
		function start(){
			clearInterval(_this.timer);
			_this.timer = setInterval(function(){
				_this.$next.trigger('click');
			}, _this.settings.speed);
		}
		function changeImg(idx){
			nowIdx = idx;
			$lis.eq(nowIdx).addClass('selected').siblings().removeClass('selected');
			$('img', _this.$imgs).eq(nowIdx).addClass('selected').siblings().removeClass('selected');
		}
	};
	return Carousel;
});