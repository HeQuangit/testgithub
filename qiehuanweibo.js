$(function(){
	var objli = $(".box3dao ul");
	var objjulbox = $(".box3li");
	var num = 0;
	objli.children("li").eq(num).css({"background": "#d6d6d6","border-top-right-radius":"10%","border-top-left-radius":"10%"}).children("a").css("color","#c11f24");
	objjulbox.children("ul").eq(num).css("display","block");
	objli.children("li").click(function(){
		num = $(this).index();
	    objli.children("li").eq(num).css({"background": "#d6d6d6","border-top-right-radius":"10%","border-top-left-radius":"10%"}).children("a").css("color","#c11f24");
		objli.children("li").eq(num).siblings().css("background","none").children("a").css("color","black");
		objjulbox.children("ul").eq(num).css("display","block").siblings().css("display","none");
	})
});
