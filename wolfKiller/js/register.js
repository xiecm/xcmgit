var section = document.getElementById('section');
var lis = section.getElementsByTagName('input');
var getOne = document.getElementById('get');
var xianShi = document.getElementById('xianshi');
var span = document.getElementById('span');
var write = document.getElementById('write');
var refer = document.getElementById('refer');
var reset = document.getElementById('reset');
var imgs = document.getElementsByTagName('img');
console.log(lis);
console.log(imgs)

function aaa(){
	var a,b,c,d,e,f;
   arr = [a,b,c,d,e,f];

  for(i = 0;i<lis.length;i++){
	arr[i] = lis[i].value;
   }
  return;
}


 lis[1].onclick = function(){
 	  aaa();
     if(arr[0].length < 8 || arr[0].length > 16){
      	imgs[1].style.display = 'block';
   	     imgs[0].style.display = 'none';
      }else{
   		imgs[0].style.display = 'block';
   		imgs[1].style.display = 'none';
     }
 } 


 lis[2].onclick = function() {
 	  aaa();
 	   if(arr[1].length < 8 || arr[1].length > 12 || arr[1].length == 0){
     	imgs[3].style.display = 'block';
   	  imgs[2].style.display = 'none';
      }else{
   		imgs[2].style.display = 'block';
   		imgs[3].style.display = 'none';
     }
 }


 lis[3].onclick = function(){
 	 aaa();
 	   if (arr[1] != arr[2] || arr[2].length == 0 ) {
 	   imgs[5].style.display = 'block';
   	    imgs[4].style.display = 'none';
 	 }
 	   else{
   		imgs[4].style.display = 'block';
   	    imgs[5].style.display = 'none';
     }
 }


  lis[4].onclick = function(){
 	  aaa();
 	  if ( arr[3].length == 0 || arr[3].length > 18) {
 	     imgs[7].style.display = 'block';
      	imgs[6].style.display = 'none';
 	 }
 	  else if(arr[3].length <= 18 || arr[3].length > 7){
   		imgs[6].style.display = 'block';
   	    imgs[7].style.display = 'none';
     }
 }

var one = setInterval(et,1000);

function et(){
	getOne.onclick = function () {
		aaa();
		if (arr[4].length == 0 || arr[4].length >11 || arr[4].length <11) {
 	imgs[9].style.display = 'block';
   	imgs[8].style.display = 'none';
   	alert('请输入正确的十一位数手机号');
 	}
 	else if(arr[4].length == 11){
   		imgs[8].style.display = 'block';
   	    imgs[9].style.display = 'none';
   }
	getOne.style.display = 'none';
	xianShi.style.display = 'block';
		var str = 'QWERTYUIOPLKJHGFDSAZXCVBNM0123456789';
		var str1 = [];
		for(i = 0;i<4;i++){
		  var str2 = Math.floor(Math.random()*100)%36;
		   str1 = str1 + str.substring(str2,str2+1);
		}
		xianShi.innerHTML = str1;
		var a = 61;
		function cc(){
		a--;
		span.innerHTML = a +'s';

		if(a<0){
			span.innerHTML = '';
		}
    }
		setTimeout(ea,60000);
		 two = setInterval(cc,1000);
   }


   span.onclick = function () {
	  getOne.style.display = 'none';
	  xianShi.style.display = 'block';
		var str = 'QWERTYUIOPLKJHGFDSAZXCVBNM0123456789';
		var str1 = [];
		for(i = 0;i<4;i++){
		  var str2 = Math.floor(Math.random()*100)%36;
		   str1 = str1 + str.substring(str2,str2+1);
		}
		span.className = '';
		xianShi.innerHTML = str1;
		var a = 6;
		span.innerHTML = '';
		function cc(){
		a--;
		span.innerHTML = a +'s';

		if(a<0){
			span.innerHTML = ''
		}
    }
		setTimeout(ea,60000);
		 two = setInterval(cc,1000);
  }
}


lis[5].onclick = function(){
     setInterval(ea,62000);
     
     if(span.innerHTML ==''){
	   	alert('请先完善以上其他信息');
     }else{
     	refer.style.display = 'block';
     }
}

function ea(){
	get.style.display = 'block';
	xianShi.style.display = 'none';
	span.innerHTML = '重新获取验证码';
	span.className = 'active';
	clearInterval(two);
    clearInterval(one);
} 



refer.onclick = function(){
	aaa();

 if(arr[5] == xianShi.innerHTML &&  arr[5].length != 0){
 	var storage=window.localStorage;
	storage.setItem("username",arr[0]);//写入键值对
	storage.setItem("password",arr[2]);//写入键值对
	storage.setItem("e-mail",arr[3]);
	storage.setItem("tel",arr[4]);
 	location.href = 'Home.html';
 	alert('注册成功')
 }else if(arr[5] != xianShi.innerHTML || arr[5].length == 0){
 	imgs[10].style.display = 'block';
 }
}


reset.onclick = function () {
	for(i = 0;i<lis.length;i++){
		lis[i].value = '';
	}
	for(i = 0;i<imgs.length;i++){
		imgs[i].style.display = 'none'
	}

}


