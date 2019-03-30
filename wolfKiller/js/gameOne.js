var one = document.getElementById('one');
var player = one.getElementsByTagName('span');
var two = document.getElementById('two');
var people = two.getElementsByTagName('span');
var next = document.getElementById('next')
var storage=window.localStorage;
  player[0].onclick = function() {
	var arr = [3,3];
    for(var i = 0; i<2;i++){
		people[i].innerHTML = arr[i];
	}
	storage.setItem("number",9);
}
player[1].onclick = function() {
	var arr = [4,4];
    for(var i = 0; i<2;i++){
		people[i].innerHTML = arr[i];
	}
	storage.setItem("number",11);
}
player[2].onclick = function() {
	var arr = [4,3];
    for(var i = 0; i<2;i++){
		people[i].innerHTML = arr[i];
	}
	storage.setItem("number",10);
}
player[3].onclick = function() {
	var arr = [5,4];
    for(var i = 0; i<2;i++){
		people[i].innerHTML = arr[i];
	}
	storage.setItem("number",12);
}
next.onclick = function() {
	if(people[0].innerHTML != 0){
	location.href = 'gameCard.html'
	}
	else{
		alert('请先选择人数')
	}
}