var voucherContent = null;
var currentPage = 1;
var vouchersPerPage = 7;

const voucherData = [
    {
        id: 'check1',
        voucherIcon: 'fas fa-truck',
        voucherCode: 'FREESHIP2024',
        voucherName: 'Free Shipping',
        discount: '50%',
        type: 'Shipping Discount',
        stock: '120',
        applicable: 'All items available on our website, including sale and clearance items.',
        validity: 'From February 25, 2024 to March 31, 2024'
    },
    {
        id: 'check4',
        voucherIcon: 'fas fa-tag',
        voucherCode: 'SALE10',
        voucherName: '10% Off Sale',
        discount: '10%',
        type: 'Discount',
        stock: '150',
        applicable: 'Applicable on all items in the sale category.',
        validity: 'Valid until June 30, 2024'
    },
    {
        id: 'check5',
        voucherIcon: 'fas fa-gift',
        voucherCode: 'GIFT2025',
        voucherName: 'New Year Gift',
        discount: 'Gift',
        type: 'Free Gift',
        stock: '200',
        applicable: 'Applicable on all purchases over $150.',
        validity: 'Valid from January 1, 2025 to January 31, 2025'
    },
    {
        id: 'check6',
        voucherIcon: 'fas fa-percent',
        voucherCode: 'FLASHSALE',
        voucherName: 'Flash Sale',
        discount: '30%',
        type: 'Discount',
        stock: '50',
        applicable: 'Applicable on selected items for a limited time.',
        validity: 'Valid for 24 hours only.'
    },
    {
        id: 'check7',
        voucherIcon: 'fas fa-gift',
        voucherCode: 'BIRTHDAY2024',
        voucherName: 'Birthday Gift',
        discount: 'Gift',
        type: 'Free Gift',
        stock: 'Unlimited',
        applicable: 'Applicable on your birthday month.',
        validity: 'Valid for one month from your birthday.'
    },
    {
        id: 'check2',
        voucherIcon: 'fas fa-percent',
        voucherCode: 'SALE25',
        voucherName: '25% Off Sale',
        discount: '25%',
        type: 'Discount',
        stock: '100',
        applicable: 'Applicable on selected sale items only.',
        validity: 'Valid until April 30, 2024'
    },
    {
        id: 'check3',
        voucherIcon: 'fas fa-gift',
        voucherCode: 'GIFT2024',
        voucherName: 'Free Gift',
        discount: 'Gift',
        type: 'Free Gift',
        stock: 'Unlimited',
        applicable: 'Applicable on all purchases over $100.',
        validity: 'Valid from May 1, 2024 to December 31, 2024'
    },
    {
        id: 'check7',
        voucherIcon: 'fas fa-gift',
        voucherCode: 'BIRTHDAY2024',
        voucherName: 'Birthday Gift',
        discount: 'Gift',
        type: 'Free Gift',
        stock: 'Unlimited',
        applicable: 'Applicable on your birthday month.',
        validity: 'Valid for one month from your birthday.'
    },
    {
        id: 'check2',
        voucherIcon: 'fas fa-percent',
        voucherCode: 'SALE25',
        voucherName: '25% Off Sale',
        discount: '25%',
        type: 'Discount',
        stock: '100',
        applicable: 'Applicable on selected sale items only.',
        validity: 'Valid until April 30, 2024'
    },
    {
        id: 'check3',
        voucherIcon: 'fas fa-gift',
        voucherCode: 'GIFT2024',
        voucherName: 'Free Gift',
        discount: 'Gift',
        type: 'Free Gift',
        stock: 'Unlimited',
        applicable: 'Applicable on all purchases over $100.',
        validity: 'Valid from May 1, 2024 to December 31, 2024'
    }
];

function getVoucherData() {
    return voucherData;
}
function showVoucher() {
    if (!voucherContent) {
        const voucherContainer = document.createElement('div');
        voucherContainer.classList.add('container', 'voucher-container', 'p-4');

        // Create Search Bar
        const searchVoucher = document.createElement('div');
        searchVoucher.classList.add('row', 'd-flex', 'align-items-center', 'rounded-3', 'p-3', 'mb-4', 'bg-white');
        voucherContainer.appendChild(searchVoucher);
        const col12 = document.createElement('div');
        col12.classList.add('col-12', 'd-flex', 'align-items-center');
        searchVoucher.appendChild(col12);

        const management = document.createElement('div');
        management.classList.add('col-4', 'd-flex', 'align-items-center', 'gap-2');
        col12.appendChild(management);
        const iconVoucher = document.createElement('i');
        iconVoucher.classList.add('fa-solid', 'fa-ticket', 'fa-2x', 'mb-4');
        management.appendChild(iconVoucher);
        const textVoucher = document.createElement('div');
        textVoucher.classList.add('d-flex', 'flex-column', 'ml-5');
        management.appendChild(textVoucher);
        const title = document.createElement('span');
        title.classList.add('fs-2');
        title.textContent = "Voucher Management";
        textVoucher.appendChild(title);
        const totalVoucher = document.createElement('span');
        totalVoucher.classList.add('text-secondary');
        function updateVoucherCount() {
            totalVoucher.textContent = voucherData.length + " vouchers";
        }
        textVoucher.appendChild(totalVoucher);

        const search = document.createElement('div');
        search.className = "col-6";
        col12.appendChild(search);
        const searchBox = document.createElement('div');
        searchBox.classList.add('search-box', 'd-flex', 'align-items-center', 'bg-w', 'rounded-3', 'px-2', 'mx-4', 'gap-3');
        search.appendChild(searchBox);
        const iconSearch = document.createElement('i');
        iconSearch.classList.add('fas', 'fa-search', 'icon', 'mx-1');
        searchBox.appendChild(iconSearch);
        const inputSearch = document.createElement('input');
        inputSearch.classList.add('bg-w', 'rounded-3', 'h-4', 'fs-6', 'w-100', 'border-0', 'outline-none');
        inputSearch.type = "search";
        inputSearch.placeholder = "Search";
        searchBox.appendChild(inputSearch);

        const addVoucherContainer = document.createElement('div');
        addVoucherContainer.className = "col-2 px-4";
        const addVoucherButton = document.createElement('button');
        addVoucherButton.className = "rounded-pill text-white bg-success py-2 px-3 d-flex align-items-center gap-2 border-0 outline-0";
        const iconAddVoucher = document.createElement('i');
        iconAddVoucher.className = "fas fa-plus-circle";
        const textAddButton = document.createElement('span');
        textAddButton.className = "mt-0";
        textAddButton.textContent = "Add voucher";
        addVoucherButton.appendChild(iconAddVoucher);
        addVoucherButton.appendChild(textAddButton);
        addVoucherContainer.appendChild(addVoucherButton);
        col12.appendChild(addVoucherContainer);

        const listVoucher = document.createElement('div');
        listVoucher.classList.add('list-voucher', 'row', 'gap-2');
        voucherContainer.appendChild(listVoucher);

        voucherData.forEach(voucher => {
            const voucherBox = createVoucherBox(voucher);
            listVoucher.appendChild(voucherBox);
        });

        function createVoucherBox(voucher) {
            const voucherBox = document.createElement('div');
            voucherBox.classList.add('voucher-box', 'rounded-3', 'bg-white', 'p-3', 'd-flex', 'align-items-center', 'gap-5');

            const checkboxDiv = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.classList.add('checkbox-voucher', 'form-check-input', 'mb-1');
            checkbox.type = 'checkbox';
            checkbox.id = voucher.id;
            checkbox.name = 'option1';
            checkbox.value = voucher.voucherId;
            checkbox.addEventListener('change', function () {
                displayButton(this);
            });
            checkboxDiv.appendChild(checkbox);

            const icon = document.createElement('i');
            icon.className = voucher.voucherIcon;

            const table = document.createElement('table');
            table.classList.add('voucher-info', 'w-100');
            const thead = document.createElement('thead');
            thead.classList.add('fs-075', 'text-secondary');
            const headerRow = document.createElement('tr');
            ['Voucher code', 'Voucher Name', 'Discount', 'Type', 'Stock'].forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);

            const tbody = document.createElement('tbody');
            const dataRow = document.createElement('tr');
            ['voucherCode', 'voucherName', 'discount', 'type', 'stock'].forEach(dataKey => {
                const td = document.createElement('td');
                td.textContent = voucher[dataKey];
                dataRow.appendChild(td);
            });
            tbody.appendChild(dataRow);

            table.appendChild(thead);
            table.appendChild(tbody);

            const buttonGroup = document.createElement('div');
            buttonGroup.classList.add('buttonGrp', 'd-none');

            const updateButton = document.createElement('button');
            updateButton.classList.add('btn-update', 'd-flex', 'align-items-center', 'gap-1');
            const updateIcon = document.createElement('i');
            updateIcon.classList.add('fa-solid', 'fa-pen-to-square');
            updateButton.appendChild(updateIcon);
            const textUpdate = document.createElement('span');
            textUpdate.textContent = 'Update';
            updateButton.appendChild(textUpdate);
            updateButton.addEventListener('click', function () {
                openPopup(voucher);
            });

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn-delete', 'd-flex', 'align-items-center', 'gap-1');
            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fa-regular', 'fa-trash-can');
            deleteButton.appendChild(deleteIcon);
            const textDelete = document.createElement('span');
            textDelete.textContent = 'Delete';
            deleteButton.appendChild(textDelete);

            buttonGroup.appendChild(updateButton);
            buttonGroup.appendChild(deleteButton);

            voucherBox.appendChild(checkboxDiv);
            voucherBox.appendChild(icon);
            voucherBox.appendChild(table);
            voucherBox.appendChild(buttonGroup);

            return voucherBox;
        }
        const ulPagination = document.createElement("ul");
        ulPagination.classList.add("pagination", "justify-content-end");
        ulPagination.style.margin = "20px 0";
        voucherContainer.appendChild(ulPagination);
        const liPrevious = document.createElement("li");
        liPrevious.classList.add("page-item");
        const aPrevious = document.createElement("a");
        aPrevious.classList.add("page-link");
        aPrevious.href = "#";
        aPrevious.textContent = "Previous";
        liPrevious.appendChild(aPrevious);
        ulPagination.appendChild(liPrevious);

        const liPage1 = document.createElement("li");
        liPage1.classList.add("page-item", "active");
        const aPage1 = document.createElement("a");
        aPage1.classList.add("page-link");
        aPage1.href = "#";
        aPage1.textContent = "1";
        liPage1.appendChild(aPage1);
        ulPagination.appendChild(liPage1);

        const liPage2 = document.createElement("li");
        liPage2.classList.add("page-item");
        const aPage2 = document.createElement("a");
        aPage2.classList.add("page-link");
        aPage2.href = "#";
        aPage2.textContent = "2";
        liPage2.appendChild(aPage2);
        ulPagination.appendChild(liPage2);

        const liPage3 = document.createElement("li");
        liPage3.classList.add("page-item");
        const aPage3 = document.createElement("a");
        aPage3.classList.add("page-link");
        aPage3.href = "#";
        aPage3.textContent = "3";
        liPage3.appendChild(aPage3);
        ulPagination.appendChild(liPage3);

        const liNext = document.createElement("li");
        liNext.classList.add("page-item");
        const aNext = document.createElement("a");
        aNext.classList.add("page-link");
        aNext.href = "#";
        aNext.textContent = "Next";
        liNext.appendChild(aNext);
        ulPagination.appendChild(liNext);


        function displayButton(checkbox) {
            var button = checkbox.closest('.voucher-box').querySelector('.buttonGrp');
            if (checkbox.checked) {
                button.classList.remove('d-none');
            } else {
                button.classList.add('d-none');
            }
        }

        // Function to create the popup
        function createPopup(voucher) {
            // Overlay
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.addEventListener('click', closePopup);

            // Popup
            const popup = document.createElement('div');
            popup.classList.add('voucher-popup');

            const popupContent = document.createElement('div');
            popupContent.classList.add('voucher-popup-content');

            // Close button
            const closeButton = document.createElement('span');
            closeButton.classList.add('close-popup', 'fs-2');
            closeButton.role = 'button';
            closeButton.textContent = '×';
            closeButton.addEventListener('click', closePopup);

            // Form
            const inforContainer = document.createElement('div');
            inforContainer.classList.add('col', 'd-flex', 'align-items-center', 'bg-w', 'rounded-3');

            const rightContent = document.createElement('div');
            rightContent.classList.add('right-content', 'p-4');
            inforContainer.appendChild(rightContent);

            // Name & Discount
            const row1Container = document.createElement('div')
            row1Container.classList.add('voucher-data', 'specifications');
            // Name
            const nameContainer = document.createElement('div');
            const nameLabel = document.createElement('label');
            nameLabel.textContent = "Name:";
            const inputName = document.createElement('input');
            inputName.classList.add('form-control');
            inputName.value = voucher.voucherName;
            nameContainer.appendChild(nameLabel);
            nameContainer.appendChild(inputName);
            row1Container.appendChild(nameContainer);
            rightContent.appendChild(row1Container);

            // Discount
            const discountContainer = document.createElement('div');
            const discountLabel = document.createElement('label');
            discountLabel.textContent = "Discount:";
            const inputDiscount = document.createElement('input');
            inputDiscount.classList.add('form-control');
            inputDiscount.value = voucher.discount;
            discountContainer.appendChild(discountLabel);
            discountContainer.appendChild(inputDiscount);
            row1Container.appendChild(discountContainer);

            // Code and type
            const row2Container = document.createElement('div')
            row2Container.classList.add('voucher-data', 'specifications');
            // Code
            const codeContainer = document.createElement('div');
            const codeLabel = document.createElement('label');
            codeLabel.textContent = "Voucher code:";
            const inputCode = document.createElement('input');
            inputCode.classList.add('form-control');
            inputCode.value = voucher.voucherCode;
            codeContainer.appendChild(codeLabel);
            codeContainer.appendChild(inputCode);
            row2Container.appendChild(codeContainer);
            rightContent.appendChild(row2Container);

            // Type
            const typeContainer = document.createElement('div');
            const typeLabel = document.createElement('label');
            typeLabel.textContent = "Voucher type:";
            const inputType = document.createElement('input');
            inputType.classList.add('form-control');
            inputType.value = voucher.type;
            typeContainer.appendChild(typeLabel);
            typeContainer.appendChild(inputType);
            row2Container.appendChild(typeContainer);

            // Icon & stock
            const row3Container = document.createElement('div')
            row3Container.classList.add('voucher-data', 'specifications');
            // Icon
            const iconContainer = document.createElement('div');
            const iconLabel = document.createElement('label');
            iconLabel.textContent = "Voucher icon:";
            const inputIcon = document.createElement('input');
            inputIcon.classList.add('form-control');
            inputIcon.value = voucher.voucherIcon;
            iconContainer.appendChild(iconLabel);
            iconContainer.appendChild(inputIcon);
            row3Container.appendChild(iconContainer);
            rightContent.appendChild(row3Container);

            // Stock
            const stockContainer = document.createElement('div');
            const stockLabel = document.createElement('label');
            stockLabel.textContent = "Stock:";
            const inputStock = document.createElement('input');
            inputStock.classList.add('form-control');
            inputStock.value = voucher.stock;
            stockContainer.appendChild(stockLabel);
            stockContainer.appendChild(inputStock);
            row3Container.appendChild(stockContainer);

            // Validity
            const validityContainer = document.createElement('div');
            validityContainer.classList.add('voucher-data');
            const validityLabel = document.createElement('label');
            validityLabel.textContent = "Validity:";
            const inputValidity = document.createElement('input');
            inputValidity.classList.add('form-control');
            inputValidity.value = voucher.validity;
            validityContainer.appendChild(validityLabel);
            validityContainer.appendChild(inputValidity);
            rightContent.appendChild(validityContainer);

            // Applicable
            const applicableContainer = document.createElement('div');
            applicableContainer.classList.add('voucher-data');
            const applicableLabel = document.createElement('label');
            applicableLabel.textContent = "Applicable to:";
            const inputApplicable = document.createElement('input');
            inputApplicable.classList.add('form-control');
            inputApplicable.value = voucher.applicable;
            applicableContainer.appendChild(applicableLabel);
            applicableContainer.appendChild(inputApplicable);
            rightContent.appendChild(applicableContainer);
            // Update & Delete button
            const buttonGroup = document.createElement('buttonGrp');
            buttonGroup.classList.add('buttonGrp');

            rightContent.appendChild(buttonGroup);
            const updateButton = document.createElement('button');
            updateButton.classList.add('btn-update');
            const iconUpdate = document.createElement('i')
            iconUpdate.classList.add('fa-solid', 'fa-pen-to-square')
            const textUpdate = document.createElement('span')
            textUpdate.textContent = "Update";
            updateButton.appendChild(iconUpdate);
            updateButton.appendChild(textUpdate);
            buttonGroup.appendChild(updateButton);
            updateButton.addEventListener('click', function (event) {
                event.preventDefault();
                // Handle form submission here
                closePopup();
            });
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn-delete');
            const iconDelete = document.createElement('i')
            iconDelete.classList.add('fa-regular', 'fa-trash-can');
            const textDelete = document.createElement('span')
            textDelete.textContent = "Delete";
            deleteButton.appendChild(iconDelete);
            deleteButton.appendChild(textDelete);
            buttonGroup.appendChild(deleteButton);
            // Form


            const formHTML = '<form th:action="@{/admin/create-user}" class="border border-3" th:object="${user}" method="post">' +
                '</form>';
            const tempContainer = document.createElement('div');

            // Set the innerHTML of the container to the form HTML
            tempContainer.innerHTML = formHTML;

            // Extract the form element from the container
            const form = tempContainer.firstChild;

            form.id = 'updateForm';
            document.body.appendChild(form);
            // Add elements to popupContent
            popupContent.appendChild(closeButton);
            popupContent.appendChild(inforContainer);

            // Add popupContent to popup
            popup.appendChild(popupContent);

            // Add overlay and popup to body
            document.body.appendChild(overlay);
            document.body.appendChild(popup);
        }
        updateVoucherCount();

        addVoucherButton.addEventListener("click", function () {
            const newVoucher = {
                id: 'check1',
                voucherIcon: 'new icon',
                voucherCode: 'new code',
                voucherName: 'new name',
                discount: 'new discount',
                type: 'new type',
                stock: 'new stock',
                applicable: 'new applicable',
                validity: 'new validity'
            };
            voucherData.push(newVoucher);

            // Cập nhật số lượng sản phẩm
            updateVoucherCount();
            createPopup(newVoucher);
            createVoucherBox(newVoucher);
        });
        // Function to open the popup
        function openPopup(voucher) {
            createPopup(voucher);
        }

        // Function to close the popup
        function closePopup() {
            const overlay = document.querySelector('.overlay');
            const popup = document.querySelector('.voucher-popup');
            if (overlay && popup) {
                overlay.remove();
                popup.remove();
            }
        }

        function displayButton(checkbox) {
            var button = checkbox.closest('.voucher-box').querySelector('.buttonGrp');
            if (checkbox.checked) {
                button.classList.remove('d-none');
            } else {
                button.classList.add('d-none');
            }
        }
        voucherContent = voucherContainer;
    }
    return voucherContent;
}