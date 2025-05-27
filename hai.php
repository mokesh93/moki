<?php
// Save this as index.php on your web server

$ip = $_SERVER['REMOTE_ADDR'];

// Log the IP to a file
file_put_contents("ips.txt", $ip . "\n", FILE_APPEND);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Welcome</title>
  <script>
    window.onload = function() {
      alert("You have been hacked!");
    };
  </script>
</head>
<body>
  <h1>Hello</h1>
  <p>This is a test page.</p>
</body>
</html>
