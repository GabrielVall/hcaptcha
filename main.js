window.onload = function() {
    var widgetID;
    yourFunction();
    function yourFunction () {
        console.log('hCaptcha is ready.');
        widgetID = hcaptcha.render('h-captcha', { sitekey: 'a557fbdd-c963-4d14-81b2-0445ae17e7f5' });
    }
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
                hcaptcha.reset(widgetID);
            }
        });
    });
    };