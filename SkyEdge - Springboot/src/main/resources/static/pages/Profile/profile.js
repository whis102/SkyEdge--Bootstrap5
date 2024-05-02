var profileContent = null;

function showProfile(){
    if(!profileContent){
        const container = document.createElement('div');
        container.classList.add('container', 'profile-container', 'p-4');
        profileContent = container;
        const title = document.createElement('div');
        title.classList.add('fs-1', 'mb-4', 'fw-bold');
        title.textContent = 'Edit User Profile';

        const flexContainer = document.createElement('div');
        flexContainer.classList.add('d-flex', 'gap-5');

        const photoCard = document.createElement('div');
        photoCard.classList.add('card', 'w-50', 'h-25');

        const photoImage = document.createElement('img');
        photoImage.classList.add('card-img-top');
        photoImage.setAttribute('src', './assets/Login_background.png');
        photoImage.setAttribute('alt', 'Card image');
        photoImage.setAttribute('height', '200');
        photoImage.setAttribute('width', '300');

        const profileImage = document.createElement('img');
        profileImage.classList.add('img-profile', 'position-absolute');
        profileImage.setAttribute('src', user[0].userAvatar);
        profileImage.setAttribute('alt', 'Card image');
        profileImage.setAttribute('height', '100');

        const photoCardBody = document.createElement('div');
        photoCardBody.classList.add('card-body', 'mt-5');

        const photoTitle = document.createElement('h4');
        photoTitle.classList.add('card-title');
        photoTitle.textContent = 'Your Photo';

        const photoText = document.createElement('p');
        photoText.classList.add('card-text', 'fs-7', 'text-secondary');
        photoText.textContent = 'This will be displayed on your profile';

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('gap-3');

        const updateLink = document.createElement('a');
        updateLink.setAttribute('href', '#');
        updateLink.setAttribute('role', 'button');
        updateLink.setAttribute('id', 'actual-btn');
        updateLink.classList.add('btn', 'btn-secondary', 'rounded-4', 'mx-4');
        updateLink.textContent = 'Update new';
        updateLink.addEventListener('click', displayProfilePic); // Đảm bảo rằng hàm displayProfilePic đã được định nghĩa

        const saveLink = document.createElement('a');
        saveLink.setAttribute('href', '#');
        saveLink.classList.add('btn', 'btn-primary', 'px-4', 'rounded-4');
        saveLink.textContent = 'Save';

        // Thêm các phần tử vào nhau theo cấu trúc của HTML
        buttonsDiv.appendChild(updateLink);
        buttonsDiv.appendChild(saveLink);
        photoCardBody.appendChild(photoTitle);
        photoCardBody.appendChild(photoText);
        photoCardBody.appendChild(buttonsDiv);
        photoCard.appendChild(photoImage);
        photoCard.appendChild(profileImage);
        photoCard.appendChild(photoCardBody);

        const infoCard = document.createElement('div');
        infoCard.classList.add('card', 'w-50', 'h-25', 'p-4');

        const infoTitle = document.createElement('span');
        infoTitle.classList.add('fs-4');
        infoTitle.textContent = 'Personal Information';

        const form = document.createElement('form');
        form.setAttribute('action', '/action_page.php');

        const fullNameDiv = document.createElement('div');
        fullNameDiv.classList.add('mb-3', 'mt-3');

        const fullNameLabel = document.createElement('label');
        fullNameLabel.setAttribute('for', 'email');
        fullNameLabel.classList.add('form-label');
        fullNameLabel.textContent = 'Full Name';

        const fullNameInput = document.createElement('input');
        fullNameInput.setAttribute('type', 'email');
        fullNameInput.setAttribute('class', 'form-control');
        fullNameInput.setAttribute('id', 'email');
        fullNameInput.setAttribute('placeholder', user[0].userName);
        fullNameInput.setAttribute('name', 'email');

        fullNameDiv.appendChild(fullNameLabel);
        fullNameDiv.appendChild(fullNameInput);

        const emailDiv = document.createElement('div');
        emailDiv.classList.add('mb-3', 'mt-3');

        const emailLabel = document.createElement('label');
        emailLabel.setAttribute('for', 'email');
        emailLabel.classList.add('form-label');
        emailLabel.textContent = 'Email';

        const emailInput = document.createElement('input');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('class', 'form-control');
        emailInput.setAttribute('id', 'email');
        emailInput.setAttribute('placeholder', user[0].userEmail);
        emailInput.setAttribute('name', 'email');

        emailDiv.appendChild(emailLabel);
        emailDiv.appendChild(emailInput);

        const mobileNumberDiv = document.createElement('div');
        mobileNumberDiv.classList.add('mb-3');

        const mobileNumberLabel = document.createElement('label');
        mobileNumberLabel.setAttribute('for', 'pwd');
        mobileNumberLabel.classList.add('form-label');
        mobileNumberLabel.textContent = 'Mobile number';

        const mobileNumberInput = document.createElement('input');
        mobileNumberInput.setAttribute('type', 'password');
        mobileNumberInput.setAttribute('class', 'form-control');
        mobileNumberInput.setAttribute('id', 'pwd');
        mobileNumberInput.setAttribute('placeholder', user[0].userPhone);
        mobileNumberInput.setAttribute('name', 'pswd');

        mobileNumberDiv.appendChild(mobileNumberLabel);
        mobileNumberDiv.appendChild(mobileNumberInput);

        const roleDiv = document.createElement('div');
        roleDiv.classList.add('mb-3');

        const roleLabel = document.createElement('label');
        roleLabel.setAttribute('for', 'pwd');
        roleLabel.classList.add('form-label');
        roleLabel.textContent = 'Role';

        const roleInput = document.createElement('input');
        roleInput.setAttribute('type', 'password');
        roleInput.setAttribute('class', 'form-control');
        roleInput.setAttribute('id', 'pwd');
        roleInput.setAttribute('placeholder', user[0].userRole);
        roleInput.setAttribute('name', 'pswd');

        roleDiv.appendChild(roleLabel);
        roleDiv.appendChild(roleInput);

        const saveButton = document.createElement('button');
        saveButton.setAttribute('type', 'submit');
        saveButton.classList.add('btn', 'btn-primary');
        saveButton.textContent = 'Save';

        form.appendChild(fullNameDiv);
        form.appendChild(emailDiv);
        form.appendChild(mobileNumberDiv);
        form.appendChild(roleDiv);
        form.appendChild(saveButton);

        infoCard.appendChild(infoTitle);
        infoCard.appendChild(form);

        flexContainer.appendChild(photoCard);
        flexContainer.appendChild(infoCard);

        container.appendChild(title);
        container.appendChild(flexContainer);

        // Thêm container vào body của trang
        document.body.appendChild(container);
        function displayProfilePic() {
            // Thêm logic xử lý tại đây
        }
    }
    return profileContent;
}