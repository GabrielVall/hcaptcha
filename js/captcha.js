window.onload = function() {

// Declaramos el id del captcha
var captchaID = hcaptcha.render('h-captcha', { sitekey: 'a557fbdd-c963-4d14-81b2-0445ae17e7f5' });

$(document).on('click', '#login_btn', function() {
    var email = $('[type="mail"]').val();
    var password = $('[type="password"]').val();
    var data = {
        email: email,
        password: password,
        // Obtenemos el valor del captcha
        capcha: $('[name="h-captcha-response"]').val()
    };
    $.ajax({
        url: 'login.php',
        type: 'POST',
        data: data,
        success: function(data) {
            // Imprimimos el valor
            console.log(data);
            // Reiniciamos el captcha
            hcaptcha.reset(captchaID);
        }
    });
});

}