<?php
$servername = "localhost";
$username = "njitmobileapp_dbuser";
$password = "SPD*FgRNAbD(";
$dbname = "njitmobileapp_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 

$ticketID=$_POST['ticketID'];

$sql = "SELECT * FROM Tickets WHERE ticket_ID = $ticketID ";
$result = $conn->query($sql);

if($result){
    $Message = "Success";
}else{
    $Message = "failure";
}

$conn->close();
$Response[] = array("Message"=> $Message);
echo json_encode ($Response);
?>