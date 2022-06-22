<?php
    $data = array(
        'secret' => "0x65844e4505D7683D505BC7E3bc13C0f283A467F8",
        'response' => $_POST['capcha']
    );
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://hcaptcha.com/siteverify");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $responseData = json_decode($response);
    if($responseData->success) {
        // Si el captcha fue completado
        echo 'Verificacion completada correctamente';
    } else {
        // En caso de no haber completado el captcha
        echo 'Error de verificación de robot, por favor intente de nuevo.';
    }
?>