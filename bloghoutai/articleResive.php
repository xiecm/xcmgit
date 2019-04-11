<?php



	session_start();
	header("Content-Type: text/html;charset=utf8");
	// 在脚本执行期间包含并运行指定文件
	include_once("conn.php");
	
    $Title = trim($_POST['Title']);
    $state = trim($_POST['state']);
    $id = trim($_POST['id']);
    $Label = trim($_POST['Label']);	
    $Author = trim($_POST['Author']);

    $id = $_POST['id'];
    $date = DATETIME;
	
   if(mysqli_query($conn,"UPDATE article SET `title`='".$Title."',`author`='".$Author."',`state`='".$state."',`label`='".$Label."',`time`='".$date."' WHERE article.`id` = $id")){
    echo $arr = 3;
    }else{
    echo $arr = 4;
	}
?>