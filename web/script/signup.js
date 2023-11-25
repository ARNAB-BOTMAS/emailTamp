function openSignUpPage(){
    var dynamicContentContainer = document.getElementById('dynamic-content-container');
    dynamicContentContainer.innerHTML = '';

    var h1Head = document.createElement('h1');
    h1Head.textContent = 'Agapastala';

    var h1Element = document.createElement('h1');
    h1Element.textContent = 'Sign Up';

    var animationContainer = document.createElement('div');
    animationContainer.id = 'animationContent'

    var animationLoading = document.createElement('div');
    animationLoading.id = "animation"

    var formContent = document.createElement('form');
    formContent.id = "emailForm";

    var nameLabel = document.createElement('label');
    nameLabel.htmlFor = "name";
    nameLabel.textContent = "Name";

    var nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.placeholder = "Name";
    nameInput.setAttribute('onfocus', 'removePlaceholder("name")');
    nameInput.setAttribute('onblur', 'restorePlaceholder("name")');
    nameInput.required = true;

    var emailLabel = document.createElement('label');
    emailLabel.htmlFor = "email";
    emailLabel.textContent = "Email";

    var emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.placeholder = "Email";
    emailInput.setAttribute('onfocus', 'removePlaceholder("email")');
    emailInput.setAttribute('onblur', 'restorePlaceholder("email")');
    emailInput.required = true;

    var phoneLabel = document.createElement('label');
    phoneLabel.htmlFor = "phone";
    phoneLabel.textContent = "Phone";

    var phoneInput = document.createElement('input');
    phoneInput.type = "tel";
    phoneInput.id = "phone";
    phoneInput.placeholder = "Phone";
    phoneInput.setAttribute('onfocus', 'removePlaceholder("phone")');
    phoneInput.setAttribute('onblur', 'restorePlaceholder("phone")');
    phoneInput.required = true;

    var passwordLabel = document.createElement('label');
    passwordLabel.htmlFor = "password";
    passwordLabel.textContent = "Password";

    var passwordInput = document.createElement('input');
    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.placeholder = "Password";
    passwordInput.setAttribute('onfocus', 'removePlaceholder("password")');
    passwordInput.setAttribute('onblur', 'restorePlaceholder("password")');
    passwordInput.required = true;

    var conPasswordLabel = document.createElement('label');
    conPasswordLabel.htmlFor = "conPassword";
    conPasswordLabel.textContent = "Confirm Password";

    var conPasswordInput = document.createElement('input');
    conPasswordInput.type = "password";
    conPasswordInput.id = "conPassword";
    conPasswordInput.placeholder = "Confirm Password";
    conPasswordInput.setAttribute('onfocus', 'removePlaceholder("conPassword")');
    conPasswordInput.setAttribute('onblur', 'restorePlaceholder("conPassword")');
    conPasswordInput.required = true;

    var buttonContainer = document.createElement('div');
    buttonContainer.id = "buttonContent";

    var buttonSubmit = document.createElement('button');
    buttonSubmit.type = "button";
    buttonSubmit.textContent = "Sign Up";
    buttonSubmit.className = "signUpBtn";
    // buttonSubmit.addEventListener('click', function () {
    //     console.log('signup');
    // });
    buttonSubmit.addEventListener('click', submitForm);

    var buttonCancel = document.createElement('button');
    buttonCancel.type = "button";
    buttonCancel.textContent = "Back";
    buttonCancel.className = "backBtn";

    var linkContainer = document.createElement('div');
    linkContainer.id = "linkContent";

    var linkSign = document.createElement('a');
    linkSign.id = "linkSign";
    linkSign.href = "#";
    linkSign.textContent = "Already have an account?";

    var linkReset = document.createElement('a');
    linkReset.id = "linkReset";
    linkReset.href = "#"
    linkReset.textContent = " Reset Form";



    // animationLoading.appendChild(h1Element);
    formContent.appendChild(h1Element);

    formContent.appendChild(nameLabel);
    formContent.appendChild(document.createElement('br'));
    formContent.appendChild(nameInput);
    formContent.appendChild(document.createElement('br'));
    formContent.appendChild(document.createElement('br'));

    formContent.appendChild(emailLabel);
    formContent.appendChild(document.createElement('br'));
    formContent.appendChild(emailInput);
    formContent.appendChild(document.createElement('br'));
    formContent.appendChild(document.createElement('br'));

    formContent.appendChild(phoneLabel);
    formContent.appendChild(document.createElement('br'));
    formContent.appendChild(phoneInput);
    formContent.appendChild(document.createElement('br'));
    formContent.appendChild(document.createElement('br'));

    formContent.appendChild(passwordLabel);
    formContent.appendChild(document.createElement('br'));
    formContent.appendChild(passwordInput);
    formContent.appendChild(document.createElement('br'));
    formContent.appendChild(document.createElement('br'));

    formContent.appendChild(conPasswordLabel);
    formContent.appendChild(document.createElement('br'));
    formContent.appendChild(conPasswordInput);
    formContent.appendChild(document.createElement('br'));
    formContent.appendChild(document.createElement('br'));

    buttonContainer.appendChild(buttonSubmit);
    buttonContainer.appendChild(buttonCancel);

    linkContainer.appendChild(linkSign);
    linkContainer.appendChild(linkReset);

    formContent.appendChild(buttonContainer);
    formContent.appendChild(linkContainer);

    animationContainer.appendChild(animationLoading);

    dynamicContentContainer.appendChild(animationContainer);
    dynamicContentContainer.appendChild(h1Head);
    dynamicContentContainer.appendChild(formContent);

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

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var conPassword = document.getElementById('conPassword').value;
    var animationContent = document.getElementById('animationContent')
    
    var animation = lottie.loadAnimation({
        container: document.getElementById('animation'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'https://lottie.host/8097d734-dd74-4cd3-9213-fd9050f01850/OfuuLRNNS4.json',
    });
    animation.play();
    animationContent.style.visibility = 'visible';

    eel.print_email(name, email, phone, password)(function(respond){
        if (respond){
            animation.destroy();
            var complete = lottie.loadAnimation({
                container: document.getElementById('animation'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: 'https://lottie.host/f2660cef-ff6a-4351-ab1d-15750d078c75/A8V8EScDSF.json',
                innerWidth: 20,
            });
            complete.play();
            // complete.setSpeed(1 + (seed % 100) / 100);
            setTimeout(function() {
                console.log('Interval cleared after 5 seconds');
                complete.destroy();
                animationContent.style.visibility = 'hidden';
                var form = document.getElementById('emailForm');
                form.reset();
                var nameInput = document.getElementById("name");
                nameInput.placeholder = "Name";

                var emailInput = document.getElementById("email");
                emailInput.placeholder = "Email";

                var emailInput = document.getElementById("phone");
                emailInput.placeholder = "Phone";

                var emailInput = document.getElementById("password");
                emailInput.placeholder = "Password";

                var emailInput = document.getElementById("conPassword");
                emailInput.placeholder = "Confirm Password";
            }, 5000);
        }
        console.log(respond)
    });
}
openSignUpPage();
// var animation = lottie.loadAnimation({
//     container: document.getElementById('animation'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'https://lottie.host/8097d734-dd74-4cd3-9213-fd9050f01850/OfuuLRNNS4.json',
// });

