// JavaScript Document
//弹窗
$(function(){
	$(".close_btn").click(function(){$(".Pop").css("display","none");});
	$(".close_btn2").click(function(){$(".Pop2").css("display","none");});	
	$(".btn").click(function(){
		var index=$(".btn").index(this);
		var text=$(".btn").eq(index).text();
		$(".Pop_header span").text(text);
		$(".Pop").css("display","block");
		})
		
	$(".text_p2").click(function(){
		var index=$(".text_p2").index(this);
		var text=$(".text_p2").eq(index).text();
		$(".Pop_header span").text(text);
		$(".Pop").css("display","block");
		$(".Pop_btn").val("马上下载");
		})
	$(".sixe_btn").click(function(){
		var text=$(".sixe_btn").val();
		$(".Pop_header span").text(text);
		$(".Pop").css("display","block");
		})
	
	$(".sixe_btn2").click(function(){
		var text=$(".sixe_btn2").val();
		$(".Pop_header span").text(text);
		$(".Pop").css("display","block");
		})
	
	$(".severn_btn2").click(function(){
		var text=$(".severn_btn2").val();
		$(".Pop_header span").text(text);
		$(".Pop").css("display","block");
		})
	
	$(".severn_btn").click(function(){
		var text=$(".severn_btn").val();
		$(".Pop_header span").text(text);
		$(".Pop").css("display","block");
		})
		
	$(".kkk").click(function(){
		var text=$(".kkk").text();
		$(".Pop_header span").text(text);
		$(".Pop").css("display","block");
		
		})
	$(".img_text").click(function(){
		var index=$(".img_text").index(this);
		var text=$(".img_text").eq(index).text();
		$(".Pop_header span").text(text);
		$(".Pop").css("display","block");
		})
		

})
//为什么投资白银hover效果
$(function(){
  $(".term_one li").hover(
  function(){
	  $(this).children("div").css("display","block");
	  },function(){
		  $(this).children("div").css("display","none");		  
		  })	
})
//详细介绍页展示
$(function(){
	$(".dg_closed").click(function(){
		$(".issue_box").css("display","none");
		})
	$(".list_three_box h3").click(function(){
		var index=$(".list_three_box h3").index(this);
		if(index==0){
			$(".t9").css("display","block");
			}else if( index==1){
				$(".t10").css("display","block");
				}else{
					$(".t11").css("display","block");
					}
		
	})
	$(".text_p1").click(function(){
		var index=$(".text_p1").index(this);
		if(index==0){
			$(".t1").css("display","block");
			}else if( index==1){
				$(".t2").css("display","block");
				}else if(index==3){
					$(".t4").css("display","block");
					}else{
					    $(".t3").css("display","block");
						}
		
	})
	$(".text_p3").click(function(){
		var index=$(".text_p3").index(this);
		if(index==0){
			$(".t5").css("display","block");
			}else if( index==1){
				$(".t6").css("display","block");
				}else{
					    $(".t8").css("display","block");
						}
		
	})
	
})
//验证输入框
$(function(){
	$(".btns").click(function(){
	 var tex1=$(".content_bottom input").eq(0).val();
	 var tex2=$(".content_bottom input").eq(1).val();
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
					  $(".Pop").css("display","none");
					  setTimeout(function(){ $(".Pop2").css("display","none")} ,2000);
					 }
				 }
		 }
		
    })
	
	$(".Pop_btn").click(function(){
	 var tex1=$(".Pop input").eq(0).val();
	 var tex2=$(".Pop input").eq(1).val();
	 var tex=/^1[3,4,5,7,8][0-9]{9}$/;//匹配手机号
	 if(tex1=="" || tex1=="请输入您的姓名,如：'张先生'"){
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
			 if(tex2=="" || tex2=="手机号"){
				if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
    				alert("请输入您的手机号码！");
				}else{
					layer.open({
						className:'layerballoon',
						content:"请输入您的手机号码！",
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
					  $(".Pop").css("display","none");
					  setTimeout(function(){ $(".Pop2").css("display","none")} ,2000);
					 }
				 }
		 }
		
    })
	
})
//计算获利
$(function(){
  $(".in_btn").click(function(){
	  var money=$(".money").val();
	  var num=Math.floor( money/2100);
	  $(".shou").val(num);
	  var sun=num*20*50;
	  $(".in_money2").val(sun);
	 })	
	//setInterval(scrollTop,50)
	var timer;
	var num;
	function scrollTop(){
		if(num<=0){
			clearInterval(timer);
		}else{
			num=num-300;
		    $(document).scrollTop(num);	
			}	    
    }
	
	$(".sidebar_ban2").click(function(){
		num=$(document).scrollTop();
		timer=setInterval(scrollTop,50)
		})
})








