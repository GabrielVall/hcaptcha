<?php
if ( isset($_POST['submit']) ) {
    $data = array(
        'secret' => "0x65844e4505D7683D505BC7E3bc13C0f283A467F8",
        'response' => $_POST['h-captcha-response']
    );
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://hcaptcha.com/siteverify");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $responseData = json_decode($response);
    if($responseData->success) {
        echo 'Verificacion completada correctamente';
    } else {
        echo 'Error de verificación de robot, por favor intente de nuevo.';
    }
}
?>