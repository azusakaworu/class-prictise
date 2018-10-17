<?php
$db_host = "localhost " ；
$db_username= "root" ；
$db_password = "root" ；//windows user leave this blank
$db_name = " db_van-class" ；

var $conn =mysql_connect(“$db_host ”，“$db_username”，“$db_pass”）;
if (!$conn) {
            echo "Could not connect to MySQL"；
            exit;
        }
        
//echo“Successful Conection”;

//git all the car data
//$myQuery = "SELECT * FROM mainmodel";
//make the query, get the result
//$result = mysql_query($conn,$myQuery);
//$rows = array();

//while($row = mysqul_fetch_assoc($result)){
  //  $rows[]=$row;
//}
if(isset($_GET["carModel"])){
    $row =$_GET["carModel"];

    $myQuery= "SELECT *FROM mainmodel WHERE model ='$car'";
    $result = mysql_query($conn,$myQuery);
    $rows = array();
    
    while($row = mysqul_fetch_assoc($result)){
        $rows[]=$row;
    }

//sent the entire result

?>