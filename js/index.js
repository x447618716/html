// JavaScript Document

//导航栏切换效果
//$(function(){
////	alert("整个div宽度"+$(".Mark").width());
//	//alert("时间栏宽度"+$(".List-news-term .Time").width());
////	alert("A标签宽度"+$(".List-news-term ").width());
//	//var num=0;
////	var navli=$(".menu-navbar li");
////	
////	    navli.click(function(){
////			var index=navli.index(this);
////			    alert(index);
////				navli.eq(num).removeAttr("id");
////				navli.eq(index).attr("id","start1");
////                num=index;
////		})
//	})
//



//加入收藏
function AddFavorite(URL,Title){
    URL=encodeURI(URL)||window.location.href;
    Title=Title||document.title;
    try{
        window.external.addFavorite(URL,Title);
    }catch(e){
        try{
            window.sidebar.addPanel(Title,URL,"");
        }catch(e){
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}


//设为首页
function SetHome(URL){
    URL=URL||window.location.href;
    if(document.all){//IE类浏览器
        document.body.style.behavior='url(#default#homepage)';
        document.body.setHomePage(URL);
    }else if(window.sidebar){//火狐类浏览器
        if(window.netscape){
            try{
        netscape.security.PrivilegeManager.
                enablePrivilege("UniversalXPConnect");
            }catch(e){
            alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项signed.applets.codebase_principal_support 值该为true");
            }
        }
        var prefs=Components.classes
                ['@mozilla.org/preferences-service;1'].
               getService(Components.interfaces.nsIPrefBranch);
        prefs.setCharPref('browser.startup.homepage',URL);

    }else{
		alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");		
		}
}

//媒体标识 hover效果
$(function(){
	   var mark=$(".List-news-term");
	       mark.each(function(index, element) {
			   mark.eq(index).get(0).onmouseover=function(){
				     mark.find(".Mark").eq(index).removeAttr("background");
				     mark.find(".Mark").eq(index).css("background","url(./image2/mark.png) no-repeat 0 0");
					/*  console.log("移除"+index);*/
				   }
			   mark.eq(index).get(0).onmouseleave=function(){
			      mark.find(".Mark").eq(index).removeAttr("background");
				  mark.find(".Mark").eq(index).css("background","url(./image2/mark.png) no-repeat 0 -10px");
				/*   console.log("移入"+index);    */
                    }
			})
	
	})

//banner循环滚动效果
$(function(){
	var num=0;
	var banLI=$("#start").find("img");
	    banLI.fadeTo(200,0.5);
	    banLI.click(function(){
			num=banLI.index(this);
			clearInterval(timer);
			num++;
			timer=setInterval(auto,3000);
			var i = $(this).attr("pic");
            var t = $(this).attr("text").split("|");
			banLI.fadeTo(200,0.5);
            $(this).fadeTo(200,1);
			$("#back").children().addClass("gray").end().fadeTo(500,0.1,
				function(){
					$(this).children("a").children("img").attr({"src":"image2/index"+i+".jpg"}).removeClass("gray");
					$(this).children("a").attr("href",t[0]);
					$(this).children("a").attr("target",t[1]);
					$(this).fadeTo(500,1,function(){
						$("#frontText").html(t[0]).fadeIn(200);	
						$("#frontTextBack").html(t[0]).fadeIn(200);	
						$("#frontTextSub").html(t[1]).fadeIn(200);
					})
		        })
		});
	 	$("#back img").get(0).onmouseover=function(){
	         clearInterval(timer);
        }
		$("#back img").get(0).onmouseleave=function(){
			timer = setInterval(auto,3000);
		}
		var timer=setInterval(auto,3000);
		function auto(){
			if (num==banLI.length)
			{
				 clearInterval(timer);
				 num = 0;				
				 timer=setInterval(auto,3000);
			}
			$("#start img").eq(num).click();
			
			
		}
		

	})


    
//热点动态
  $(function(){
				var imgLi=$(".slide").find("li");//图片集合
				var textLi=$(".focus-title").find(".title");//焦点文字集合
				var numLi=$(".focus ul").find("li");//焦点数字集
				var contentLi=$(".content-contain").find(".content-show");//内容集合
	
				numLi.click(function(){
					var index=numLi.index(this);
					numLi.removeClass("on");
					numLi.eq(index).addClass("on");
					
					imgLi.hide();
					contentLi.hide();
					textLi.hide();
					
					imgLi.eq(index).show();
					contentLi.eq(index).show();
					textLi.eq(index).show();
				
				})
			
			})
//分析师
   $(function(){
	           var teachLi=$(".analyst-show").find(".showdiv");//老师介绍集合
			   var teachimgLi=$(".analyst-focus-img").find("li");//老师焦点集合
			   var  num=0;
	            
			   teachimgLi.click(function(){
					var index=teachimgLi.index(this);
			        teachimgLi.eq(num).removeAttr("id");
					teachimgLi.eq(index).attr("id","start");
					teachLi.hide();
					teachLi.eq(index).show();
					num=index;
					
				})
				
	         })
//研报刊物
   $(function(){
	   
               /* var ReportLi=$(".Report-list").find(".Report-list-term")
				var length=ReportLi.length;
				var last=length-1;
				var cur=0;
				var count=5;
			
				
				$(".right").click(function(){
					ReportLi.eq(last).css("display","none");
					ReportLi.eq(cur).fadeIn("slow");

					if(cur==0){
						
					}else{
						
						cur=cur-1;	
					}
					console.log("right"+cur);
				})
				$(".left").click(function(){
					ReportLi.eq(cur).css("display","none");
					ReportLi.eq(cur+count).fadeIn("slow");
					
					if(cur+count==last){
					
					}else{
		             
						cur=cur+1;	
					}
					console.log("left"+cur);
				
				})*/
				
				var foucsLi=$(".column-width").find("li");
				var ReportLi=$(".Report-list").find(".Report-list-term")
				var length=ReportLi.length;
				var last=length-1;
				var cur=0;
				
				foucsLi.click(function(){
					var index=foucsLi.index(this);
					foucsLi.removeAttr("id");
					foucsLi.eq(index).attr("id","start-line");
					ReportLi.css("display","none");
					ReportLi.eq(index).fadeIn("slow");
					})
				
				
				
				//$(".right").click(function(){
//					if(cur==last){
//						cur=0;						
//					}else{	
//						cur=cur+1;	
//					}
//					ReportLi.css("display","none");
//					ReportLi.eq(cur).fadeIn("slow");	
//				})
//				$(".left").click(function(){
//					if(cur==0){
//						cur=last;	
//					}else{
//						cur=cur-1;
//					}
//					ReportLi.css("display","none");
//					ReportLi.eq(cur).fadeIn("slow");	
//				})
				
				
				
				
            })
//日评 周评
     $(function(){
		
		 $(".nav-spacing").eq(0).click(function(){
			
			$(".day").fadeIn("slow");
			$(".week").css("display","none");
			$(".nav-spacing").eq(0).attr("id","List-news-title");
			$(".nav-spacing").eq(1).removeAttr("id");
			 
			 })
		 $(".nav-spacing").eq(1).click(function(){
			 
			$(".week").fadeIn("slow");
			$(".day").css("display","none");
			$(".nav-spacing").eq(1).attr("id","List-news-title");
			$(".nav-spacing").eq(0).removeAttr("id");
			 
			 })
	
		   })
		

