<?php



	session_start();
	header("Content-Type: text/html;charset=utf8");
	// 在脚本执行期间包含并运行指定文件
	include_once("conn.php");
	
	$name = trim($_POST['name']);

	$audit =$_POST['audit'];
	$role = $_POST['role'];

	$phone = trim($_POST['phone']);
	
	$email = trim($_POST['email']);
	
	$sex = $_POST['sex'];
	$remark = $_POST['remark'];
	$jurisdiction = implode(' ', $_POST['jurisdiction']);
	$date = DATETIME;

	if(isset($_POST['userAvatar']) && $_POST["userAvatar"]!=""){
		$userAvatar = $_POST['userAvatar'];
		if(preg_match('/^(data:\s*image\/(\w+);base64,)/',$userAvatar,$res)){
			//获取一个图片类型
			$type = $res[2];
		   //  图片保存路径
		   $new_Avatar = '../upload/'.date('Ymd',time()).'/';
		   // 判断文件是否存在
		   if(!file_exists($new_Avatar)){
			   mkdir($new_Avatar,0777,true);
			   // 设置一个文件写入权限
		   }
		   // 设置图片名称
		   $new_Avatar = $new_Avatar.time().'.'.$type;
		   // 写入
		 // file_put_contents($new_Avatar,base64_decode(str_replace($res[1],'',$userAvatar)))  
	   //   如果为真.则写入成功

		   if(!file_put_contents($new_Avatar,base64_decode(str_replace($res[1],'',$userAvatar)))){
			   $valid = false;
			   $message = '头像移入失败';
		   }

		}
   }else{
	   $valid = false;
	   $message = '头像不能为空，必须输入';
   }


   if(isset($_POST['audit'])){
	if(mysqli_query($conn,"INSERT INTO user(name,phone,email,role,audit,date) VALUES('".$name."','".$phone."','".$email."','".$role."','".$audit."','".$date."')")){
		echo $arr = 1;
	 }else{
		echo $arr = 2;
	 }
   }else if(isset($_POST['remark'])){
	if(mysqli_query($conn,"INSERT INTO user(role,jurisdiction,remark) VALUES('".$role."','".$jurisdiction."','".$remark."')")){
		echo $arr = 3;
	 }else{
		echo $arr = 4;
	 }
   }
   else{
	   if(mysqli_query($conn,"INSERT INTO user(name,phone,email,picture,sex,date) VALUES('".$name."','".$phone."','".$email."','".$new_Avatar."','".$sex."','".$date."')")){
   			echo $arr = 5;
    		}else{
   			echo $arr = 6;
    		}
   }
    		

?>