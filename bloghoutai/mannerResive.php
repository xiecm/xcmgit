<?php



	session_start();
	header("Content-Type: text/html;charset=utf8");
	// 在脚本执行期间包含并运行指定文件
	include_once("conn.php");
	

    $Role=$_POST['Role'];
    $id=$_POST['id'];
    $Remark=$_POST['Remark'];
    $Jurisdiction=$_POST['Jurisdiction'];
    $date = DATETIME;
	
   if(mysqli_query($conn,"UPDATE user SET `role`='".$Role."',`remark`='".$Remark."',`jurisdiction`='".$Jurisdiction."' WHERE user.`id` = $id")){
    echo $arr = 3;
    }else{
    echo $arr = 4;
	}

?>