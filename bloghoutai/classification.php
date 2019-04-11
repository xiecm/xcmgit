<?php



	session_start();
	header("Content-Type: text/html;charset=utf8");
	// 在脚本执行期间包含并运行指定文件
	include_once("conn.php");
	
	$leibie = trim($_POST['leibie']);




	   if(mysqli_query($conn,"INSERT INTO fenlei(leibie) VALUES('".$leibie."')")){
   			echo $arr = 5;
    		}else{
   			echo $arr = 6;
    		}
    		

?>