var productContent = null;
var currentPage = 1; 
var productsPerPage = 7; 
function showProduct(){
    if(!productContent){
        const productContainer = document.createElement('div');
        productContainer.classList.add('container', 'product-container', 'p-4');

        // Create Search Bar
        const searchProduct = document.createElement('div');
        searchProduct.classList.add('row', 'd-flex', 'align-items-center', 'rounded-3', 'p-3', 'mb-4', 'bg-white');
        productContainer.appendChild(searchProduct);
        const col12 = document.createElement('div');
        col12.classList.add('col-12', 'd-flex', 'align-items-center');
        searchProduct.appendChild(col12);
        
        const management = document.createElement('div');
        management.classList.add('col-4', 'd-flex', 'align-items-center', 'gap-2');
        col12.appendChild(management);
        const iconProduct = document.createElement('i');
        iconProduct.classList.add('fa-solid', 'fa-cart-shopping', 'fa-2x', 'mb-4');
        management.appendChild(iconProduct);
        const textProduct = document.createElement('div');
        textProduct.classList.add('d-flex', 'flex-column', 'ml-5');
        management.appendChild(textProduct);
        const title = document.createElement('span');
        title.classList.add('fs-2');
        title.textContent = "Product Management";
        textProduct.appendChild(title);
        const totalProduct = document.createElement('span');
        totalProduct.classList.add('text-secondary');
        totalProduct.textContent = "1201 products";
        textProduct.appendChild(totalProduct);

        const search = document.createElement('div');
        search.classList.add('col-8');
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

        const listProduct = document.createElement('div');
        listProduct.classList.add('row', 'gap-2');
        productContainer.appendChild(listProduct);
        
        const productData = [
            {
                id: 'check1',
                imgSrc: './assets/images/PhamMinh.png',
                productId: 'G100002',
                productName: 'Basic Glasses',
                price: '$450',
                type: 'Fashion Glasses',
                origin: 'China',
                stock: '100'
            },
            {
                id: 'check1',
                imgSrc: './assets/images/PhamMinh.png',
                productId: 'G100002',
                productName: 'Basic Glasses 1',
                price: '$450',
                type: 'Fashion Glasses',
                origin: 'China',
                stock: '100'
            },
            {
                id: 'check1',
                imgSrc: './assets/images/PhamMinh.png',
                productId: 'G100002',
                productName: 'Basic Glasses',
                price: '$450',
                type: 'Fashion Glasses',
                origin: 'China',
                stock: '100'
            },
            {
                id: 'check1',
                imgSrc: './assets/images/PhamMinh.png',
                productId: 'G100002',
                productName: 'Basic Glasses',
                price: '$450',
                type: 'Fashion Glasses',
                origin: 'China',
                stock: '100'
            },
            {
                id: 'check1',
                imgSrc: './assets/images/PhamMinh.png',
                productId: 'G100002',
                productName: 'Basic Glasses',
                price: '$450',
                type: 'Fashion Glasses',
                origin: 'China',
                stock: '100'
            },
            {
                id: 'check1',
                imgSrc: './assets/images/PhamMinh.png',
                productId: 'G100002',
                productName: 'Basic Glasses',
                price: '$450',
                type: 'Fashion Glasses',
                origin: 'China',
                stock: '100'
            },
            {
                id: 'check1',
                imgSrc: './assets/images/PhamMinh.png',
                productId: 'G100002',
                productName: 'Basic Glasses',
                price: '$450',
                type: 'Fashion Glasses',
                origin: 'China',
                stock: '100'
            },
        ];
        productData.forEach(product => {
            const productBox = createProductBox(product);
            listProduct.appendChild(productBox);
        });

        function createProductBox(product) {
            const productBox = document.createElement('div');
            productBox.classList.add('product-box', 'rounded-3', 'bg-white', 'p-3', 'd-flex', 'align-items-center', 'gap-5');
        
            const checkboxDiv = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.classList.add('checkbox-voucher', 'form-check-input', 'mb-1');
            checkbox.type = 'checkbox';
            checkbox.id = product.id;
            checkbox.name = 'option1';
            checkbox.value = product.productId;
            checkbox.addEventListener('change', function() {
                displayButton(this);
            });
            checkboxDiv.appendChild(checkbox);
        
            const img = document.createElement('img');
            img.src = product.imgSrc; 
            img.classList.add('img-fluid');
        
            const table = document.createElement('table');
            table.classList.add('product-info', 'w-100');
            const thead = document.createElement('thead');
            thead.classList.add('fs-075', 'text-secondary');
            const headerRow = document.createElement('tr');
            ['Product ID', 'Product Name', 'Price', 'Type', 'Origin', 'Stock'].forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            
            const tbody = document.createElement('tbody');
            const dataRow = document.createElement('tr');
            ['productId', 'productName', 'price', 'type', 'origin', 'stock'].forEach(dataKey => {
                const td = document.createElement('td');
                td.textContent = product[dataKey];
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
            updateButton.addEventListener('click', function() {
                openPopup(product);
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
        
            productBox.appendChild(checkboxDiv);
            productBox.appendChild(img);
            productBox.appendChild(table);
            productBox.appendChild(buttonGroup);
        
            return productBox;
        }
        const ulPagination = document.createElement("ul");
        ulPagination.classList.add("pagination", "justify-content-end");
        ulPagination.style.margin = "20px 0";
        productContainer.appendChild(ulPagination);
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
            var button = checkbox.closest('.product-box').querySelector('.buttonGrp');
            if (checkbox.checked) {
                button.classList.remove('d-none');
            } else {
                button.classList.add('d-none');
            }
        }
        
        // Function to create the popup
        function createPopup(product) {
            // Overlay
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.addEventListener('click', closePopup);

            // Popup
            const popup = document.createElement('div');
            popup.classList.add('popup');

            const popupContent = document.createElement('div');
            popupContent.classList.add('popup-content');

            // Close button
            const closeButton = document.createElement('span');
            closeButton.classList.add('close-popup');
            closeButton.role = 'button';
            closeButton.textContent = '×';
            closeButton.addEventListener('click', closePopup);

            // Title
            const title = document.createElement('h2');
            title.textContent = 'Update Product';

            // Form
            const form = document.createElement('form');
            form.id = 'updateForm';

            const productNameLabel = document.createElement('label');
            productNameLabel.textContent = 'Product Name:';
            const productNameInput = document.createElement('input');
            productNameInput.type = 'text';
            productNameInput.id = 'productName';
            productNameInput.name = 'productName';
            productNameInput.value = product.productName;
            productNameInput.required = true;

            const priceLabel = document.createElement('label');
            priceLabel.textContent = 'Price:';
            const priceInput = document.createElement('input');
            priceInput.type = 'number';
            priceInput.id = 'price';
            priceInput.name = 'price';
            priceInput.value = product.price;
            priceInput.required = true;

            const typeLabel = document.createElement('label');
            typeLabel.textContent = 'Type:';
            const typeInput = document.createElement('input');
            typeInput.type = 'text';
            typeInput.id = 'type';
            typeInput.name = 'type';
            typeInput.value = product.type;
            typeInput.required = true;

            // Add form elements to the form
            form.appendChild(productNameLabel);
            form.appendChild(productNameInput);
            form.appendChild(priceLabel);
            form.appendChild(priceInput);
            form.appendChild(typeLabel);
            form.appendChild(typeInput);

            // Submit button
            const submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.classList.add('btn', 'btn-primary');
            submitButton.textContent = 'Update';
            submitButton.addEventListener('click', function(event) {
                event.preventDefault();
                // Handle form submission here
                closePopup();
            });

            // Add elements to popupContent
            popupContent.appendChild(closeButton);
            popupContent.appendChild(title);
            popupContent.appendChild(form);
            popupContent.appendChild(submitButton);

            // Add popupContent to popup
            popup.appendChild(popupContent);

            // Add overlay and popup to body
            document.body.appendChild(overlay);
            document.body.appendChild(popup);
        }

        // Function to open the popup
        function openPopup(product) {
            createPopup(product);
        }

        // Function to close the popup
        function closePopup() {
            const overlay = document.querySelector('.overlay');
            const popup = document.querySelector('.popup');
            if (overlay && popup) {
                overlay.remove();
                popup.remove();
            }
        }
        
        productContent = productContainer;
    }
    return productContent;
}