<?php


	session_start();
	header("Content-Type: text/html;charset=utf8");
	// 在脚本执行期间包含并运行指定文件
	include_once("conn.php");
	// 标题
	$title = $_POST['title'];
	//分类
	$classify = implode(' ', $_POST['classify']);
	//发布人
	$name = trim($_POST['name']);
	//内容
	$content = $_POST['content'];
	//时间
	$data = $_POST['data'];

	// 日期验证 yyyy-mm-dd
	function check($data){
		if(date('Y-m-d',strtotime($data))==$data){
			return true;
		}else{
			return false;
		}
	}
	if($title==""||$classify==""||$name==""||$content==""||$data==""){
//    		echo $arr = 3;
    	}else if(check($data) == false){
//    		echo $arr =4;
    	}else{


    		if(mysqli_query($conn,"INSERT INTO page(title,classify,name,content,data) VALUES('".$title."','".$classify."','".$name."','".$content."','".$data."')")){
//    			echo $arr = 1;
    		}else{
//    			echo $arr = 2;
    		}

    	}

?>