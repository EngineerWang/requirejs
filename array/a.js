define(['b'], function(isArray){
	function sortArr(arr){
		if(isArray(arr)){
			return arr.sort(function(a, b){
				return a - b;
			});
		}
		return '不是一个数组';
	}
	return sortArr;
});