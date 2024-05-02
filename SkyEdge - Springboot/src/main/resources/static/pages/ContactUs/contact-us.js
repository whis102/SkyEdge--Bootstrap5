document.addEventListener('DOMContentLoaded', function(){

    const navTop = document.createElement('nav');
    navTop.id = 'nav-top';
    navTop.className = 'navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block';

    const header = document.createElement('nav');
    header.id = 'header';
    header.className = 'navbar navbar-expand-lg navbar-light shadow';

    const mainContainer = document.createElement('div');
    mainContainer.className = 'container-fluid';

    const contactContainer = document.createElement('div');
    contactContainer.className = 'container py-5';

    const contactForm = document.createElement('form');
    contactForm.className = 'col-md-9 m-auto';
    contactForm.method = 'post';
    contactForm.role = 'form';

    const formRow = document.createElement('div');
    formRow.className = 'row';

    const emailFormGroup = document.createElement('div');
    emailFormGroup.className = 'form-group col-md-6 mb-3';
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.className = 'form-control mt-1';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Enter your email';
    emailFormGroup.appendChild(emailLabel);
    emailFormGroup.appendChild(emailInput);

    const orderCodeFormGroup = document.createElement('div');
    orderCodeFormGroup.className = 'form-group col-md-6 mb-3';
    const orderCodeLabel = document.createElement('label');
    orderCodeLabel.setAttribute('for', 'order-code');
    orderCodeLabel.textContent = 'Order Code';
    const orderCodeInput = document.createElement('input');
    orderCodeInput.type = 'text';
    orderCodeInput.className = 'form-control mt-1';
    orderCodeInput.id = 'order-code';
    orderCodeInput.name = 'order code';
    orderCodeInput.placeholder = 'Enter your order code';
    orderCodeFormGroup.appendChild(orderCodeLabel);
    orderCodeFormGroup.appendChild(orderCodeInput);

    formRow.appendChild(emailFormGroup);
    formRow.appendChild(orderCodeFormGroup);

    const subjectInput = document.createElement('input');
    subjectInput.type = 'text';
    subjectInput.className = 'form-control mt-1 mb-3';
    subjectInput.id = 'subject';
    subjectInput.name = 'subject';
    subjectInput.placeholder = 'Enter subject';

    const messageTextarea = document.createElement('textarea');
    messageTextarea.className = 'form-control mt-1 mb-3';
    messageTextarea.id = 'message';
    messageTextarea.name = 'message';
    messageTextarea.placeholder = 'Type something';
    messageTextarea.rows = '8';

    const buttonRow = document.createElement('div');
    buttonRow.className = 'row';

    const modalButton = document.createElement('a');
    modalButton.type = 'button';
    modalButton.className = 'btn btn-outline-success';
    modalButton.setAttribute('data-bs-toggle', 'modal');
    modalButton.setAttribute('data-bs-target', '#staticBackdrop');
    modalButton.textContent = 'Let\'s talk';
    const modalButtonColumn = document.createElement('div');
    modalButtonColumn.className = 'col text-end mt-2';
    modalButtonColumn.appendChild(modalButton);

    const modal = document.createElement('div');
    modal.className = 'modal fade bg-transparent';
    modal.id = 'staticBackdrop';
    modal.setAttribute('data-bs-backdrop', 'static');
    modal.setAttribute('data-bs-keyboard', 'false');
    modal.tabIndex = '-1';
    modal.setAttribute('aria-labelledby', 'staticBackdropLabel');
    modal.setAttribute('aria-hidden', 'true');

    const modalDialog = document.createElement('div');
    modalDialog.className = 'modal-dialog';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    const modalBodyHeading = document.createElement('h5');
    modalBodyHeading.className = 'py-4 text-success';
    modalBodyHeading.textContent = 'Are you sure?';
    modalBody.appendChild(modalBodyHeading);

    const modalFooter = document.createElement('div');
    modalFooter.className = 'd-flex justify-content-center';
    const cancelButton = document.createElement('a');
    cancelButton.type = 'button';
    cancelButton.className = 'btn btn-outline-danger mx-4';
    cancelButton.setAttribute('data-bs-dismiss', 'modal');
    cancelButton.textContent = 'Cancel';
    const confirmButton = document.createElement('a');
    confirmButton.type = 'button';
    confirmButton.className = 'btn btn-success mx-4';
    confirmButton.id = 'toastBtn';
    confirmButton.href = '#';
    confirmButton.setAttribute('data-bs-dismiss', 'modal');
    confirmButton.textContent = 'Confirm';
    modalFooter.appendChild(cancelButton);
    modalFooter.appendChild(confirmButton);

    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);

    const toast = document.createElement('div');
    toast.id = 'liveToast';
    toast.className = 'toast align-items-center text-white bg-primary border-0';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    const toastInnerDiv = document.createElement('div');
    toastInnerDiv.className = 'd-flex';
    const toastBody = document.createElement('div');
    toastBody.className = 'toast-body';
    toastBody.textContent = 'Successful';
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close btn-close-white me-2 m-auto';
    closeButton.setAttribute('data-bs-dismiss', 'toast');
    closeButton.setAttribute('aria-label', 'Close');
    toastInnerDiv.appendChild(toastBody);
    toastInnerDiv.appendChild(closeButton);
    toast.appendChild(toastInnerDiv);

    formRow.appendChild(subjectInput);
    formRow.appendChild(messageTextarea);
    buttonRow.appendChild(modalButtonColumn);
    buttonRow.appendChild(modal);
    buttonRow.appendChild(toast);
    contactForm.appendChild(formRow);
    contactForm.appendChild(buttonRow);
    contactContainer.appendChild(contactForm);
    mainContainer.appendChild(contactContainer);

    document.body.appendChild(navTop);
    document.body.appendChild(header);
    document.body.appendChild(mainContainer);

})


var myModal = document.getElementById('confirmationModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})

function showToast() {
    var toastEl = document.getElementById('liveToast');
    var bsToast = new bootstrap.Toast(toastEl);
    bsToast.show();
}

var toastBtn = document.getElementById('toastBtn')

toastBtn.addEventListener('click', showToast);
