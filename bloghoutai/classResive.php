<?php



	session_start();
	header("Content-Type: text/html;charset=utf8");
	// 在脚本执行期间包含并运行指定文件
	include_once("conn.php");
	
    $name = trim($_POST['Name']);	

	$id = $_POST['id'];

	
   if(mysqli_query($conn,"UPDATE fenlei SET `leibie`='".$name."' WHERE fenlei.`id` = $id")){
    echo $arr = 3;
    }else{
    echo $arr = 4;
	}
?>