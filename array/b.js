define(function(){
	function isArray(arr){
		if(arr instanceof Array && arr.constructor == Array){
			return true;
		}
		return false;
	}
	return isArray;
});