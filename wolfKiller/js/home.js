 window.onload = function () {

 var play = document.getElementById('play')
 var btn = document.getElementById('music');
 var imgs = btn.getElementsByTagName('img');
 var au = document.getElementById('audio');
 var text = document.getElementById('text');
 var password = document.getElementById('password');
var login = document.getElementById('login');
var register = document.getElementById('register');
var forget = document.getElementById('forget');
 imgs[1].style.display = 'none';
 play.onclick = function(){
  	au.play();
  	imgs[1].style.display = 'none';
  	imgs[0].style.display = 'block';
  }
 btn.onclick = function(){
  	au.pause();
  	imgs[0].style.display = 'none';
  	imgs[1].style.display = 'block';
  }
 }
 console.log(text.value);
 login.onclick = function(){
 	var storage=window.localStorage;
		var name=text.value;//获取值
		var Pwd=password.value;//获取值
		var username=storage.getItem("username");//从localStorage读取相应键名的值
		var pwd=storage.getItem("password");//从localStorage读取相应键名的值
		console.log(password.value);
 	 if(password.value.length == 0 || text.value.length == 0){
 	alert('请输入密码或用户名');
 }
 else if(name == username  &&  Pwd  == pwd){
 	location.href = 'numPeople.html'
 }else if(name != username  ||  Pwd  != pwd){
 	alert('密码或用户名错误');
 }

 }
 register.onclick = function() {
 	location.href = 'register.html';
 }
 forget.onclick = function(){
 	location.href = 'reviseOne.html';
 }

 var storage=window.localStorage;
 storage.setItem('kill','');
  storage.setItem('check','');
  storage.setItem('plice','');
  storage.setItem('shouhu','');
