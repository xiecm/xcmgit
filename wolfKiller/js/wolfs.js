var all = document.getElementById('all');
var cards = document.getElementById('cards');
var buttons = document.getElementsByTagName('button');
buttons[0].style.display = 'none';
var arr = [];
var img1,img2;

//本地数据存储获取数组随机图片和选择的人数
var storage=window.localStorage;
var players = [];
var Number = storage.getItem("number");
players = storage.getItem("players"); //结果是字符串
players =players.split(","); //将字符串转为数组
var n = storage.getItem("kill");
kill =n.split(","); 
// players =aa.split(","); 
// console.log( typeof players[kill.pop()].toString())
console.log(kill.length);



   


//创建十二个卡片  并给以样式
for(var i = 0;i < Number;i++){
	arr[i] = document.createElement('section');
	 img1 = document.createElement('img');
	 div = document.createElement('div');
     img2 = document.createElement('img');
     
       //创建一个div蒙版
    arr[i].appendChild(img1); 
    // arr[i].appendChild(div);

     arr[i].appendChild(img2);
    
     arr[i].className = 'section'
     cards.appendChild(arr[i]);
     img2.src = 'img/card.jpg';
     img1.id = 'one'
     img1.className = 'img';
     img2.className = 'img';
}

//取出每个section中的第一张图片并放入数组中
var One = [];
var two = [];
var sections = document.getElementsByTagName('section');
for(var i = 0;i<sections.length;i++){
	 One[i] = sections[i].getElementsByTagName('img')[0];
	 two[i] = sections[i].getElementsByTagName('img')[1];
}



//筛选数组,提出想要的内容
var res = players.filter(function(item,index,array){
      //元素值，元素的索引，原数组。
      return (item == 'img/wolf.jpg');
  });
  console.log(res.length);



//遍历整个数组,一一将图片赋值给img,若出现狼人卡显示
for(var i = 0;i<One.length;i++){
	One[i].src = players[i];
	for(var j = 0;j<res.length;j++){
		//判断两边字符串是否一致,若一致,赋予狼人图片样式
		if(players[i].toString() === res[j].toString()){
		     One[i].style.cssText = 'z-index:100';
	}
	}
}

  //显示死去的人
var aa = [];
var KI = [];
if(kill.length == 1){
	var bbb = 0;
}
else{
	for(var i = 0;i<kill.length;i++){
	KI[i] = kill[i];
}
console.log(KI);
for(var i = 0;i<kill.length;i++){
	div = document.createElement('div');
    div.id = 'abc';
	div.innerHTML = '挂';
	aa[i] = document.createElement('div');
	arr[KI[i]].appendChild(div);
	console.log(KI[i]);
}
}

console.log(typeof n);
      //遍历所有card的点击事件
	for(var i =0;i<two.length;i++){
			two[i].onclick = function(z){
				return function(){
					console.log(i);
					console.log(z)
					
				    if (n == false) {
				    	
					    buttons[0].style.display = 'block'; 
					    arr[z].appendChild(div);
					    div.id = 'abc';
					    div.innerHTML = '杀他'
					  
					    storage.setItem("kill",z);
				    }else{
					    buttons[0].style.display = 'block';
					    arr[z].appendChild(div);
					    div.id = 'abc';
					    div.innerHTML = '杀他';
					      var A = n +','+ z;
					    console.log(A);
					    storage.setItem("kill",A);
				}
			}
			}(i)
}


//确定按钮点击之后,出现返回按钮.
buttons[0].onclick = function(){
	var choosed = cards.getElementsByTagName('div');
	for(var i =0;i<choosed.length;i++){
		choosed[i].innerHTML = '挂'
		buttons[1].style.display = 'block';
	}
	
}
buttons[1].onclick = function(){
	location.href = 'gameStart.html'
}