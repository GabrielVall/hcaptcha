window.onload = function() {
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
// On click login btn pure js
$(document).on('click', '#login_btn', function() {
    var email = $('[type="mail"]').val();
    var password = $('[type="password"]').val();
    var data = {
        email: email,
        password: password,
        capcha: $('[name="h-captcha-response"]').val()
    };
    $.ajax({
        url: 'login.php',
        type: 'POST',
        data: data,
        success: function(data) {
            console.log(data);
        }
    });
});
};