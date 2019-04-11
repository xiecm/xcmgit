<?php



	session_start();
	header("Content-Type: text/html;charset=utf8");
	// 在脚本执行期间包含并运行指定文件
	include_once("conn.php");
	
	
	$id = $_POST['id'];

        if(mysqli_query($conn,"DELETE FROM `user` WHERE `user`.`id` =$id")){
        echo $arr = 1;
        }else{
        echo $arr = 2;
        }
?>