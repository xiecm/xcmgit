<?php
include 'conn.php';
$valid  = true;
$message = '';


// print_r($_POST);

// exit();

if(isset($_POST['send']) && $_POST['send'] == true){


    if(isset($_POST['name']) && $_POST['name']!=""){
        $name = $_POST['name'];
    }else{
        $valid  = false;
        $message = '用户名不能为空';
    }

    if(isset($_POST['phone']) && $_POST['phone']!=""){
        $phone = $_POST['phone'];
    }else{
        $valid  = false;
        $message = '电话号不能为空';
    }
    if(isset($_POST['email']) && $_POST['email']!=""){
        $email = $_POST['email'];
    }else{
        $valid  = false;
        $message = '邮箱不能为空';
    }
    if(isset($_POST['sex']) && $_POST['sex']!=""){
        $sex = $_POST['sex'];
    }else{
        $valid  = false;
        $message = '性别选择';
    }
    if($valid){
        $result = mysqli_query($conn,"SELECT * FROM user WHERE name ='$name'");
        // WHERE title ='$title'
        echo mysqli_num_rows($result);

        if(mysqli_num_rows($result) == 0){
            // 语句错误 sex后不应该加逗号
            // $sql = "INSERT INTO user(name,phone,email,sex,) VALUES('$name','$phone','$email','$sex')";
            $sql = "INSERT INTO user(name,phone,email,sex) VALUES('$name','$phone','$email','$sex')";
            // echo mysqli_query($conn,$sql);
            if(mysqli_query($conn,$sql)){
                $message = '注册成功';
            }else{
                $valid  = false;
                $message = '注册失败'.$sql;
            }

        }else{
            $valid  = false;
            $message = '用户名已经存在,请重新选择';
        }

    }


}else{
    $valid  = false;
    $message = '接口来源非法';
}

echo json_encode(array('valid'=>$valid,'message'=>$message),JSON_UNESCAPED_UNICODE);

?>