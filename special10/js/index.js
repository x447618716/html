// JavaScript Document

//跑马灯效果
$(function(){
	$(".list_nine").imgscroll({
		speed: 40, //图片滚动速度
		amount: 0, //图片滚动过渡时间
		width: 1, //图片滚动步数
		dir: "left" // "left" 或 "up" 向左或向上滚动
	});
	
	$(".list_ten").imgscroll({
		speed: 40, //图片滚动速度
		amount: 0, //图片滚动过渡时间
		width: 1, //图片滚动步数
		dir: "left" // "left" 或 "up" 向左或向上滚动
	});
})

//侧边栏效果
$(function(){
  $(".sidebar1").hover(function(){ $(".one").css("display","block")},function(){$(".one").css("display","none")});
  $(".one").hover(function(){$(".one").css("display","block")},function(){$(".one").css("display","none")});
  
  $(".sidebar2").hover(function(){ $(".two").css("display","block")},function(){$(".two").css("display","none")});
  $(".two").hover(function(){$(".two").css("display","block")},function(){$(".two").css("display","none")});		
	
})

//查看问题
$(function(){
	$(".item_list a").click(function(){
		$(".Mask").css("display","block");
		var index=$(".item_list a").index(this);
		if(index==0){
			$(".t1").css("display","block");
			//$(".t1").show("slow");
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
		//$(".details").hide("slow");
		})
	
	
})

//返回顶部
$(function(){
	$(".sidebar3").click(function(){
		 $("html,body").animate({
                scrollTop: "0px"
            }, 650);
		})
	
})

//弹窗
$(function(){
	$(".close_btn2").click(function(){$(".Pop").css("display","none")})
	
	$(".item7_btn").click(function(){
		var tex=$(".item7_btn").text();
		$(".Pop_header span").text(tex);
		$(".Pop").css("display","block")})
	
	$(".item7_btns").click(function(){
		var tex=$(".item7_btns").text();
		$(".Pop_header span").text(tex);
		$(".Pop").css("display","block")})
		
	$(".item7_btn2").click(function(){
		var tex=$(".item7_btn2").text();
		$(".Pop_header span").text(tex);
		$(".Pop").css("display","block")})
		
	$(".hvr_top").click(function(){
		var index=$(".hvr_top").index(this);
		var tex=$(".hvr_top").eq(index).text();
		$(".Pop_header span").text(tex);
		$(".Pop").css("display","block")})
	
})




//验证表单

$(function(){
	var tex=/^[0-9]*$/; //只能是数字
	var tex2=/^1[3,4,5,7,8][0-9]{9}$/; //手机号
	
	$(".Pop_btn").bind("click", function(){aaa(".text3",".tel2")});
    $(".top_btn").bind("click", function(){aaa(".top_text1",".top_tel")});
	$(".one .phone_btn").bind("click", function(){aaa(".text4",".tel3"),$(".one").css("display","block")});
	$(".two .phone_btn").bind("click", function(){aaa(".text5",".tel4"),$(".two").css("display","block")});
	
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

























