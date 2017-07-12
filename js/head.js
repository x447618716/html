// JavaScript Document
////加入收藏
//function AddFavorite(sURL, sTitle){
//	 sURL = encodeURI(sURL); 
//	 try{ 
//	     window.external.addFavorite(sURL, sTitle); 
//	 }
//	 catch(e){ 
//	 try{ 
//	       window.sidebar.addPanel(sTitle, sURL, ""); 
//	 }
//	 catch(e){ 
//	      alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
//	   } 
//	  }
//	}
////设为首页
//function SetHome(url){
// if (document.all){
//      document.body.style.behavior='url(#default#homepage)';
//      document.body.setHomePage(url);
// }
// else{
// alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
// }
//}


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
