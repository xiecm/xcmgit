var card = document.getElementById('card');
var Card = document.getElementById('Card');
var number = document.getElementById('number');
var show = document.getElementById('show');
var next = document.getElementById('next');
var start = document.getElementById('start');

start.style.display = 'none';
Card.style.position = 'relative';
var count = 1;
var num1 = 1;	
var num2 = 1;

var arr = [];
var arr2 = [];

var A,B,C,D,E,F,G,H,I,J,K,L;
var a =  ['img/wolf.jpg','img/wolf.jpg','img/wolf.jpg',
           'img/people.jpg','img/people.jpg','img/people.jpg',
           'img/yuyan.jpg','img/nvwu.jpg','img/guard(守卫).jpg']
var b =  ['img/wolf.jpg','img/wolf.jpg','img/wolf.jpg',
           'img/people.jpg','img/people.jpg','img/people.jpg','img/people.jpg',
           'img/yuyan.jpg','img/nvwu.jpg','img/guard(守卫).jpg']
var c =  ['img/wolf.jpg','img/wolf.jpg','img/wolf.jpg','img/wolf.jpg',
           'img/people.jpg','img/people.jpg','img/people.jpg','img/people.jpg',
           'img/yuyan.jpg','img/nvwu.jpg','img/guard(守卫).jpg']
var d =  ['img/wolf.jpg','img/wolf.jpg','img/wolf.jpg','img/wolf.jpg',
           'img/people.jpg','img/people.jpg','img/people.jpg','img/people.jpg','img/people.jpg',
           'img/yuyan.jpg','img/nvwu.jpg','img/guard(守卫).jpg']


//本地存储
var storage=window.localStorage;
 var Number = storage.getItem("number");


 if(Number == 9){
   arr = a;
   arr2 = [ A,B,C,D,E,F,G,H,I];
}else if(Number == 10){
	arr = b;
	arr2 = [ A,B,C,D,E,F,G,H,I,J];
}
else if(Number == 11){
	arr = c;
	arr2 = [A,B,C,D,E,F,G,H,I,J,K,];
}
else if(Number == 12){
	arr = d;
	arr2 = [A,B,C,D,E,F,G,H,I,J,K,L];
}
console.log(arr2.length);
arr.sort(function(){ return 0.5 - Math.random(); });//获取不重复的随机数 
		// console.log(arr);
   storage.setItem("players",arr);

	



var ccc=1;

next.onclick = function() {
        
		show.innerHTML = '显示身份';
            clear();
            card.className = 'position';
        	 arr2[ccc].style.cssText = 'z-index : 15;';
        	 ccc++;
	     num1++;
	    number.innerHTML = num1;
	    if(num1 == Number){
	    	num1 = Number - 1;
	    	next.style.display = 'none';
            start.style.display = 'block';
	    }
	
} 

show.onclick = function(){
	
	 	num2++;
	    card.className = '';
	 if( num2 % 2 ==0 && num1 <= Number){
	 	card.className = 'active'
	    show.innerHTML = '隐藏身份'
	 	card.className = 'position positionTwo';
	 	
	 }else{
        card.className = 'position';
        show.innerHTML = '显示身份';
	 }
   
	

        
   }
start.onclick = function(){
	location.href = 'gameStart.html'
}

        for(var i= 0;i<arr.length;i++){
        	arr2[i] = document.createElement('img');
        }
        for(var i= 0;i<arr.length;i++){
        	card.insertBefore(arr2[i],card.lastChild);
        	arr2[i].src = arr[i];
        	arr2[i].className = 'bbb';
        }

arr2[0].style.cssText = 'z-index : 11;';
        function clear(){
        	for(var i= 1;i<arr2.length;i++){
        	 arr2[i].style.cssText = 'z-index : 0;'
        }
        }
        console.log(arr2);
       
        
	 	card.lastChild.style.cssText = 'z-index:20;backface-visibility: hidden;';
	 	// img.className = 'bbb';
	    console.log(card.lastChild)
	 	