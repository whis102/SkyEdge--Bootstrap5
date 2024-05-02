document.addEventListener('DOMContentLoaded', function() {
    // Create a div element with class "row"
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    // Create a div element with class "column" and "bg-transparent"
    const column1Div = document.createElement('div');
    column1Div.classList.add('column', 'bg-transparent');

    // Create a span element with classes "ms-3", "text-success", and "logo-name"
    const spanElement = document.createElement('span');
    spanElement.classList.add('ms-3', 'text-success', 'logo-name');

    // Create an img element with src and alt attributes
    const imgElement = document.createElement('img');
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
    const formContainerDiv = document.createElement('div');
    formContainerDiv.classList.add('p-4', 'custom-form', 'form-container');

    // Create a form element
    const formElement = document.createElement('form');

    // Create h2 and h6 elements
    const h2Element = document.createElement('h2');
    const h6Element = document.createElement('h6');

    // Set text content for h2 and h6 elements
    h2Element.textContent = 'Welcome back!';
    h6Element.textContent = 'Please enter your details.';

    // Create email input field and label
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.classList.add('form-label', 'label-font');
    emailLabel.textContent = 'Email';

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'text');
    emailInput.classList.add('form-control');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('placeholder', 'Enter your email');

    // Create password input field and label
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.classList.add('form-label', 'label-font');
    passwordLabel.textContent = 'Password';

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.classList.add('form-control');
    passwordInput.setAttribute('id', 'password');
    passwordInput.setAttribute('placeholder', 'Enter your password');

    // Create checkbox input field and label
    const keepLoggedInDiv = document.createElement('div');
    keepLoggedInDiv.classList.add('mb-3', 'form-check');

    const keepLoggedInInput = document.createElement('input');
    keepLoggedInInput.setAttribute('type', 'checkbox');
    keepLoggedInInput.classList.add('form-check-input');
    keepLoggedInInput.setAttribute('id', 'keep-logged-in');

    const keepLoggedInLabel = document.createElement('label');
    keepLoggedInLabel.setAttribute('for', 'keep-logged-in');
    keepLoggedInLabel.classList.add('form-check-label', 'chk-box');
    keepLoggedInLabel.textContent = 'Keep me logged in';
    keepLoggedInLabel.style.fontSize = 'smaller';

    // Create forgot password link
    const forgotPasswordLink = document.createElement('a');
    forgotPasswordLink.setAttribute('href', '#');
    forgotPasswordLink.classList.add('d-flex', 'justify-content-between', 'psw-link');
    forgotPasswordLink.textContent = 'Forgot password?';

    // Create login button
    const loginButton = document.createElement('button');
    loginButton.setAttribute('type', 'submit');
    loginButton.classList.add('btn', 'btn-primary', 'custom-btn-width', 'btn-login');
    loginButton.textContent = 'Log in';

    // Create signup link
    const signUpLink = document.createElement('a');
    signUpLink.setAttribute('href', 'register.html');
    signUpLink.classList.add('sign-up-btn');
    signUpLink.textContent = 'Sign up';

    // Append elements to form container div
    formContainerDiv.appendChild(formElement);
    formElement.appendChild(h2Element);
    formElement.appendChild(h6Element);
    formElement.appendChild(emailLabel);
    formElement.appendChild(emailInput);
    formElement.appendChild(passwordLabel);
    formElement.appendChild(passwordInput);
    formElement.appendChild(keepLoggedInDiv);
    keepLoggedInDiv.appendChild(keepLoggedInInput);
    keepLoggedInDiv.appendChild(keepLoggedInLabel);
    formElement.appendChild(forgotPasswordLink);
    formElement.appendChild(loginButton);
    formElement.appendChild(document.createElement('p').appendChild(document.createTextNode("Don't have an account? ")));
    formElement.lastChild.appendChild(signUpLink);

    // Append elements to column1 div
    column1Div.appendChild(formContainerDiv);

    // Create a div element with class "column"
    const column2Div = document.createElement('div');
    column2Div.classList.add('column');

    // Create an img element with src and alt attributes
    const bgImageElement = document.createElement('img');
    bgImageElement.src = './assets/Login_background.png';
    bgImageElement.alt = 'Background';
    bgImageElement.classList.add('image');

    // Append elements to column2 div
    column2Div.appendChild(bgImageElement);

    // Append column1 and column2 divs to the row div
    rowDiv.appendChild(column1Div);
    rowDiv.appendChild(column2Div);

    // Append the row div to the body of the webpage
    document.body.appendChild(rowDiv);
});

console.log(r)

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}
