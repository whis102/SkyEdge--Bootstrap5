const modal = document.getElementById('confirmationModal');
const submitButton = document.getElementById('submitButton')
const confirmButton = document.getElementById('confirmButton');
const cancelButton = document.getElementById('cancelButton');

submitButton.addEventListener('click', function () {
    modal.style.display = 'block';
});

confirmButton.addEventListener('click', function () {
    console.log('Form submitted');
    modal.style.display = 'none';
});

cancelButton.addEventListener('click', function () {
    modal.style.display = 'none';
});
