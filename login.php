<?php
$data = array(
            'secret' => "0x65844e4505D7683D505BC7E3bc13C0f283A467F8",
            'response' => $_POST['h-captcha-response']
        );
$verify = curl_init();
curl_setopt($verify, CURLOPT_URL, "https://hcaptcha.com/siteverify");
curl_setopt($verify, CURLOPT_POST, true);
curl_setopt($verify, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($verify, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($verify);
// var_dump($response);
$responseData = json_decode($response);
if($responseData->success) {
    echo 'Success';
}
else {
   echo 'Failed';
}
?>