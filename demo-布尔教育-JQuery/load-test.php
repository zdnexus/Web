<?php

header("Content-Type:text/html;charset=gb2312");

$username = $_POST["username"];
if ($username == "admin") {
    echo "�û���������admin";
} else {
    echo "�û�������ע��";
}