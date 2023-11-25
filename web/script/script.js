function submitForm() {
    var email = document.getElementById('email').value;
    animationContent.style.visibility = 'visible';
    
    var animation = lottie.loadAnimation({
        container: document.getElementById('animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/a66f3ea6-85bf-4dab-ab83-5f367ae0deb2/WXiDNQbkaJ.json',
    });
    eel.print_email(email)(function(respond){
        if (respond){
            animation.destroy();
            animationContent.style.visibility = 'visible';
        }
        console.log(respond)
    });
}

function removePlaceholder(inputId) {
    var input = document.getElementById(inputId);
    if (input) {
        input.placeholder = '';
    }
}

function restorePlaceholder(inputId) {
    var input = document.getElementById(inputId);
    if (input && input.value === '') {
        if (inputId === 'name') {
            input.placeholder = 'Name';
        } else if (inputId === 'email') {
            input.placeholder = 'Email';
        } else if (inputId === 'phone') {
            input.placeholder = 'Phone No';
        } else if (inputId === 'password') {
            input.placeholder = 'Password';
        } else if (inputId === 'conPassword') {
            input.placeholder = 'Confirm Password';
        } else if (inputId === 'employ') {
            input.placeholder = 'Employ ID';
        }
    }
}
