//工厂模式
var lev=function(){
	return "嘿哈";
};

function Parent(){
	var Child = new object();
	Child.name = "李小龙";
	Child.age  = "30";
	Chile.lev  = lev;
	return Child;
};

var x=Parent();
alert(x.name);
alert(x.lev());
