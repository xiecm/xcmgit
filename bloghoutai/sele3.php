<?php
	    include 'conn.php';
        $result = mysqli_query($conn,'SELECT * FROM article');
        $info = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($info);
?>
