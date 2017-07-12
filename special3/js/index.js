// JavaScript Document
$(document).ready(function(e) {
	$(".btn").click(function(){
			$(".PopupBox").show(400);
		})
	$(".close_btn").click(function(){
		$(".PopupBox").hide(400);
		})
	$(".btns").click(function(){
		var tex=/^1[3,4,5,7,8][0-9]{9}$/;//匹配手机号
		var val=$("#mob").val();//获取手机号
	  //判断手机号
	   if(val==""||val=="请输入您的手机号码"){
			if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
				alert("请输入您的手机号码");
			}else{
				layer.open({
					className:'layerballoon',
					content:"请输入您的手机号码！",
					time: 30 //2秒后自动关闭
				});
	
				}
		 }else{
		  if(!tex.test(val)){
				if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
					alert("请输入正确的手机号码！");
				}else{
					layer.open({
					className:'layerballoon',
					content:"请输入正确的手机号码！",
					time: 30 //2秒后自动关闭
				});
				}
			 }
		 }
	  })
	$(".sub_btn").click(function(){
		var tex=/^[\u4e00-\u9fa5]{0,}$/;//匹配汉字
		var val=$("#txtName").val();//获取姓名
		//判断姓名框输入
	    if(val=="" || val=="请输入您的姓名：如张先生"){
			if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
				alert("请输入您的姓名");
			}else{
				layer.open({
					className:'layerballoon',
					content:"请输入您的姓名",
					time: 30 //2秒后自动关闭
				});

				}
		  }else{
			   if(!tex.test(val)){
				if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
					alert("请输入您的中文名称");
				}else{
					layer.open({
					className:'layerballoon',
					content:"请输入您的中文名称",
					time: 30 //2秒后自动关闭
				});
			   }
			 }
		  }
		
		})
    
});