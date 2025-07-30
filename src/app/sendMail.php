<?php
switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"):
            header("Access-Control-Allow-Origin: *");
            $json = file_get_contents('php://input');
            $params = json_decode($json);
    
            $mail = $params->mail;
            $name = $params->name;
            $message = $params->message;
    
            $recipient = 'kontakt@anne-vollmann.de';  
            $subject = "Contact request from $mail";
            $message = "From:" . $name ."<br>" . $mail ."<br><br>" . $message ;
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';

            $headers[] = "From: noreply@anne-vollmann.de";

            mail($recipient, $subject, $message, implode("\r\n", $headers));
            break;
        default:
            header("Allow: POST", true, 405);
            exit;
    } 
?>