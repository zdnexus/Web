<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/4/15
 * Time: 10:53
 */
header("Content-Type: text/html;charset=utf-8");

function postMessage($message)
{
    $fp = fopen('document.txt', 'w');

    if ($fp) {
        $flag = fwrite($fp, $message);

        if ($flag) {
            echo 'д��ɹ�!!!';
        } else {
            echo 'д��ʧ��!!!';
        }
        fclose($fp);
    } else {
        echo '���ļ�ʧ��...';
    }
}

function defaultSetting()
{
//    $raw_post_data = file_get_contents('php://input', 'r');
//    var_dump($raw_post_data);
//    exit;
    $getDataType = $_POST['dataType'];
    $getMessage = $_POST['message'];

    if ($getDataType == 1) {
        postMessage($getMessage);
    } else {
        echo '����ӿ�ʧ��...';
    }
}

defaultSetting();

