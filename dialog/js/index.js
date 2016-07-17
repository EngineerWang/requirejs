//jquery文件不能用相对路径
require(['jquery', '../dialog/dialog'], function($, Dialog){
	$('#btn').on('click', function(){
		var settings = {
			width: '500',
			title: '我的弹出层',
			content: 'log_form.html'//根目录下
		};
		var dialog = new Dialog(settings);
		dialog.open();
	});
});