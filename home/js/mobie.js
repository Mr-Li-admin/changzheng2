// JavaScript Document
var M_1=1;
var M_2=1;
var M_3=1;
var M_4=1;
var M_5=1;
var M_6=1;
var M_7=1;
var M_8=1;
var M_9=1;
var M_10=1;
function img_1()
{
	if(M_1==1){
		$("#img_1").css("left","-485px");
	}
	
	if(M_1==2){
		$("#img_1").css("left","-829px");
	}
	M_1++;
}
function img_2()
{
	if(M_2==1){
		$("#img_2").css("left","-288px");
	}
	
	if(M_2==2){
		$("#img_2").css("left","-690px");
	}
	M_2++;
}
function img_3()
{
	if(M_3==1){
		$("#img_3").css("left","-288px");
	}
	M_3++;
}
function img_4()
{
	if(M_4==1){
		$("#img_4").css("left","-264px");
	}
	M_4++;
}
function img_5()
{
	if(M_5==1){
		$("#img_5").css("left","-340px");
	}
	M_5++;
}
function img_6()
{
	if(M_6==1){
		$("#img_6").css("left","-290px");
	}
	M_6++;
}
function img_7()
{
	if(M_7==1){
		$("#img_7").css("left","-445px");
	}
	M_7++;
}
function img_8()
{
	if(M_8==1){
		$("#img_8").css("left","-330px");
	}
	M_8++;
}
function img_9()
{
	if(M_9==1){
		$("#img_9").css("left","-445px");
	}
	M_9++;
}
function img_10()
{
	if(M_10==1){
		$("#img_10").css("left","-385px");
	}
	M_10++;
}
var N_1=1
function next()
{
	var name= new Array()
	name[0] = "湘江战役"
	name[1] = "通道会议"
	name[2] = "黎平会议"
	name[3] = "强渡乌江天险"
	name[4] = "遵义会议"
	name[5] = "四渡赤水河"
	name[6] = "巧渡金沙江"
	name[7] = "会理会议"
	name[8] = "强渡大渡河"
	name[9] = "飞夺泸定桥"
	name[10] = "两河口会议"
	name[11] = "毛儿盖会议"
	name[12] = "包座战役"
	name[13] = "巴西会议"
	name[14] = "俄界政治局扩大会议"
	name[15] = "激战腊子口"
	name[16] = "直罗镇战役"
	name[17] = "吴起镇"
	
	if(N_1==1){
		$("#RJ").css("display","none");
		$("#XJ").css("display","block");
		document.getElementById("title").innerHTML=name[0];
	}
	if(N_1==2){
		$("#XJ").css("display","none");
		$("#TD").css("display","block");
		document.getElementById("title").innerHTML=name[1];
	}
	if(N_1==3){
		$("#TD").css("display","none");
		$("#LP").css("display","block");
		document.getElementById("title").innerHTML=name[2];
	}
	if(N_1==4){
		$("#LP").css("display","none");
		$("#WJ").css("display","block");
		document.getElementById("title").innerHTML=name[3];
	}
	if(N_1==5){
		$("#WJ").css("display","none");
		$("#ZY").css("display","block");
		document.getElementById("title").innerHTML=name[4];
	}
	if(N_1==6){
		$("#ZY").css("display","none");
		$("#CS").css("display","block");
		document.getElementById("title").innerHTML=name[5];
	}
	if(N_1==7){
		$("#CS").css("display","none");
		$("#JS").css("display","block");
		document.getElementById("title").innerHTML=name[6];
	}
	if(N_1==8){
		$("#JS").css("display","none");
		$("#HL").css("display","block");
		document.getElementById("title").innerHTML=name[7];
	}
	if(N_1==9){
		$("#HL").css("display","none");
		$("#DDH").css("display","block");
		document.getElementById("title").innerHTML=name[8];
	}
	if(N_1==10){
		$("#DDH").css("display","none");
		$("#LD").css("display","block");
		document.getElementById("title").innerHTML=name[9];
	}
	if(N_1==11){
		$("#LD").css("display","none");
		$("#LHK").css("display","block");
		document.getElementById("title").innerHTML=name[10];
	}
	if(N_1==12){
		$("#LHK").css("display","none");
		$("#MEG").css("display","block");
		document.getElementById("title").innerHTML=name[11];
	}
	if(N_1==13){
		$("#MEG").css("display","none");
		$("#BZ").css("display","block");
		document.getElementById("title").innerHTML=name[12];
	}
	if(N_1==14){
		$("#BZ").css("display","none");
		$("#BX").css("display","block");
		document.getElementById("title").innerHTML=name[13];
	}
	if(N_1==15){
		$("#BX").css("display","none");
		$("#EJ").css("display","block");
		document.getElementById("title").innerHTML=name[14];
	}
	if(N_1==16){
		$("#EJ").css("display","none");
		$("#LZK").css("display","block");
		document.getElementById("title").innerHTML=name[15];
	}
	if(N_1==17){
		$("#LZK").css("display","none");
		$("#ZL").css("display","block");
		document.getElementById("title").innerHTML=name[16];
	}
	if(N_1==18){
		$("#ZL").css("display","none");
		$("#WQ").css("display","block");
		document.getElementById("title").innerHTML=name[17];
	}
	N_1++;
}