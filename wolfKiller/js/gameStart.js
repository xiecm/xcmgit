var Arrow = document.getElementsByTagName('i');
var day = document.getElementById('day');
var span = document.getElementById('tian');
var clear = document.getElementById('clear');
console.log(Arrow)
console.log(span);
var cards = document.getElementById('cards');
var img = document.getElementsByTagName('img');
var big = document.getElementById('big');
var smallOne = document.getElementById('smallone');
var midnight = smallOne.getElementsByTagName('span');
var smallTwo = document.getElementById('smalltwo');
var morning = smallTwo.getElementsByTagName('span');
var button = document.getElementsByTagName('button');
console.log(midnight)
var smallTwo = document.getElementById('smalltwo');
console.log(img);

var storage = window.localStorage;
//改变天数,获取前一天杀死的人数

var days = storage.getItem("day");
console.log(days.length);
 if(days.length == '1'){
	span.innerHTML = '第二天';
}else if(days.length == '2'){
	span.innerHTML = '第三天';
}else if(days.length == '3'){
	span.innerHTML = '第四天';
}else if(days.length == '4'){
	span.innerHTML = '第五天';
}else if(days.length == '5'){
	span.innerHTML = '第六天';
}else if(days.length == '6'){
	span.innerHTML = '第七天';
}else if(days.length == '7'){
	span.innerHTML = '第八天';
}else if(days.length == '8'){
	span.innerHTML = '第九天';
}else if(days.length == '9'){
	span.innerHTML = '第十天';
}else if(days.length == '10'){
	span.innerHTML = '第十一天';
}

var a = 1;
var b = 1;
var c = 1;
Arrow[0].onclick = function(){
	a++;
	if(a % 2 == 0){
		big.style.height = 'auto';
		img[0].style.transform = 'rotateZ(0)';
	}
	else{
		big.style.height = '0px';
		img[0].style.transform = 'rotateZ(-90deg)';
	}
}
Arrow[1].onclick = function(){
	b++;
	if(b % 2 != 0){
		smallOne.style.height = 'auto';
		img[1].style.transform = 'rotateZ(0)';
	}
	else{
		smallOne.style.height = '0px';
		img[1].style.transform = 'rotateZ(-90deg)';
	}
}
Arrow[2].onclick = function(){
	c++;
	if(c % 2 != 0){
		smallTwo.style.height = 'auto';
		img[2].style.transform = 'rotateZ(0)';
	}
	else{
		smallTwo.style.height = '0px';
		img[2].style.transform = 'rotateZ(-90deg)';
	}
}


midnight[0].onclick = function(){

	location.href = 'wolfs.html';
}

midnight[1].onclick = function(){

	location.href = 'check.html';
}

midnight[2].onclick = function(){

location.href = 'nvwu.html';
}
midnight[3].onclick = function(){

location.href = 'guard.html';
}





//白天的按钮效果
button[0].onclick = function(){
location.href = 'faguan.html';
}
morning[0].onclick = function(){
	alert('开始发言');
}
morning[1].onclick = function(){
	location.href = 'choose.html';
}
morning[2].onclick = function(){
	alert('开始发言');
}
morning[3].onclick = function(){
	alert('所有人发言');
}

morning[4].onclick = function(){
	location.href = 'toupiao.html';

}

morning[5].onclick = function(){
	var aa = storage.getItem('day');
	 var bb = aa + '1';
	 console.log(bb)
	storage.setItem('day',bb);
	location.href = 'gameStart.html';
}
clear.onclick = function(){
	storage.setItem('kill','');
	storage.setItem('check','');
	storage.setItem('day','');
	storage.setItem('plice','');
	storage.setItem('shouhu','');
	location.href = 'numPeople.html';
}