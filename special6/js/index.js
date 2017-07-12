// JavaScript Document
$(function(){
	//预加载图片
	var arr=['image/ZOOM1.jpg','image/ZOOM2.jpg','image/ZOOM3.jpg','image/ZOOM4.jpg','image/ZOOM5.jpg','image/ZOOM6.jpg'];
	var newimage=[];
	for (var i=0; i<arr.length; i++){
        newimage[i]=new Image();
        newimage[i].src=arr[i];

    }
	
    
	$(".imgshow").find("img").click(function(){
		var index=$(".imgshow").find("img").index(this);
		$("<img>").attr({"id":"maskimg","src": newimage[index].src,"width":window.innerWidth}).appendTo($(".Mask"));
		$(".Mask").show();
		
	
	var el =document.querySelector("#maskimg");
	var elwidth=el.width;
	var elheight=el.height;
//	alert("设备宽"+window.innerWidth);
	//alert("设备高"+window.innerHeight);
	//console.log("图片宽"+el.width);
//	console.log("图片高"+el.height);
//    alert("图片宽"+el.width);
//	alert("图片高"+el.height);			
	var START_X = Math.abs((window.innerWidth - elwidth) /2);
    var START_Y = Math.abs((window.innerHeight - elheight) /2);
 	//alert(START_Y);	

	var ticking = false;
    var transform;
   
	
	var mc = new Hammer.Manager(el);
	
	 mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
	 mc.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(mc.get('pan'));
	 mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan'), mc.get('rotate')]);
	 
	 mc.on("panstart panmove", onPan);
	 mc.on("pinchstart pinchmove", onPinch);
	 
	 function resetElement() {
        transform = {
            translate: { x: START_X, y: START_Y },
            scale: 1,
            angle: 0,
            rx: 0,
            ry: 0,
            rz: 0
        };
		 updateElementTransform()
	 }
	 
	  function updateElementTransform() {
        var value = [
                    'translate3d(' + transform.translate.x + 'px, ' + transform.translate.y + 'px, 0)',
                    'scale(' + transform.scale + ', ' + transform.scale + ')',
                    'rotate3d('+ transform.rx +','+ transform.ry +','+ transform.rz +','+  transform.angle + 'deg)'
        ];

        value = value.join(" ");
        el.style.webkitTransform = value;
        el.style.mozTransform = value;
        el.style.transform = value;
        ticking = false;
    }
	
	// 平移事件
    function onPan(ev) {
       
        transform.translate = {
            x: START_X + ev.deltaX,
            y: START_Y + ev.deltaY
        };
         updateElementTransform()
        
    }
	//多触点事件
    var initScale = 1;
    function onPinch(ev) {
        if(ev.type == 'pinchstart') {
            initScale = transform.scale || 1;
        }

    
        transform.scale = initScale * ev.scale;
        updateElementTransform()
       
    }


    resetElement();
		

	})
	
	$(".mask-box").eq(0).click(function(){
		$(".Mask").find("img").detach();
		$(".Mask").hide();
		})
		
	$("#closeBtn").click(function(){
		$("#PopupBox").hide();
		})
		
	$(".ft-ico01").click(function(){
		if($("#PopupBox").css("display")=="block"){
			$("#PopupBox").css("display","none");
			}else{
				$(".name").text("预约开户");
				$("#PopupBox").show();
				}
		
		})	
	$(".ft-ico02").click(function(){
		if($("#PopupBox").css("display")=="block"){
			$("#PopupBox").css("display","none");
			}else{
				$(".name").text("开户咨询");
				$("#PopupBox").show();
				}
		
		})
	$(".ft-ico03").click(function(){
		if($("#PopupBox").css("display")=="block"){
			$("#PopupBox").css("display","none");
			}else{
				$(".name").text("实盘开户");
				$("#PopupBox").show();
				}
		
		})
		
	//获取手机验证码
$(document).on('click','.btns',function(){
	var tex=/^1[3,4,5,7,8][0-9]{9}$/;//匹配手机号
	var mobile=$("#mob2").val();//获取手机号
	 if(mobile==""||mobile=="请输入您的手机号码"){
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
		  if(!tex.test(mobile)){
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
	
});
//验证手机验证码
 $(".sub_btn").click(function(){
		var tex=/^[\u4e00-\u9fa5]{0,}$/;//匹配汉字
		var tex2=/^1[3,4,5,7,8][0-9]{9}$/;//匹配手机号
	    var mobile=$("#mob2").val();//获取手机号
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
		  }else if(!tex.test(val)){	   
				if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
					alert("请输入您的中文名称");
				}else{
					layer.open({
					className:'layerballoon',
					content:"请输入您的中文名称",
					time: 30 //2秒后自动关闭
				});
			   }
		  }else if(mobile==""||mobile=="请输入您的手机号码"){
			  if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
				alert("请输入您的手机号码");
			}else{
				layer.open({
					className:'layerballoon',
					content:"请输入您的手机号码！",
					time: 30 //2秒后自动关闭
				});
			   }
			}else if(!tex2.test(mobile)){
				if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
					alert("请输入正确的手机号码！");
				}else{
					layer.open({
					className:'layerballoon',
					content:"请输入正确的手机号码！",
					time: 30 //2秒后自动关闭
				});
				}			
			}else{
				alert("已提交，稍后客服将主动联系您");
				}

		
		})		
	

})