// JavaScript Document
//转盘效果
$(function() {
	var $btn = $('.playbtn');
	var playnum = 100; //初始次数，由后台传入
	//$('.playnum').html(playnum);
	var start=0;//0代表未注册，1代表已注册
	var isture = 0;
	var clickfunc = function() {
		var data = [1, 2];
		//data为随机出来的结果，根据概率后的结果
		data = data[Math.floor(Math.random() * data.length)];
		switch(data) {
			//case 1:
//				rotateFunc(1, 0, '恭喜您获得体验红包!');
//				break;
//			case 2:
//				rotateFunc(2, 36, '恭喜您获得技术指标!');
//				break;
//			case 3:
//				rotateFunc(3, 72, '恭喜您获得手续费减免!');
//				break;
//			case 4:
//				rotateFunc(4, 108, '恭喜您获得体验红包!');
//				break;
//			case 5:
//				rotateFunc(5, 144, '恭喜您获得技术指标!');
//				break;
			case 1:
				rotateFunc(6, 180, '恭喜您抽中"战法宝典"一份，注册账号即可领取!');
				break;
			//case 7:
//				rotateFunc(7, 216, '恭喜您获得手续费减免!');
//				break;
//			case 8:
//				rotateFunc(8, 252, '恭喜您获得你亏损我买单!');
//				break;
//			case 9:
//				rotateFunc(9, 288, '恭喜您获得苹果iPhone7!');
//				break;
			case 2:
				rotateFunc(10, 324, '恭喜您抽中"战法宝典"一份，注册账号即可领取!');
				break;
		}
	}
	$btn.click(function() {
		if(isture) return; // 如果在执行就退出
		isture = true; // 标志为 在执行
		//先判断是否登录,未登录则执行下面的函数
		if(start==0&&playnum==0) {
			//$('.playnum').html('0');
			$(".PopupBox").eq(0).css("display","block");
			isture = false;
		} else { //登录了就执行下面
			if(playnum <= 0) { //当抽奖次数为0的时候执行
				alert("没有次数了");
				//$('.playnum').html(0);
				isture = false;
			} else { //还有次数就执行
				playnum = playnum - 1; //执行转盘了则次数减1
				if(playnum <= 0) {
					playnum = 0;
				}
				//$('.playnum').html(playnum);
				clickfunc();
			}
		}
	});
	var rotateFunc = function(awards, angle, text) {
		isture = true;
		$btn.stopRotate();
		$btn.rotate({
			angle: 0,
			duration: 4000, //旋转时间
			animateTo: angle + 1440, //让它根据得出来的结果加上1440度旋转
			callback: function() {
				isture = false; // 标志为 执行完毕
				//if(start==0&&playnum==0) {
				 if(browserRedirect()==true){
					$(".PopupBox").eq(0).css({"display":"block","top":"50%","margin":"-220px 0 0 -300px"});
					$(".rowTect").eq(0).text(text);	
				  }else{
					   $(".PopupBox").eq(0).css("display","block");
   		               $(".rowTect").eq(0).text(text);	 
					  }
				//	}
			}
		});
	};
});




function browserRedirect() {

	var sUserAgent= navigator.userAgent.toLowerCase();
	
	var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
	
	var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";
	
	var bIsMidp= sUserAgent.match(/midp/i) == "midp";
	
	var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	
	var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";
	
	var bIsAndroid= sUserAgent.match(/android/i) == "android";
	
	var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
	
	var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
	
	
	return (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)?true:false;	
}





/*弹窗*/
$(function(){
	$(".bg1-btn").eq(0).click(function(){
		$(".PopupBox").eq(0).css("display","block");
		$(".rowTect").eq(0).text("立即免费注册,观看视频");		
		})
    $(".close_btn").eq(0).click(function(){
		$(".PopupBox").eq(0).css("display","none");
		})
		
	$(".text3").eq(0).find("img").click(function(){
         if(browserRedirect()==true){
			 $(".PopupBox").eq(0).css({"display":"block","top":"0","margin":"220px 0 0 -300px"});
		     $(".rowTect").eq(0).text("立即免费注册,观看视频");		
			 }else{
				 $(".PopupBox").eq(0).css("display","block");
   		         $(".rowTect").eq(0).text("立即免费注册,观看视频");	 
				 }
			 	
		})

})



/*人次与名单 ++*/
$(function(){
	
  setInterval(function(){
	    var moble=[];
		var platform=[];
		    moble=getMoble();
		    platform=getplatform();
			
		$(".mob").each(function(index, element) {
			$(".mob").eq(index).text(moble[index]);
            
        });
		$(".pla").each(function(index, element) {
            $(".pla").eq(index).text(platform[index]);
        });
	},3000);
	
 //生成随机奖品	
	function getplatform() {
		var prefixArray = new Array("体验红包", "技术指标", "手续费减免", "战法宝典", "你亏损我买单", "苹果iPhone7");
		var prefix=[];
		for(var num=0; num<6; num++){	
			var i = parseInt(6 * Math.random());
			    prefix[num]=prefixArray[i];		
		}
		return prefix;
	}

 //生成随机手机号
  function getMoble() {
    var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
	var prefix=[];
	for(var con=0; con<6; con++){	
		var i = parseInt(10 * Math.random());
		var tel = prefixArray[i];
		
		//返回指定范围的随机数(m-n之间)的公式
        var num=Math.floor(Math.random()*(9999-1000)+1000);
		
		   prefix[con] = tel+"*****"+num;
	}
	return prefix;
  }
	
	//获取时间差值
	function countDown(){
		var curTime = new Date();//当前时间
		// 把时间格式的字符变成标准的时间格式，对字符串的格式有要求是中间用“-”在IE6-IE8下不兼容，需要改成“/”
		var tarTime = new Date("2016/10/27 00:00:00");//上线时间
		var spanCurTime = curTime.getTime(); //当前时间距离格林威治时间毫秒
		var spanTarTime = tarTime.getTime(); //目标时间距离格林威治时间毫秒
		var different = spanCurTime-spanTarTime;  //计算时间差
		var seconds = Math.floor(different/1000);
		return seconds;
	}
	
	//初始增加参与人数
	var oldCount=countDown()/3;
	var num=$(".font-red").text();//获取文本
	var len=$(".font-num").length;//文本长度
	num=parseInt(num)+oldCount;//解析文本以十进制返回文本
	num=String(num);//更改文本类型 改为字符串类型
	var html="";
	var arr=[];
	for(var i=0;i<len;i++){
		var str=num.substr(i,1);
		arr.push(str);
	}
	for(var i=0;i<len;i++){
		$(".font-red").text("");
		html+="<span class='font-num'>"+arr[i]+"</span>";
		$(".font-red").append(html);
	}
	
	//参与人数++此处为视觉效果++
		setInterval(function(){
			var num=$(".font-red").text();//获取文本
			var len=$(".font-num").length;//文本长度
			num=parseInt(num)+1;//解析文本以十进制返回文本+1
			num=String(num);//更改文本类型 改为字符串类型
			var html="";
			var arr=[];
			for(var i=0;i<len;i++){
				var str=num.substr(i,1);
				arr.push(str);
			}
			for(var i=0;i<len;i++){
				$(".font-red").text("");
				html+="<span class='font-num'>"+arr[i]+"</span>";
				$(".font-red").append(html);
			}
		},3000)  
		
	})
	
/*表单验证*/
$(function(){
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
		var tex2=/^1[3,4,5,7,8][0-9]{9}$/;//匹配手机号
		var val2=$("#mob").val();//获取手机号
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
			 /*  if(!tex.test(val)){*/
				if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
					alert("请输入您的中文名称");
				}else{
					layer.open({
					className:'layerballoon',
					content:"请输入您的中文名称",
					time: 30 //2秒后自动关闭
				});
			   }
			 /*}*/
		  }else if(val2==""||val2=="请输入您的手机号码"){
			  if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
				alert("请输入您的手机号码");
			}else{
				layer.open({
					className:'layerballoon',
					content:"请输入您的手机号码！",
					time: 30 //2秒后自动关闭
				});
	
				}
			  }else if(!tex2.test(val2)){
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
				$(".PopupBox").eq(0).css("display","none");
				if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
					alert("注册成功！稍后客服将与您联系！");
				}else{
					layer.open({
						className:'layerballoon',
						content:"注册成功！稍后客服将与您联系！",
						time: 30 //2秒后自动关闭
						});
				}
			}
		})

	})

