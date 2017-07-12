// JavaScript Document
$(function(){
	//配置
	var config = {
		speed:50,  //抽奖文本跳动速度。时间单位为毫米
		people3:[],  //此处为特等奖抽奖结果
		peopleAll:[], //此处为其余奖项抽奖果   	
    };
	
	for(var i = 30; i < 51; i++)
	{
		if(i<10){
			i="00"+i;
			config.people3.push(i);
		}else{
			if(i<100){
				i="0"+i;
				config.people3.push(i);
				}
			}
	}
	for(var i = 80; i < 91; i++)
	{
		if(i<10){
			i="00"+i;
			config.people3.push(i);
		}else{
			if(i<100){
				i="0"+i;
				config.people3.push(i);
				}
			}
	}
	for(var i = 120; i < 131; i++)
	{
		if(i<10){
			i="00"+i;
			config.people3.push(i);
		}else{
			if(i<100){
				i="0"+i;
				config.people3.push(i);
				}else{
					config.people3.push(i);
					}
			}
	}
	
	
	for(var i = 55; i < 80; i++)
	{
		if(i<10){
			i="00"+i;
			config.peopleAll.push(i);
		}else{
			if(i<100){
				i="0"+i;
				config.peopleAll.push(i);
				}else{
					config.peopleAll.push(i);
					}
			}
	}
	for(var i = 91; i < 120; i++)
	{
		if(i<10){
			i="00"+i;
			config.peopleAll.push(i);
		}else{
			if(i<100){
				i="0"+i;
				config.peopleAll.push(i);
				}else{
					config.peopleAll.push(i);
					}
			}
	}
	for(var i = 131; i < 260; i++)
	{
		if(i<10){
			i="00"+i;
			config.peopleAll.push(i);
		}else{
			if(i<100){
				i="0"+i;
				config.peopleAll.push(i);
				}else{
					config.peopleAll.push(i);
					}
			}
	}
	

	var timer;
	var start=0;
	var ulHtml=$(".inner ul").html();
	var ulnode=$(".inner ul");
	$(".btn").click(function(){
		var tex=/^[0-9]*$/; 
		var tex2=/\n\s*\r/;		
		var Tnum=$(".number").val();
		if(Tnum==""){
			alert("请输入获奖人数");
			}else{
				if(Tnum==" "){
					alert("只能输入数字");
					}else{
						if(start==0){
							$(".inner ul").html(ulHtml);
			                timer=setInterval(num,config.speed);
			                $(".btn").val("暂停");
			                start=1;
		                }else{
			                clearInterval(timer);
			                $(".btn").val("抽奖");
							if(Tnum==3){
								ulnode.children("li").remove();
								var winList=[];
								for( var i=0; i<Tnum; i++ ){
									var j = parseInt(config.people3.length * Math.random());
									var peo = config.people3[j];
									    winList.push(peo);
										config.people3.splice(j,1);
									var nodeList=$("<li>试听用户</li>").addClass("class1").appendTo(ulnode);
										$("<span>"+peo+"</span>").appendTo(nodeList);	
									}
								for(var i=0; i<Tnum;i++){
									config.people3.push(winList[i]);
									}	
							       start=0;
								}else{
									if(Tnum==18){
										ulnode.children("li").remove();
										var winList=[];
										for( var i=0; i<Tnum; i++ ){
											var j = parseInt(config.peopleAll.length * Math.random());
											var peo = config.peopleAll[j];
											    winList.push(peo);
												config.peopleAll.splice(j,1);
											var nodeList=$("<li>试听用户</li>").addClass("class3").appendTo(ulnode);
												$("<span>"+peo+"</span>").appendTo(nodeList);	
											}
										//for(var i=0; i<Tnum;i++){
//									        config.peopleAll.push(winList[i]);
//									     }
										start=0;
									}else{
										if(Tnum==38){
											ulnode.children("li").remove();
											var winList=[];
											for( var i=0; i<Tnum; i++ ){
												var j = parseInt(config.peopleAll.length * Math.random());
												var peo = config.peopleAll[j];
												    winList.push(peo);
													config.peopleAll.splice(j,1);
												var nodeList=$("<li>试听用户</li>").addClass("class3").appendTo(ulnode);
													$("<span>"+peo+"</span>").appendTo(nodeList);	
												}
											//for(var i=0; i<Tnum;i++){
//									             config.peopleAll.push(winList[i]);
//									         }
											  start=0;
										   }else{
											   if(Tnum==68){
													ulnode.children("li").remove();
													var winList=[];
													for( var i=0; i<Tnum; i++ ){
														var j = parseInt(config.peopleAll.length * Math.random());
														var peo = config.peopleAll[j];
														    winList.push(peo);
															config.peopleAll.splice(j,1);
														var nodeList=$("<li>试听用户</li>").addClass("class3").appendTo(ulnode);
															$("<span>"+peo+"</span>").appendTo(nodeList);	
														}
													//for(var i=0; i<Tnum;i++){
//									                    config.peopleAll.push(winList[i]);
//									                 }
													  start=0;
											       }
											   }
										}
									
							}
			            }
		            }
		       }
		})
	function num(){
		var num
		var numList=[];
		for( var i=0; i<10; i++){
			 num=Math.floor(Math.random()*(999-0));
			 if(num<10){
				num="00"+ num;
				numList.push(num);
				 }else if(num<100){
					 num="0"+ num;
					 numList.push(num);
					 }else{
							numList.push(num);
						}	
		}
		$("span").each(function(index, element) {
            $("span").eq(index).text(numList[index]);
        });
	}
	
	$(".close_btn").click(function(){
		$(".Pop").hide();
		})
		
})