<?php



	session_start();
	header("Content-Type: text/html;charset=utf8");
	// 在脚本执行期间包含并运行指定文件
	include_once("conn.php");
	
	$title = trim($_POST['title']);

	$author =$_POST['author'];
	$lable = $_POST['label'];

	$state = trim($_POST['state']);
	$date = DATETIME;


	   if(mysqli_query($conn,"INSERT INTO article(title,author,label,state,time) VALUES('".$title."','".$author."','".$lable."','".$state."','".$date."')")){
   			echo $arr = 5;
    		}else{
   			echo $arr = 6;
    		}

    		

?>