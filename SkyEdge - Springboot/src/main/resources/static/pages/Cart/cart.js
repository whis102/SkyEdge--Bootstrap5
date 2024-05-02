
document.addEventListener('DOMContentLoaded', function() {

    const navTop = document.createElement('nav');
    navTop.id = 'nav-top';
    navTop.className = 'navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block';

    const header = document.createElement('nav');
    header.id = 'header';
    header.className = 'navbar navbar-expand-lg navbar-light shadow';

    const superCartContainer = document.createElement('div');
    superCartContainer.className = 'super-cart-container';

    const blockInfo = document.createElement('div');
    blockInfo.className = 'block-info container block-box';

    const navItems = document.createElement('div');
    navItems.className = 'nav';
    navItems.id = 'nav-items';

    const navItemActive = document.createElement('div');
    navItemActive.className = 'nav-item-active nav-item';
    navItemActive.setAttribute('data-target', 'payment-block');
    const infoSpan = document.createElement('span');
    infoSpan.textContent = 'Information';
    navItemActive.appendChild(infoSpan);

    const navItemPayment = document.createElement('div');
    navItemPayment.className = 'nav-item';
    navItemPayment.setAttribute('data-target', 'payment-block');
    const paymentSpan = document.createElement('span');
    paymentSpan.textContent = 'Payment';
    navItemPayment.appendChild(paymentSpan);

    navItems.appendChild(navItemActive);
    navItems.appendChild(navItemPayment);

    const viewList = document.createElement('div');
    viewList.className = 'view-list';

    const viewListWrapper = document.createElement('div');
    viewListWrapper.className = 'view-list-wrapper';

    const item = document.createElement('div');
    item.className = 'item';

    const itemImg = document.createElement('img');
    itemImg.src = './assets/images/category_img.jpg';
    itemImg.className = 'item-img';
    itemImg.setAttribute('loading', 'lazy');
    item.appendChild(itemImg);

    const itemInfo = document.createElement('div');
    itemInfo.className = 'item-info';

    const itemName = document.createElement('p');
    itemName.className = 'item-name';
    itemName.textContent = 'Sunglasses';

    const itemPrice = document.createElement('div');
    itemPrice.className = 'item-price';
    const priceParagraph = document.createElement('p');
    priceParagraph.textContent = '$48';
    const quantityParagraph = document.createElement('p');
    quantityParagraph.textContent = 'Quantity: ';
    const quantitySpan = document.createElement('span');
    quantitySpan.className = 'text-success';
    quantitySpan.textContent = '1';
    quantityParagraph.appendChild(quantitySpan);
    itemPrice.appendChild(priceParagraph);
    itemPrice.appendChild(quantityParagraph);

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemPrice);

    item.appendChild(itemInfo);
    viewListWrapper.appendChild(item);
    viewList.appendChild(viewListWrapper);

    const blockCustomer = document.createElement('div');
    blockCustomer.id = 'payment-block';
    blockCustomer.className = 'block-customer';
    const customerParagraph = document.createElement('p');
    customerParagraph.textContent = 'Customer Information';
    blockCustomer.appendChild(customerParagraph);

    const customerWrapper = document.createElement('div');
    customerWrapper.className = 'block-customer-wrapper';
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row g-2';

    const col1 = document.createElement('div');
    col1.className = 'col-md';
    const col1Input = document.createElement('input');
    col1Input.type = 'text';
    col1Input.className = 'form-control';
    col1Input.id = 'floatingInput';
    col1Input.placeholder = 'Type here..';
    const col1Label = document.createElement('label');
    col1Label.htmlFor = 'floatingInput';
    col1Label.textContent = 'Full name';
    col1.appendChild(col1Input);
    col1.appendChild(col1Label);

    const col2 = document.createElement('div');
    col2.className = 'col-md';
    const col2Input = document.createElement('input');
    col2Input.type = 'email';
    col2Input.className = 'form-control';
    col2Input.id = 'floatingInput';
    col2Input.placeholder = 'name@example.com';
    const col2Label = document.createElement('label');
    col2Label.htmlFor = 'floatingInput';
    col2Label.textContent = 'Email address';
    col2.appendChild(col2Input);
    col2.appendChild(col2Label);

    const col3 = document.createElement('div');
    col3.className = 'col-md';
    const col3Input = document.createElement('input');
    col3Input.type = 'text';
    col3Input.className = 'form-control';
    col3Input.id = 'floatingInput';
    col3Input.placeholder = 'Type here..';
    const col3Label = document.createElement('label');
    col3Label.htmlFor = 'floatingInput';
    col3Label.textContent = 'Phone number';
    col3.appendChild(col3Input);
    col3.appendChild(col3Label);

    rowDiv.appendChild(col1);
    rowDiv.appendChild(col2);
    rowDiv.appendChild(col3);
    customerWrapper.appendChild(rowDiv);
    blockCustomer.appendChild(customerWrapper);

    const blockPayment = document.createElement('div');
    blockPayment.className = 'block-payment';
    const paymentParagraph = document.createElement('p');
    paymentParagraph.textContent = 'Receiving Information';
    blockPayment.appendChild(paymentParagraph);

    const paymentWrapper = document.createElement('div');
    paymentWrapper.className = 'block-payment-wrapper';

    const paymentMethodDiv = document.createElement('div');
    paymentMethodDiv.className = 'block-payment-method';

    const radioDiv1 = document.createElement('div');
    const radioInput1 = document.createElement('input');
    radioInput1.type = 'radio';
    radioInput1.id = 'pickup';
    radioInput1.value = 'pickup';
    radioInput1.name = 'delivery';
    const radioLabel1 = document.createElement('label');
    radioLabel1.htmlFor = 'pickup';
    radioLabel1.className = 'mb-0';
    radioLabel1.textContent = 'On Store';
    radioDiv1.appendChild(radioInput1);
    radioDiv1.appendChild(radioLabel1);

    const radioDiv2 = document.createElement('div');
    const radioInput2 = document.createElement('input');
    radioInput2.type = 'radio';
    radioInput2.id = 'home';
    radioInput2.value = 'home';
    radioInput2.name = 'delivery';
    const radioLabel2 = document.createElement('label');
    radioLabel2.htmlFor = 'home';
    radioLabel2.className = 'mb-0';
    radioLabel2.textContent = 'At home';
    radioDiv2.appendChild(radioInput2);
    radioDiv2.appendChild(radioLabel2);

    paymentMethodDiv.appendChild(radioDiv1);
    paymentMethodDiv.appendChild(radioDiv2);

    const paymentMainDiv = document.createElement('div');
    paymentMainDiv.className = 'block-payment-main';

    const paymentCodDiv = document.createElement('div');
    paymentCodDiv.className = 'payment-main-cod payment-main-item';

    const boxSelect1 = document.createElement('div');
    boxSelect1.className = 'box-select';

    const boxSelect2 = document.createElement('div');
    boxSelect2.className = 'box-select';

    const boxInput1 = document.createElement('div');
    boxInput1.className = 'box-input';
    const inputSearch = document.createElement('input');
    inputSearch.type = 'search';
    inputSearch.placeholder = 'Pick your closest store';
    inputSearch.className = 'box-input-main';
    const inputLabel = document.createElement('label');
    inputLabel.textContent = 'Store';
    const inputLine = document.createElement('div');
    inputLine.className = 'box-input-line';
    boxInput1.appendChild(inputSearch);
    boxInput1.appendChild(inputLabel);
    boxInput1.appendChild(inputLine);

    const boxInput2 = document.createElement('div');
    boxInput2.className = 'box-input-arrow';
    const inputArrow = document.createElement('i');
    inputArrow.className = 'fa-solid fa-chevron-down';
    boxInput2.appendChild(inputArrow);

    boxSelect2.appendChild(boxInput1);
    boxSelect2.appendChild(boxInput2);

    paymentCodDiv.appendChild(boxSelect1);
    paymentCodDiv.appendChild(boxSelect2);

    paymentMainDiv.appendChild(paymentCodDiv);

    paymentWrapper.appendChild(paymentMethodDiv);
    paymentWrapper.appendChild(paymentMainDiv);

    blockPayment.appendChild(paymentWrapper);

    const bottomBar = document.createElement('div');
    bottomBar.className = 'bottom-bar container mt-auto';

    const totalBox = document.createElement('div');
    totalBox.className = 'total-box d-flex justify-content-between align-items-start';
    const titleTemp = document.createElement('p');
    titleTemp.className = 'title-temp';
    titleTemp.textContent = 'Temporary Total:';
    const priceDiv = document.createElement('div');
    priceDiv.className = 'price d-flex flex-column align-items-end';
    const totalSpan = document.createElement('span');
    totalSpan.className = 'total';
    totalSpan.textContent = '$48';
    priceDiv.appendChild(totalSpan);
    totalBox.appendChild(titleTemp);
    totalBox.appendChild(priceDiv);

    const btnSubmit = document.createElement('div');
    btnSubmit.className = 'btn-submit mt-2';
    const submitButton = document.createElement('button');
    submitButton.className = 'button-go-next btn btn-success d-flex flex-column justify content-center align-items-center w-100';
    submitButton.textContent = 'Continue';
    btnSubmit.appendChild(submitButton);

    bottomBar.appendChild(totalBox);
    bottomBar.appendChild(btnSubmit);

    blockInfo.appendChild(navItems);
    blockInfo.appendChild(viewList);
    blockInfo.appendChild(blockCustomer);
    blockInfo.appendChild(blockPayment);
    blockInfo.appendChild(bottomBar);

    superCartContainer.appendChild(blockInfo);

    document.body.appendChild(navTop);
    document.body.appendChild(header);
    document.body.appendChild(superCartContainer);
});

const navItems = document.querySelectorAll('#nav-items .nav-item');

navItems.forEach((item) => {
item.addEventListener('click', () => {
    navItems.forEach((navItem) => navItem.classList.remove('nav-item-active'));

    item.classList.add('nav-item-active');

    const contentBlocks = document.querySelectorAll('.block-box .block-customer');
    contentBlocks.forEach((block) => block.style.display = 'none');

    const targetBlockId = item.dataset.target;
    if (targetBlockId) {
    const targetBlock = document.getElementById(targetBlockId);
    if (targetBlock) {
        targetBlock.style.display = 'block';
    }
    }
});
});