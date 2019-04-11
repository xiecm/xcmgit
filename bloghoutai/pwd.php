<?php



	session_start();
	header("Content-Type: text/html;charset=utf8");
	// 在脚本执行期间包含并运行指定文件
	include_once("conn.php");
	

    $id=$_POST['id'];
    $newpwd=$_POST['newpwd'];
    $date = DATETIME;
	
   if(mysqli_query($conn,"UPDATE user SET `pwd`='".$newpwd."' WHERE user.`id` = $id")){
    echo $arr = 3;
    }else{
    echo $arr = 4;
	}

?>