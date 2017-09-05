$(document).ready(function(){
	H=$(window).height();
	W=$(window).width();
	$(".wel,.wel-t").css({
		"height":H,
		"width": "100%"
	});
	setTimeout(function(){
		$(".wel").fadeOut(1500);
	},1000);

	setTimeout(function(){
		L1=$("#p-1>p").length;
		for(var i=0;i<L1;i++){
			if(i==0){
				v0=$("#p-1>p").eq(i).html();
				$("#p-1>p").eq(i).html(" ");
				v0_L=v0.length;
			}
			if(i==1){
				v1=$("#p-1>p").eq(i).html();
				$("#p-1>p").eq(i).html(" ");
				v1_L=v1.length;
			}
			if(i==2){
				v2=$("#p-1>p").eq(i).html();
				$("#p-1>p").eq(i).html(" ");
				v2_L=v2.length;
			}
			if(i==3){
				v3=$("#p-1>p").eq(i).html();
				$("#p-1>p").eq(i).html(" ");
				v3_L=v3.length;
			}
			
		}
		L2=$("#p-2>p").length;
		for(var j=0;j<L2;j++){
			if(j==0){
				v4=$("#p-2>p").eq(j).html();
			}
			if(j==1){
				v5=$("#p-2>p").eq(j).html();
				$("#p-2>p").eq(j).html(" ");
				v5_L=v5.length;
			}
			if(j==2){
				v6=$("#p-2>p").eq(j).html();
				$("#p-2>p").eq(j).html(" ");
				v6_L=v6.length;
			}
		}
		i=0;
		obj_0=setInterval(function(){		
			var v=v0.substr(0,i+1);
			$("#p-1>p").eq(0).html(v);
			i++;
			if(i==16){
				clearInterval(obj_0);
				i=0;
				obj_1=setInterval(function(){		
					var v=v1.substr(0,i+1);
					$("#p-1>p").eq(1).html(v);
					i++;
					if(i==16){
						clearInterval(obj_1);
						i=0;
						obj_2=setInterval(function(){		
							var v=v2.substr(0,i+1);
							$("#p-1>p").eq(2).html(v);
							i++;
							if(i==16){
								clearInterval(obj_2);
								i=0;
								obj_3=setInterval(function(){		
									var v=v3.substr(0,i+1);
									$("#p-1>p").eq(3).html(v);
									i++;
									if(i==16){
										clearInterval(obj_3);
										i=0;
										obj_4=setInterval(function(){		
											var v=v5.substr(0,i+1);
											$("#p-2>p").eq(1).html(v);
											i++;
											if(i==80){
												clearInterval(obj_4);
												i=0;
												obj_5=setInterval(function(){		
													var v=v6.substr(0,i+1);
													$("#p-2>p").eq(2).html(v);
													i++;
													if(i==40){
														clearInterval(obj_5);
														obj_6=setTimeout(function(){
															$(".wel-t").slideUp(500);
														},1000);
													}
												},50);											
											}	
										},50);
									}	
								},50);
							}	
						},50);
					}	
				},50);
			}	
		},50);
	},2500);
	
	/*动态改变导航栏状态*/
	$(window).resize(function(){
		if($(window).width()>1366){
			$("#addbtn").addClass("btn-group");
		}else{
			$("#addbtn").removeClass("btn-group");
		}
	});
	
	/*动态改变导航栏状态*/
	$(".btn-group>button").eq(0).css({
		"background":"#FFF",
		"color":"#D9534F"
	});
	navP=1;
	$(".btn-group>button").click(function(){
		navp=$(this).index();
		if(navP<19){
			if(navP<navp){
				confirm("该旅程还开始，请完成前边的！！！");
			}else if(navP==navp){
				$(".btn-group>button").not($(this)).css({
					"background":"#D9534F",
					"color":"#FFF"
				});
				$(this).css({
					"background":"#FFF",
					"color":"#D9534F"
				});
				/*导航对应同类内容切换*/			
				$("#col-md-6>div").hide(1000);
				$("#col-md-6>div").eq(navp).show(1000);

				navP++;
			}else if(navP>navp){
				confirm("该旅程已经结束，请继续向前！！！");
			}
		}else{
			$(".btn-group>button").not($(this)).css({
					"background":"#D9534F",
					"color":"#FFF"
				});
				$(this).css({
					"background":"#FFF",
					"color":"#D9534F"
				});
				/*导航对应同类内容切换*/			
				$("#col-md-6>div").hide(1000);
				$("#col-md-6>div").eq(navp).show(1000);
		}
		
		
	});
	/*动态改变导航栏状态*/
	

	/*图片幻灯片*/
	M=1;
	move_1=$(".XJ-img").width();
	move_2=$(".QD-img").width();
	move_3=$(".SD-img").width();
	move_4=$(".DDH-img").width();
	move_5=$(".LD-img").width();
	move_6=$(".BX-img").width();
	move_7=$(".LZK-img").width();
	move_8=$(".WQZ-img").width();
	move_9=$(".HN-img").width();
	w=$(".col-md-6").width();
	setInterval(function(){
		if(M%2==1){
			$(".XJ-img").animate({
					left:w-move_1,
				},10000);
			$(".QD-img").animate({
					left:w-move_2,
				},10000);
			$(".SD-img").animate({
					left:w-move_3,
				},10000);
			$(".DDH-img").animate({
					left:w-move_4,
				},10000);
			$(".LD-img").animate({
					left:w-move_5,
				},10000);
			$(".BX-img").animate({
					left:w-move_6,
				},10000);
			$(".LZK-img").animate({
					left:w-move_7,
				},10000);
			$(".WQZ-img").animate({
					left:w-move_8,
				},10000);
			$(".HN-img").animate({
					left:w-move_9,
				},10000);
			M++;
		}else{
			$(".XJ-img").animate({
					left:0,
				},10000);
			$(".QD-img").animate({
					left:0,
				},10000);
			$(".SD-img").animate({
					left:0,
				},10000);
			$(".DDH-img").animate({
					left:0,
				},10000);
			$(".LD-img").animate({
					left:0,
				},10000);
			$(".BX-img").animate({
					left:0,
				},10000);
			$(".LZK-img").animate({
					left:0,
				},10000);
			$(".WQZ-img").animate({
					left:0,
				},10000);
			$(".HN-img").animate({
					left:0,
				},10000);
			M++;
		}
	},10000)
	/*图片幻灯片*/

	
});