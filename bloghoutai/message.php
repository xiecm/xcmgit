<?php



	session_start();
	header("Content-Type: text/html;charset=utf8");
	// 在脚本执行期间包含并运行指定文件
	include_once("conn.php");
    
    
	$nickname =$_POST['nickname'];
	$id = $_POST['id'];

	$phone = trim($_POST['phone']);
	$sex = trim($_POST['Sex']);
	$email = trim($_POST['email']);
	$remark = $_POST['remark'];
	$date = DATETIME;

	if(isset($_POST['picture']) && $_POST["picture"]!=""){
		$userAvatar = $_POST['picture'];
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



   if(mysqli_query($conn,"UPDATE user SET `nickname`='".$nickname."',`phone`='".$phone."',`email`='".$email."',`remark`='".$remark."',`date`='".$date."',`picture`='".$new_Avatar."',`sex`='".$sex."' WHERE user.`id` = $id")){
    echo $arr = 1; 
    }else{
    echo $arr = 2;
}

?>