// JavaScript Document
/*弹窗*/
$(function(){
	$(".close_btn").click(function(){$(".Pop").css({"display":"none","bottom":"-18rem"});$(".Mask").css("display","none");});
	$(".close_btn2").click(function(){$(".Pop2").css("display","none");$(".Mask").css("display","none");});
	var Popwidth=$(".Pop").height();
	var middlewidth=Math.floor(screen.height/2) - Math.floor(Popwidth/2);
	//alert($(".btn_box").width());
//	alert($(".top_btn1").width());
	$(".btn").click(function(){
		var index=$(".btn").index(this);
		var text=$(".btn").eq(index).text();
		$(".Pop_header span").text(text);
		$(".Mask").css("display","block");
		$(".Pop").css("display","block");
		$(".Pop").animate({bottom: middlewidth+"px"});
		})
	$(".btn3").click(function(){
		var index=$(".btn3").index(this);
		var text=$(".btn3").eq(index).val();
		$(".Mask").css("display","block");
		$(".Pop_header span").text(text);
		$(".Pop").css("display","block");
		$(".Pop").animate({bottom: middlewidth+"px"});
		})
	$(".sidebar_list").click(function(){
		var index=$(".sidebar_list").index(this);
		var text=$(".sidebar_list").eq(index).text();
		$(".Mask").css("display","block");
		$(".Pop_header span").text(text);
		$(".Pop").css("display","block");
		$(".Pop").animate({bottom: middlewidth+"px"});
		})
	
})

//验证输入框
$(function(){
	$(".Pop_btn").bind("click", function(){aaa(".text3",".tel2")});
    $(".btns").bind("click", function(){aaa(".text",".tel")});
	function aaa(name,tel){
		 var tex1=$(name).val();
	     var tex2=$(tel).val();
	     var tex=/^1[3,4,5,7,8][0-9]{9}$/;//匹配手机号
		 if(tex1=="" || tex1=="用户名"){
			 if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
						alert("用户名不能为空");
					}else{
						layer.open({
							className:'layerballoon',
							content:"用户名不能为空！",
							time: 2 //2秒后自动关闭
						});
					}
			 }else{
				 if(tex2=="" || tex2=="手机号"){
					 if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
						alert("手机号不能为空");
					}else{
						layer.open({
							className:'layerballoon',
							content:"手机号不能为空！",
							time: 2 //2秒后自动关闭
						});
					}
					 }else{
					  if(!tex.test(tex2)){
						if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
							alert("请输入正确的手机号码！");
						}else{
							layer.open({
								className:'layerballoon',
								content:"请输入正确的手机号码！",
								time: 2 //2秒后自动关闭
							  });
						   }
						 }else{
						  $(".Pop2").css("display","block");
						  $(".Mask").css("display","block");
						  $(".Pop").css("display","none");
						  setTimeout(function(){ $(".Pop2").css("display","none"); $(".Mask").css("display","none");} ,2000);
						 }
					 }
			 }
		
		
		
		}

})

//计算获利
$(function(){
  $(".btn2").click(function(){
	  var money=$(".text2").val();
	  var num=Math.floor( money/2100);
	  $(".t1").val(num);
	  var sun=num*20*50;
	  $(".t2").val(sun);
	 })	
})

//跑马灯效果
$(function(){
	$(".banner_box").imgscroll({
		speed: 40, //图片滚动速度
		amount: 0, //图片滚动过渡时间
		width: 1, //图片滚动步数
		dir: "left" // "left" 或 "up" 向左或向上滚动
	});
})
	$.fn.imgscroll = function(o){
		var defaults = {
			speed: 40,
			amount: 0,
			width: 1,
			dir: "left"
		};
			o = $.extend(defaults, o);
			return this.each(function(){
			var _li = $("li", this);
			_li.parent().parent().css({overflow: "hidden", position: "relative"}); //div
			_li.parent().css({margin: "0", padding: "0", overflow: "hidden", position: "relative", "list-style": "none"}); //ul
			_li.css({position: "relative", overflow: "hidden"}); //li
		    if(o.dir == "left") _li.css({float: "left"});
		        //初始大小
	      	   var _li_size = 0;
		      for(var i=0; i<_li.size(); i++)
		_li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);
		//循环所需要的元素
		if(o.dir == "left") _li.parent().css({width: (_li_size*3)+"px"});
		_li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
		_li = $("li", this);
		 
		//滚动
		var _li_scroll = 0;
		function goto(){
		_li_scroll += o.width;
		if(_li_scroll > _li_size)
		{
		_li_scroll = 0;
		_li.parent().css(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll });
		_li_scroll += o.width;
		}
		_li.parent().animate(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll }, o.amount);
		}
		//开始
		var move = setInterval(function(){ goto(); }, o.speed);
		_li.parent().hover(function(){
		clearInterval(move);
		},function(){
		clearInterval(move);
		move = setInterval(function(){ goto(); }, o.speed);
		});
		});
	};
