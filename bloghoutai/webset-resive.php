<?php



	session_start();
	header("Content-Type: text/html;charset=utf8");
	// 在脚本执行期间包含并运行指定文件
	include_once("conn.php");
	
    $designation = trim($_POST['designation']);	
    $domain = trim($_POST['domain']);
    $cache = trim($_POST['cache']);
    $uploading = trim($_POST['uploading']);
    $file = trim($_POST['file']);
    $antistop = trim($_POST['antistop']);
    $miaosu = trim($_POST['miaosu']);
    $copyright = trim($_POST['copyright']);

	
	$id = $_POST['id'];
	$date = DATETIME;
	    if(mysqli_query($conn,"UPDATE setweb SET `designation`='".$designation."',`domain`='".$domain."',`uploading`='".$uploading."',`file`='".$file."',`headline`='".$antistop."',`miaosu`='".$miaosu."',`copyright`='".$copyright."' WHERE setweb.`id` = $id")){
		echo $arr = 1; 
		}else{
		echo $arr = 2;
   }

?>