$(document).ready(function(e) {
 
	//用户查询滚动	
	/*  var runli=$(".font-gd").find("li");
	  var last=runli.length-1;
	  var cur=0;
		  function autoPlay(){
		if(cur==last){
			cur=0;	
		}else{
			cur=cur+1;	
		}
		runli.css("display","none");
		runli.eq(cur).slideToggle("slow");	
	}
	timer=setInter(autoPlay,3000);*/
	
   setInterval(function(){
		var moble=getMoble();
		var platform=getplatform();
		/*alert(moble);
		alert(platform);*/
		$("#mob").text(moble);
		$("#pla").text(platform);
	},3000);
	
	
	
  //生成随机查询平台	
	function getplatform() {
		var prefixArray = new Array("上海黄金交易所", "厦门两岸商品交易中心", "中浙大宗商品交易所", "中浙大宗商品交易所", "海西商品交易所", "新华浙江大宗商品交易中心", "北京石油交易所", "广东省贵金属交易中心", "天津贵金属交易所", "上海黄金交易所");
		var i = parseInt(10 * Math.random());
		var prefix = prefixArray[i];
		return prefix;
	}

 //生成随机手机号
  function getMoble() {
    var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
    var i = parseInt(10 * Math.random());
    var prefix = prefixArray[i];

   /* for (var j = 0; j < 4; j++) {
     var num=num+Math.floor(Math.random() * 10);
    }*/
	//返回指定范围的随机数(m-n之间)的公式
    var num=Math.floor(Math.random()*(9999-1000)+1000);

    prefix = prefix+"*****"+num;
	return prefix;
  /*  var x = document.getElementsByName("mobile_tel");
    for (var i = 0; i < x.length; i++) {
      var o = x[i];
      o.ue = prefix;
    }*/
  }
	
   
   //获取时间差值
	function countDown(){
		var curTime = new Date();//当前时间
		// 把时间格式的字符变成标准的时间格式，对字符串的格式有要求是中间用“-”在IE6-IE8下不兼容，需要改成“/”
		var tarTime = new Date("2016/9/14 12:00:00");//上线时间
		var spanCurTime = curTime.getTime(); //当前时间距离格林威治时间毫秒
		var spanTarTime = tarTime.getTime(); //目标时间距离格林威治时间毫秒
		var different = spanCurTime-spanTarTime;  //计算时间差
		//alert(different);
		var seconds = Math.floor(different/1000);
		return seconds;
	}
	
	//初始增加网友数
	var oldCount=countDown();
	var num=$(".num").text();//获取文本
	var len=$(".font-d").length;//文本长度
	num=parseInt(num)+oldCount;//解析文本以十进制返回文本
	num=String(num);//更改文本类型 改为字符串类型
	var html="";
	var arr=[];
	for(var i=0;i<len;i++){
		var str=num.substr(i,1);
		arr.push(str);
	}
	for(var i=0;i<len;i++){
		$(".num").text("");
		html+="<span class='font-d'>"+arr[i]+"</span>";
		$(".num").append(html);
	}  
	
	//网友数++此处为视觉效果++
		setInterval(function(){
			var num=$(".num").text();//获取文本
			var len=$(".font-d").length;//文本长度
			num=parseInt(num)+1;//解析文本以十进制返回文本+1
			num=String(num);//更改文本类型 改为字符串类型
			var html="";
			var arr=[];
			for(var i=0;i<len;i++){
				var str=num.substr(i,1);
				arr.push(str);
			}
			for(var i=0;i<len;i++){
				$(".num").text("");
				html+="<span class='font-d'>"+arr[i]+"</span>";
				$(".num").append(html);
			}
		},2000)
		
		
		
		//初始增加平台数
		var num=$(".num2").text();
			var len=$(".font-d2").length;
			num=parseInt(num)+oldCount;
			num=String(num);
			var html="";
			var arr=[];
			for(var i=0;i<len;i++){
				var str=num.substr(i,1);
				arr.push(str);
			}
			for(var i=0;i<len;i++){
				$(".num2").text("");
				html+="<span class='font-d2'>"+arr[i]+"</span>";
				$(".num2").append(html);
			}
		
		//平台数++此处为视觉效果++
		setInterval(function(){
			var num=$(".num2").text();
			var len=$(".font-d2").length;
			num=parseInt(num)+1;
			num=String(num);
			var html="";
			var arr=[];
			for(var i=0;i<len;i++){
				var str=num.substr(i,1);
				arr.push(str);
			}
			for(var i=0;i<len;i++){
				$(".num2").text("");
				html+="<span class='font-d2'>"+arr[i]+"</span>";
				$(".num2").append(html);
			}
		},2500)
		
 $(function(){
  
	    var ShowSta=0;
		$(".btn").click(function(){
			var tex=/^(0|[1-9][0-9]*)$/;
			var tex2=/^[a-zA-z0-9\u4E00-\u9FA5]*$/;
			var tex3=/^[A-Za-z]+$/;
			var tex4=/^[A-Za-z0-9]+$/;  
			var sta=0;
			var tex5=["共享币","虚拟币","二元期权","汽车","银行","邮票","保险","信用卡","酒店","车险","酒","房","住宅","贷款","保单","p2p","艺术","珠宝","pos机","餐饮","农品","农业产品","快递","保健品","古董","影视","新能源","房贷","医药","母婴","生物","科技","房","新华金控","微盘","微交易","企业信息","金花葵","普惠","药业","行政","天使币","微理财","理财","邮币卡","沃尔克","文交所","伯家利","超市","电商","证书","微信","商城","轮椅","百川币","支付","葡萄","比特币","灯","钱包","健康","医疗","古玩","还款","订货","黄金","2元期货","惠普","普惠","众筹","供应链","吊床","-","_","游戏","招工","信用评级","个体","小店","市场","阿胶","手机","通讯","中医","刨花板","回收","中福在线","爱卡族","开店宝","赛车","彩票","香烟","撕虎皮","艺术馆","茶","信用","广告","软件","娱乐","摩天轮","艾艾贴","公社","监狱","流量","不锈钢","营业执照","爱心","普陀","卧底","批发","骗术","钢铁","塑料","红枣","云计算","探宝","新易通","金雅","微商","商贸","芙艾","创赢","原石","文物","农产品","产权","传销","香烟","石油","云数贸","红茶","红宝石","文化","铜币","ccg","跨界","网赚","展销会","掛牌","钱","娱乐","鉴别","矿产","通讯","易乾","邮币","小牛","多少","门","窗","卡当","范围","经营","暖","回收","刨花板","再生能源"]
			var txtname=$(".btnTxt").val();
			if(txtname=="" || txtname=="请输入您要查询的平台"){
				if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
    				alert("查询内容不能为空");
				}else{
					layer.open({
						className:'layerballoon',
						content:"查询内容不能为空！",
						time: 30 //2秒后自动关闭
					});
				}
			}else{
				if(tex.test(txtname) && txtname.length!=6){
					if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
    					alert("请输入正确的股票编码或平台名称");
					}else{
						layer.open({
						className:'layerballoon',
						content:"请输入正确的股票编码或平台名称！",
						time: 30 //2秒后自动关闭
					});
					}
				}else{
					if(!tex2.test(txtname) || tex3.test(txtname) || tex4.test(txtname)){
						if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
    						alert("请输入正确的中文平台名称");
						}else{
						layer.open({
						className:'layerballoon',
						content:"请输入正确的中文平台名称！",
						time: 30 //2秒后自动关闭
						});
						}
					}
					else
					{
						var len=tex5.length;
						for(var i=0;i<len;i++){
							if(txtname.indexOf(tex5[i])>-1){
								sta=1;
								if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
									alert("请输入正确的中文平台名称");
									}
								else{
									layer.open({
									className:'layerballoon',
									content:"请输入正确的中文平台名称！",
									time: 30 //2秒后自动关闭
									});
								break;
								}
							}	
						}
						if(sta!=1){	
								ShowSta=1;
								$(".PopupBox").show(400);
								$(".name").text($(".btnTxt").val());
							/*	window.location="#form";*/
								$(".tex1").focus();
							}
					}
				}
			}
		})
		$(".close_btn").click(function(){
			ShowSta=0;
			$(".PopupBox").hide(400);
		})
		document.onkeydown=function(event){
            var e = event || window.event || arguments.callee.caller.arguments[0];
             if(e && e.keyCode==13 && ShowSta==0){ // enter 键
                $(".btn").click();
            }else if(e && e.keyCode==13 && ShowSta==1){
				$(".sub_btn").click();
			}
        }; 
   

 	
	})


//动态验证码
function createCode(len)
{
	var seed = new Array(
		'abcdefghijklmnopqrstuvwxyz',
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		'0123456789'
	);               //创建需要的数据数组
	var idx,i;
	var result = '';   //返回的结果变量
	for (i=0; i<len; i++) //根据指定的长度
	{
		idx = Math.floor(Math.random()*3); //获得随机数据的整数部分-获取一个随机整数
		result += seed[idx].substr(Math.floor(Math.random()*(seed[idx].length)), 1);//根据随机数获取数据中一个值
	}
	return result; //返回随机结果
}

//获取手机验证码
$(document).on('click','.btns',function(){
	//计时器60秒
	var InterObj; //timer变量，控制时间
	var count = 59; //间隔函数，1秒执行
	var curCount;//当前剩余秒数
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
	var _this = $(this);
	$.ajax({
		url:'http://localhost:63342/demo/special/SendTemplateSMS.php',
		type: 'post',
		data: {
			'tel':mobile,
		},
		dataType: 'jsonp',
		jsonp: 'callback',
		success : function(data){
			if (data.status) {
				curCount = count;
				_this.val(curCount + "秒后重新验证");
				//$(this).parent().next().find(".idform_checktip").text("如果收不到短信请拨4006706202");
				//_this.parent().find(".idform_checktip").text("如果收不到短信请拨4006706202");
				//_this.siblings(".yrtip").show();
				_this.attr("disabled",true).addClass("background-color","#b2b2b2");
				/*_this.siblings("button").attr("disabled",false).removeClass("code-gray");*/

				InterObj = window.setInter(function(){
					if (curCount == 0) {
						window.clearInter(InterObj);//停止计时器
						_this.removeAttr("disabled").removeClass("background-color","#b2b2b2");//启用按钮
						_this.val("重新发送验证码");
					}
					else {
						curCount--;
						_this.val(curCount + "秒后重新验证");
					}
				}, 1000); //启动计时器，1秒执行一次
			}else {
				//   alert(data.message);  //手机号存在的提示
				if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
					alert(data.message)
				}else{
					layer.open({
						className:'layerballoon',
						content:data.message,
						time: 30 //2秒后自动关闭
					});
				}
			}

		}
	});
});
//验证手机验证码
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

