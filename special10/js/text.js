/*! layer mobile-v1.7 弹层组件移动版 License LGPL http://layer.layui.com/mobile By 贤心 */
//;!function(a){"use strict";var b=document,c="querySelectorAll",d="getElementsByClassName",e=function(a){return b[c](a)},f={type:0,shade:!0,shadeClose:!0,fixed:!0,anim:!0},g={extend:function(a){var b=JSON.parse(JSON.stringify(f));for(var c in a)b[c]=a[c];return b},timer:{},end:{}};g.touch=function(a,b){var c;return/Android|iPhone|SymbianOS|Windows Phone|iPad|iPod/.test(navigator.userAgent)?(a.addEventListener("touchmove",function(){c=!0},!1),void a.addEventListener("touchend",function(a){a.preventDefault(),c||b.call(this,a),c=!1},!1)):a.addEventListener("click",function(a){b.call(this,a)},!1)};var h=0,i=["layermbox"],j=function(a){var b=this;b.config=g.extend(a),b.view()};j.prototype.view=function(){var a=this,c=a.config,f=b.createElement("div");a.id=f.id=i[0]+h,f.setAttribute("class",i[0]+" "+i[0]+(c.type||0)),f.setAttribute("index",h);var g=function(){var a="object"==typeof c.title;return c.title?'<h3 style="'+(a?c.title[1]:"")+'">'+(a?c.title[0]:c.title)+'</h3><button class="layermend"></button>':""}(),j=function(){var a,b=(c.btn||[]).length;return 0!==b&&c.btn?(a='<span type="1">'+c.btn[0]+"</span>",2===b&&(a='<span type="0">'+c.btn[1]+"</span>"+a),'<div class="layermbtn">'+a+"</div>"):""}();if(c.fixed||(c.top=c.hasOwnProperty("top")?c.top:100,c.style=c.style||"",c.style+=" top:"+(b.body.scrollTop+c.top)+"px"),2===c.type&&(c.content='<i></i><i class="laymloadtwo"></i><i></i>'),f.innerHTML=(c.shade?"<div "+("string"==typeof c.shade?'style="'+c.shade+'"':"")+' class="laymshade"></div>':"")+'<div class="layermmain" '+(c.fixed?"":'style="position:static;"')+'><div class="section"><div class="layermchild '+(c.className?c.className:"")+" "+(c.type||c.shade?"":"layermborder ")+(c.anim?"layermanim":"")+'" '+(c.style?'style="'+c.style+'"':"")+">"+g+'<div class="layermcont">'+c.content+"</div>"+j+"</div></div></div>",!c.type||2===c.type){var k=b[d](i[0]+c.type),l=k.length;l>=1&&layer.close(k[0].getAttribute("index"))}document.body.appendChild(f);var m=a.elem=e("#"+a.id)[0];c.success&&c.success(m),a.index=h++,a.action(c,m)},j.prototype.action=function(a,b){var c=this;if(a.time&&(g.timer[c.index]=setTimeout(function(){layer.close(c.index)},1e3*a.time)),a.title){var e=b[d]("layermend")[0],f=function(){a.cancel&&a.cancel(),layer.close(c.index)};g.touch(e,f)}var h=function(){var b=this.getAttribute("type");0==b?(a.no&&a.no(),layer.close(c.index)):a.yes?a.yes(c.index):layer.close(c.index)};if(a.btn)for(var i=b[d]("layermbtn")[0].children,j=i.length,k=0;j>k;k++)g.touch(i[k],h);if(a.shade&&a.shadeClose){var l=b[d]("laymshade")[0];g.touch(l,function(){layer.close(c.index,a.end)})}a.end&&(g.end[c.index]=a.end)},a.layer={v:"1.7",index:h,open:function(a){var b=new j(a||{});return b.index},close:function(a){var c=e("#"+i[0]+a)[0];c&&(c.innerHTML="",b.body.removeChild(c),clearTimeout(g.timer[a]),delete g.timer[a],"function"==typeof g.end[a]&&g.end[a](),delete g.end[a])},closeAll:function(){for(var a=b[d](i[0]),c=0,e=a.length;e>c;c++)layer.close(0|a[0].getAttribute("index"))}},"function"==typeof define?define(function(){return layer}):function(){var a=document.scripts,c=a[a.length-1],d=c.src,e=d.substring(0,d.lastIndexOf("/")+1);c.getAttribute("merge")||document.head.appendChild(function(){var a=b.createElement("link");return a.href=e+"need/layer.css",a.type="text/css",a.rel="styleSheet",a.id="layermcss",a}())}()}(window);



/*!

@Name：layer mobile v1.7 弹层组件移动版
@Author：贤心
@Date：2015-11-25
@Copyright：Sentsin Xu(贤心)
@官网：http://layer.layui.com/mobile/
@License：MIT
       
*/

;!function(win){        
"use strict";

var doc = document, query = 'querySelectorAll', claname = 'getElementsByClassName', S = function(s){
   return doc[query](s);
};

//默认配置
var config = {
    type: 0,
    shade: true,
    shadeClose: true,
    fixed: true,
    anim: true,
};

var ready = {
   extend: function(obj){
       var newobj = JSON.parse(JSON.stringify(config));
       for(var i in obj){
           newobj[i] = obj[i];
       }
       return newobj;
   }, 
   timer: {}, end: {}
};

//点触事件
ready.touch = function(elem, fn){
   var move;
   if(!/Android|iPhone|SymbianOS|Windows Phone|iPad|iPod/.test(navigator.userAgent)){
       return elem.addEventListener('click', function(e){
           fn.call(this, e);
       }, false);
   }
   elem.addEventListener('touchmove', function(){
       move = true;
   }, false);
   elem.addEventListener('touchend', function(e){
       e.preventDefault();
       move || fn.call(this, e);
       move = false;
   }, false); 
};

var index = 0, classs = ['layermbox'], Layer = function(options){
   var that = this;
   that.config = ready.extend(options);
   that.view();
};

Layer.prototype.view = function(){
   var that = this, config = that.config, layerbox = doc.createElement('div');

   that.id = layerbox.id = classs[0] + index;
   layerbox.setAttribute('class', classs[0] + ' ' + classs[0]+(config.type || 0));
   layerbox.setAttribute('index', index);

   var title = (function(){
       var titype = typeof config.title === 'object';
       return config.title
       ? '<h3 style="'+ (titype ? config.title[1] : '') +'">'+ (titype ? config.title[0] : config.title)  +'</h3><button class="layermend"></button>'
       : '';
   }());
   
   var button = (function(){
       var btns = (config.btn || []).length, btndom;
       if(btns === 0 || !config.btn){
           return '';
       }
       btndom = '<span type="1" class="btndefine">'+ config.btn[0] +'</span>'
       if(btns === 2){
           btndom = '<span type="0" class="btncancel">'+ config.btn[1] +'</span>' + btndom;
       }
       return '<div class="layermbtn">'+ btndom + '</div>';
   }());
   
   if(!config.fixed){
       config.top = config.hasOwnProperty('top') ?  config.top : 100;
       config.style = config.style || '';
       config.style += ' top:'+ ( doc.body.scrollTop + config.top) + 'px';
   }
   
   if(config.type === 2){
       config.content = '<i></i><i class="laymloadtwo"></i><i></i>';
   }
   
   layerbox.innerHTML = (config.shade ? '<div '+ (typeof config.shade === 'string' ? 'style="'+ config.shade +'"' : '') +' class="laymshade"></div>' : '')
   +'<div class="layermmain" '+ (!config.fixed ? 'style="position:static;"' : '') +'>'
       +'<div class="section">'
           +'<div class="layermchild '+ (config.className ? config.className : '') +' '+ ((!config.type && !config.shade) ? 'layermborder ' : '') + (config.anim ? 'layermanim' : '') +'" ' + ( config.style ? 'style="'+config.style+'"' : '' ) +'>'
               + title
               +'<div class="layermcont">'+ config.content +'</div>'
               + button
           +'</div>'
       +'</div>'
   +'</div>';
   
   if(!config.type || config.type === 2){
       var dialogs = doc[claname](classs[0] + config.type), dialen = dialogs.length;
       if(dialen >= 1){
           layer.close(dialogs[0].getAttribute('index'))
       }
   }
   
   document.body.appendChild(layerbox);
   var elem = that.elem = S('#'+that.id)[0];
   config.success && config.success(elem);
   
   that.index = index++;
   that.action(config, elem);
};

Layer.prototype.action = function(config, elem){
   var that = this;
   
   //自动关闭
   if(config.time){
       ready.timer[that.index] = setTimeout(function(){
           layer.close(that.index); console.log(1);
       }, config.time*1000);
   }
   
   //关闭按钮
   if(config.title){
       var end = elem[claname]('layermend')[0], endfn = function(){
           config.cancel && config.cancel();
           layer.close(that.index);
       };
       ready.touch(end, endfn);
   }
   
   //确认取消
   var btn = function(){
       var type = this.getAttribute('type');
       if(type == 0){
           config.no && config.no();
           layer.close(that.index);
       } else {
           config.yes ? config.yes(that.index) : layer.close(that.index);
       }
   };
   if(config.btn){
       var btns = elem[claname]('layermbtn')[0].children, btnlen = btns.length;
       for(var ii = 0; ii < btnlen; ii++){
           ready.touch(btns[ii], btn);
       }
   }
   
   //点遮罩关闭
   if(config.shade && config.shadeClose){
       var shade = elem[claname]('laymshade')[0];
	   var shade2 = elem[claname]('layerballoon')[0];
       ready.touch(shade, function(){
           layer.close(that.index, config.end);
       });
	   ready.touch(shade2, function(){
           layer.close(that.index, config.end);
       });
   }

   config.end && (ready.end[that.index] = config.end);
};

win.layer = {
   v: '1.7',
   index: index,
   
   //核心方法
   open: function(options){
       var o = new Layer(options || {});
       return o.index;
   },
   
   close: function(index){
       var ibox = S('#'+classs[0]+index)[0];
       if(!ibox) return;
       ibox.innerHTML = '';
       doc.body.removeChild(ibox);
       clearTimeout(ready.timer[index]);
       delete ready.timer[index];
       typeof ready.end[index] === 'function' && ready.end[index]();
       delete ready.end[index]; 
   },
   
   //关闭所有layer层
   closeAll: function(){
       var boxs = doc[claname](classs[0]);
       for(var i = 0, len = boxs.length; i < len; i++){
           layer.close((boxs[0].getAttribute('index')|0));
       }
   }
};

'function' == typeof define ? define(function() {
   return layer;
}) : function(){
   
   var js = document.scripts, script = js[js.length - 1], jsPath = script.src;
   var path = jsPath.substring(0, jsPath.lastIndexOf("/") + 1);
   
   //如果合并方式，则需要单独引入layer.css
   if(script.getAttribute('merge')) return; 
   
/*   document.head.appendChild(function(){
       var link = doc.createElement('link');
       link.href = path + 'layer.css';
       link.type = 'text/css';
       link.rel = 'styleSheet'
       link.id = 'layermcss';
       return link;
   }());
*/   
}();

}(window);