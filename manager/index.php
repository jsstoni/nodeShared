<?php
  header('Content-Type: application/json; charset=utf8');
  require_once('public.php');
  require_once('config.php');
  if (isset($_REQUEST['exec']) && isset($_REQUEST['daemon']) && isset($_REQUEST['pass'])){
    $exec   = strtolower($_REQUEST['exec']);
    $name   = $_REQUEST['daemon'];
    $pass   = $_REQUEST['pass'];
		if(!isset($DAEMON[$name])) die('{}');
    switch ($exec) {
      case 'start':
        echo $DAEMON[$name]->start($pass);
        break;
      case 'status':
        echo $DAEMON[$name]->getStatus();
        break;
      case 'stop':
        echo $DAEMON[$name]->stop($pass);
        break;
    }
  }
?>