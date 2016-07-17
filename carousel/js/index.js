require(['jquery', '../carousel/carousel'], function($, Carousel){
	var settings1 = {
		imgs: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'],
		selector: '#container',
		itemStyle: 'square',
		arrowPosition: 'bottom',
		speed: 500
	};
	var carousel1 = new Carousel(settings1);
	carousel1.init();
	var settings2 = {
		imgs: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'],
		selector: '#container1',
		itemStyle: 'circle',
		arrowPosition: 'center',
	};
	var carousel2 = new Carousel(settings2);
	carousel2.init();
});