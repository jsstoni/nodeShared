<!DOCTYPE html>
<html>
<head>
  <title>NODE ADMIN</title>
  <script src="../client/JS/jquery.js"></script>
</head>
<body>
  <form action="../index.php" method="post" id="login">
    <input type="text" name="daemon">
    <select name="exec">
      <option value="start">START</option>
      <option value="stop">STOP</option>
    </select>
    <input type="password" name="pass">
    <button type="submit">NODE</button>
  </form>
</body>
</html>