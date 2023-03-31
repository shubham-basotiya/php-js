<?php

$conn = new mysqli("localhost", "root", "", "test");


if($conn->connect_error){
    die("connection error " . $conn->connect_error);
}
else{
    if(isset($_POST['valid'])){
        $status = "";
        $usname = $_POST['name'];
        $pwd = $_POST['pwd'];
        $email = $_POST['email'];
        $sql = "INSERT INTO usdata(username, pwd, email)VALUES($usname, $pwd, $email)";
        if(mysqli_query($sql, $conn)){
            $status = "data submited successfully!";
        }else{
            $status = "data not submited successfully!"; 
        }

        json_encode($status);
    }
}

?>