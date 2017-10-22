//事件工具封装，兼容ie8+
var EventUtil={
	addEvent:function(ele,type,handler){
		if(ele.addEventListener){
			ele.addEventListener(type,handler,false)
		}else{
			ele.attachEvent('on'+type,handler,false)//ie8及以下
		}
	}
};