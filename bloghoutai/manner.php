<?php



	session_start();
	header("Content-Type: text/html;charset=utf8");
	// 在脚本执行期间包含并运行指定文件
	include_once("conn.php");
	
	$role = $_POST['role'];

	$remark = $_POST['remark'];
	$jurisdiction = implode(' ', $_POST['jurisdiction']);
	$date = DATETIME;

	if(mysqli_query($conn,"INSERT INTO user(role,jurisdiction,remark) VALUES('".$role."','".$jurisdiction."','".$remark."')")){
		echo $arr = 3;
	 }else{
		echo $arr = 4;
	 }
    		

?>