<?php



	session_start();
	header("Content-Type: text/html;charset=utf8");
	// 在脚本执行期间包含并运行指定文件
	include_once("conn.php");
	
    $Name = trim($_POST['Name']);	

	$Phone = trim($_POST['Phone']);
	
	$Email = trim($_POST['Email']);
    $Sex = $_POST['Sex'];
	$id = $_POST['id'];
	$Audit=$_POST['Audit'];
	$Role=$_POST['Role'];
	$date = DATETIME;
	if(isset($_POST['pic']) && $_POST["pic"]!=""){
		$userAvatar = $_POST['pic'];
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
   if(isset($_POST['Role'])){
	    if(mysqli_query($conn,"UPDATE user SET `name`='".$Name."',`phone`='".$Phone."',`email`='".$Email."',`role`='".$Role."',`date`='".$date."',`audit`='".$Audit."' WHERE user.`id` = $id")){
		echo $arr = 1; 
		}else{
		echo $arr = 2;
   }
   }else{
	
   if(mysqli_query($conn,"UPDATE user SET `name`='".$Name."',`phone`='".$Phone."',`email`='".$Email."',`sex`='".$Sex."',`date`='".$date."' WHERE user.`id` = $id")){
    echo $arr = 3;
    }else{
    echo $arr = 4;
	}
}
?>