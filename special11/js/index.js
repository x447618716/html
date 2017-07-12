// JavaScript Document

//头部
$(function(){
	$(".top_content_right a").click(function(){
		$(".top_list").slideToggle("slow");	
	})
	
	
})

//查看问题
$(function(){
	 var mainli=$(".item_list").find("a");
	 var strat=0;
	 var timer;
	 var timer2;
	 var clickup=true;
	 
	 function BannerShow(){
		if(strat==mainli.length){
			clearInterval(timer);
			strat=0;
			mainli.removeAttr("style");
			mainli.children("em").removeAttr("style");
			mainli.eq(strat).css({"background":"#f77609", "color":"#ffffff"});
			mainli.eq(strat).children("em").css({"background":"url(./image/btn.png) no-repeat 0 -2.5rem","background-size":"100%"});
			timer=setInterval(BannerShow,1000);
		}else{
			mainli.removeAttr("style");
			mainli.children("em").removeAttr("style");
			mainli.eq(strat).css({"background":"#f77609", "color":"#ffffff"});
			mainli.eq(strat).children("em").css({"background":"url(./image/btn.png) no-repeat 0 -2.5rem","background-size":"100%"});
		   }
		 strat++;
	}
	timer=setInterval(BannerShow,1000);
	
	
	$(".item_list a").click(function(){
		$(".Mask").css("display","block");
		clearInterval(timer);
		var index=$(".item_list a").index(this);
		if(index==0){
			$(".t1").css("display","block");
			}else if( index==1){
				$(".t2").css("display","block");
				}else if(index==2){
					$(".t3").css("display","block");
					}else if(index==3){
						$(".t4").css("display","block");
						}else{
							$(".t5").css("display","block");
							}
		
	})
	$(".close_btn").click(function(){
		$(".Mask").css("display","none");
		$(".details").css("display","none");
		timer=setInterval(BannerShow,1000);
		})


})

//跑马灯效果
$(function(){
	$(".list_nine ul").imgscroll({
		speed: 40, //图片滚动速度
		amount: 0, //图片滚动过渡时间
		width: 1, //图片滚动步数
		dir: "left" // "left" 或 "up" 向左或向上滚动
	});
	
})

//弹窗
$(function(){
	$(".close_btn2").click(function(){
		//$(".Pop").css("display","none");
		//$(".Pop").slideUp("slow");
		//$(".Pop").hide("slow");
		$(".Mask").fadeOut("slow");
		$(".Pop").fadeOut("slow");
		})
		
	$(".close_btn3").click(function(){
		//$(".Pop").css("display","none");
		//$(".Pop").slideUp("slow");
		//$(".Pop").hide("slow");
		$(".Mask").css("display","none");
		$(".Pop2").css("display","none");
		})	
		
	$(".hvr_top").click(function(){
		$(".Mask").css("display","block")
		var index=$(".hvr_top").index(this);
		var tex=$(".hvr_top").eq(index).text();
		$(".Pop_header span").text(tex);
		//$(".Pop").css("display","block")
		//$(".Pop").slideDown("slow");
		//$(".Pop").show("slow");
		$(".Pop").fadeIn("slow");
		})
	
})

//验证表单

$(function(){
	var tex=/^[0-9]*$/; //只能是数字
	var tex2=/^1[3,4,5,7,8][0-9]{9}$/; //手机号
	
	$(".Pop_btn").bind("click", function(){aaa(".text3",".tel2")});
	
	function aaa(name,tel){
	   var text1=$(name).val();
	   var text2=$(tel).val();
	   if(text1=="" || text1=="请输入您的姓名"){
		 if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
    				alert("请输入您的姓名！");
				}else{
					layer.open({
						className:'layerballoon',
						content:"请输入您的姓名！",
						time: 2 //2秒后自动关闭
					});
				}
		 }else{
			if(tex.test(text1)){
				 if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
    				alert("姓名中带有数字哦，请重新输入！");
				}else{
					layer.open({
						className:'layerballoon',
						content:"姓名中带有数字哦，请重新输入！",
						time: 2 //2秒后自动关闭
					});
				}
		  }else{
			 if(text2=="" || text2=="请输入您的手机号"){
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
				  if(!tex2.test(text2)){
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
						 $(".Pop").css("display","none");
						 setTimeout(function(){ $(".Pop2").css("display","none"); $(".Mask").css("display","none");} ,2000);
						 }
				 }
				
				}
		 }	
		
		
	}
	
	
	
})
