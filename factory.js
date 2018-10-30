//工厂模式
var lev=function(){
	return "嘿哈";
};

function Parent(){
	var Child = new Object();
	Child.name = "李小龙";
	Child.age  = "30";
	Child.lev  = lev;
	return Child;
};

var x=Parent();
alert(x.name);
alert(x.lev());
