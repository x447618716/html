// JavaScript Document
$(function(){
	$(".mian").hover(function(){
		$(this).children("ul").css("display","block");},
		function(){
		$(this).children("ul").css("display","none");	
	})
	
	
})

//banner轮播
$(function(){
	 var mainli=$("#banner_mian").find("li");
	 var strat=0;
	 var timer;
	 var timer2;
	 var clickup=true;
	 
	 for(var i=0; i<mainli.length; i++){
		 $("<span>").attr("class","focus").appendTo($("#banner_focus"));
		 }
		 
	 $(".focus").eq(strat).attr("id","focus");
	 $(".focus").click(function(){
		var index=$(".focus").index(this);
		    $(".focus").removeAttr("id");
			mainli.hide();
		 	$(".focus").eq(index).attr("id","focus");
		    mainli.eq(index).show();
			strat=index;
			
		})
	function BannerShow(){
		$(".focus").removeAttr("id");
		if(strat==mainli.length){
			clearInterval(timer);
			strat=0;
			mainli.hide();
			mainli.eq(strat).show();
			$(".focus").eq(strat).attr("id","focus");
			timer=setInterval(BannerShow,3000);
		}else{
			mainli.hide();
			mainli.eq(strat).show();
			$(".focus").eq(strat).attr("id","focus");
		   }
		 strat++;
	}
	timer=setInterval(BannerShow,3000);
	
	$("#banner_mian img").hover( function(){clearInterval(timer)},function(){timer = setInterval(BannerShow,3000)})
       
			 
})
//产品列表箭头hover效果
$(function(){
	$(".Product-content").hover(function(){
		$(this).children(".Triangle").eq(0).addClass("Triangle-border");
		$(this).children(".Triangle").eq(1).addClass("Triangle-background");	
		},function(){
		     $(this).children(".Triangle").eq(0).removeClass("Triangle-border");
		     $(this).children(".Triangle").eq(1).removeClass("Triangle-background");	
		})
	
	$(".Product-content").click(function(){
		$(".Product-content").removeAttr("id");
		$(".Product-show").hide();
		var index =$(".Product-content").index(this);
		$(".Product-content").eq(index).attr("id","Product-content");
		$(".Product-show").eq(index).show();
		$(".Product-content").children().removeAttr("id");
		 $(this).children(".Triangle").eq(0).attr("id","border");
		 $(this).children(".Triangle").eq(1).attr("id","background");	
		
	})
	
})
//分析师hover效果
$(function(){
	$(".imgshow").hover(
	function(){
		$(this).children(".img-title").show();		
		},
	function(){
		$(this).children(".img-title").hide();	
		}
		
		)	
})

//侧边栏电话hover效果
$(function(){
	$(".Phone_img").hover(function(){
		$(this).siblings().show();
		$(".QQ").css("border-bottom","1px solid #FFF");
		$(".Accounts").css("border-top","1px solid #FFF");
		},function(){
			$(this).siblings().hide();
		    $(".QQ").removeAttr("style");
		    $(".Accounts").removeAttr("style");
			});
	$(".Phone").hover(function(){
		$(this).show();
		$(this).siblings().css("background","url(./image/sidebarBg.png) no-repeat -50px -50px");
		$(".QQ").css("border-bottom","1px solid #FFF");
		$(".Accounts").css("border-top","1px solid #FFF");
		},function(){
			$(this).hide();
			$(this).siblings().removeAttr("style");
			$(".QQ").removeAttr("style");
		    $(".Accounts").removeAttr("style");
			})
	
})










































