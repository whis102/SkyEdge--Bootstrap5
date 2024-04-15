document.addEventListener('DOMContentLoaded', function() {
    // Create a div element with class "row"
    var rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    // Create a div element with class "column" and "bg-transparent"
    var column1Div = document.createElement('div');
    column1Div.classList.add('column', 'bg-transparent');

    // Create a span element with classes "ms-3", "text-success", and "logo-name"
    var spanElement = document.createElement('span');
    spanElement.classList.add('ms-3', 'text-success', 'logo-name');

    // Create an img element with src and alt attributes
    var imgElement = document.createElement('img');
    imgElement.src = './assets/favicon.png';
    imgElement.alt = 'skyedge-logo';
    imgElement.classList.add('logo');

    // Append the img element to the span element
    spanElement.appendChild(imgElement);

    // Append the text "SkyEdge" to the span element
    spanElement.appendChild(document.createTextNode('SkyEdge'));

    // Append the span element to the column1Div
    column1Div.appendChild(spanElement);

    // Create a div element with classes "p-4", "custom-form", and "form-container"
    var formContainerDiv = document.createElement('div');
    formContainerDiv.classList.add('p-4', 'custom-form', 'form-container');

    // Create a form element
    var formElement = document.createElement('form');

    // Create h2 and h6 elements
    var h2Element = document.createElement('h2');
    var h6Element = document.createElement('h6');

    // Set text content for h2 and h6 elements
    h2Element.textContent = 'Get started!';
    h6Element.textContent = 'Create your account now';

    // Create full name input field and label
    var fullNameLabel = document.createElement('label');
    fullNameLabel.setAttribute('for', 'fullname');
    fullNameLabel.classList.add('form-label', 'label-font');
    fullNameLabel.textContent = 'Full name';

    var fullNameInput = document.createElement('input');
    fullNameInput.setAttribute('type', 'text');
    fullNameInput.classList.add('form-control');
    fullNameInput.setAttribute('id', 'fullname');
    fullNameInput.setAttribute('placeholder', 'Enter your name');

    // Create email input field and label
    var emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.classList.add('form-label', 'label-font');
    emailLabel.textContent = 'Email';

    var emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'text');
    emailInput.classList.add('form-control');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('placeholder', 'Enter your email');

    // Create password input field and label
    var passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.classList.add('form-label', 'label-font');
    passwordLabel.textContent = 'Password';

    var passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.classList.add('form-control');
    passwordInput.setAttribute('id', 'password');
    passwordInput.setAttribute('placeholder', 'Enter your password');

    // Create checkbox input field and label
    var termsAndConditionsDiv = document.createElement('div');
    termsAndConditionsDiv.classList.add('mb-3', 'form-check');

    var termsAndConditionsInput = document.createElement('input');
    termsAndConditionsInput.setAttribute('type', 'checkbox');
    termsAndConditionsInput.classList.add('form-check-input');
    termsAndConditionsInput.setAttribute('id', 'terms-and-conditions');

    var termsAndConditionsLabel = document.createElement('label');
    termsAndConditionsLabel.setAttribute('for', 'terms-and-conditions');
    termsAndConditionsLabel.classList.add('form-check-label', 'chk-box');
    termsAndConditionsLabel.textContent = 'Terms and conditions';

    // Create signup button
    var signUpButton = document.createElement('button');
    signUpButton.setAttribute('type', 'submit');
    signUpButton.classList.add('btn', 'btn-primary', 'custom-btn-width', 'btn-signup');
    signUpButton.textContent = 'Sign up';

    // Create login link
    var logInLink = document.createElement('a');
    logInLink.setAttribute('href', 'login.html');
    logInLink.classList.add('log-in-btn');
    logInLink.textContent = 'Have an account? Log in';

    // Append elements to form container div
    formContainerDiv.appendChild(formElement);
    formElement.appendChild(h2Element);
    formElement.appendChild(h6Element);
    formElement.appendChild(fullNameLabel);
    formElement.appendChild(fullNameInput);
    formElement.appendChild(emailLabel);
    formElement.appendChild(emailInput);
    formElement.appendChild(passwordLabel);
    formElement.appendChild(passwordInput);
    formElement.appendChild(termsAndConditionsDiv);
    termsAndConditionsDiv.appendChild(termsAndConditionsInput);
    termsAndConditionsDiv.appendChild(termsAndConditionsLabel);
    formElement.appendChild(signUpButton);
    formElement.appendChild(document.createElement('p').appendChild(document.createTextNode("Have an account? ")));
    formElement.lastChild.appendChild(logInLink);

    // Append elements to column1 div
    column1Div.appendChild(formContainerDiv);

    // Create a div element with class "column"
    var column2Div = document.createElement('div');
    column2Div.classList.add('column');

    // Create an img element with src and alt attributes
    var bgImageElement = document.createElement('img');
    bgImageElement.src = './assets/Login_background.png';
    bgImageElement.alt = 'Background';
    bgImageElement.classList.add('image');

    // Append elements to column2 div
    column2Div.appendChild(bgImageElement);

    // Append column1 and column2 divs to the row div
    rowDiv.appendChild(column1Div);
    rowDiv.appendChild(column2Div);

    // Append the row div to the body of the document
    document.body.appendChild(rowDiv);
});
