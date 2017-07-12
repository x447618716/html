// JavaScript Document
$(document).ready(function(){
	if(screen.width<736){
		$(".img2").find("a").attr("href","mqqwpa://im/chat?chat_type=wpa&uin=800188755&version=1&src_type=web&web_src=www.chinesestack.com"||"http://mp.weixin.qq.com/mp/redirect?url=mqqwpa://im/chat?chat_type=wpa&uin=800188755&version=1&src_type=web&web_src=www.chinesestack.com");
		$(".img3").find("a").attr("href","mqqwpa://im/chat?chat_type=wpa&uin=800188755&version=1&src_type=web&web_src=www.chinesestack.com"||"http://mp.weixin.qq.com/mp/redirect?url=mqqwpa://im/chat?chat_type=wpa&uin=800188755&version=1&src_type=web&web_src=www.chinesestack.com");
		
		}	
		
	$(function(){
          var ua = navigator.userAgent.toLowerCase();
		 /* alert(ua);*/
	    if(ua.match(/MicroMessenger/i) == 'micromessenger'){//微信浏览器内核
           /*  if (/iphone|ipod/.test(ua)) {
               if(/micromessenger/.test(ua)){
                  document.getElementById("popweixin").style.display = "block";
                  }
               }*/
			  /* var tmp=this.attributes['old'].value;this.attributes['old'].value=this.src;this.src=tmp;" style='pointer:cursor;border:none' old='2.jpg' */
			   
			   $(".shang_close").click(function(){
				$(".shang_box").fadeToggle();
			   });
			 $(".img2").find("a").click(function(){
				$(".shang_box").fadeToggle();
				 });
		      $(".img3").find("a").click(function(){
				$(".shang_box").fadeToggle();
				 });
			   
             }else{
				 }
	    })
   })