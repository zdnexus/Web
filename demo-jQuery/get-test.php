<?php
/**
 * Created by PhpStorm.
 * User: hasee
 * Date: 2015/10/25
 * Time: 0:00
 */

header("Content-Type:text/html;charset=gb2312");

$username = $_GET["username"];
if ($username == "admin") {
    echo "�û���������admin";
} else {
    echo "�û�������ע��";
}