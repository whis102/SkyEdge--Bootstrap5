// var productContent = null;
// var currentPage = 1; 
// var productsPerPage = 7; 

const productData = [
    {
        id: 'check1',
        imgSrc: './assets/images/Huan.png',
        productId: 'G100002',
        productName: 'Basic Glasses',
        price: '$450',
        stock: '100',
        description: 'Discover the MM114 01 glasses from the second collaborative collection between Gentle Monster and Maison Margiela.',
        country: 'Viet Nam',
        manufaturer: 'IICOMBINED CO.,LTA',
        category: 'Sport',
        discount: '15%',
        front: '149.9mm',
        side: '149.9mm',
        width: '149.9mm',
        height: '149.9mm'
    },
    {
        id: 'check2',
        imgSrc: './assets/images/Long.png',
        productId: 'G100003',
        productName: 'Elegant Shades',
        price: '$320',
        stock: '50',
        description: 'Classic and elegant, these shades provide UV protection and style in one.',
        country: 'Italy',
        manufaturer: 'Sunshine Co.',
        category: 'Luxury',
        discount: '20%',
        front: '140mm',
        side: '135mm',
        width: '130mm',
        height: '50mm'
    },
    {
        id: 'check3',
        imgSrc: './assets/images/Cong.png',
        productId: 'G100004',
        productName: 'Active Vision',
        price: '$199',
        stock: '80',
        description: 'Engineered for sports enthusiasts, these glasses provide durability and clarity during any activity.',
        country: 'Germany',
        manufaturer: 'Active Gear Co.',
        category: 'Sport',
        discount: '10%',
        front: '135mm',
        side: '130mm',
        width: '140mm',
        height: '45mm'
    },
    {
        id: 'check4',
        imgSrc: './assets/images/PhamMinh.png',
        productId: 'G100005',
        productName: 'Casual Style',
        price: '$99',
        stock: '120',
        description: 'Unleash your casual style with these comfortable and versatile glasses for everyday wear.',
        country: 'USA',
        manufaturer: 'Everyday Optics',
        category: 'Popular',
        discount: '5%',
        front: '145mm',
        side: '135mm',
        width: '135mm',
        height: '50mm'
    },
    {
        id: 'check5',
        imgSrc: './assets/images/AnhMinh.png',
        productId: 'G100006',
        productName: 'Retro Vibes',
        price: '$280',
        stock: '60',
        description: 'Capture the retro vibes with these vintage-inspired glasses, perfect for a nostalgic look.',
        country: 'France',
        manufaturer: 'Retro Specs Inc.',
        category: "Men's Glasses",
        discount: '15%',
        front: '140mm',
        side: '145mm',
        width: '135mm',
        height: '45mm'
    },
    {
        id: 'check6',
        imgSrc: './assets/images/Huan.png',
        productId: 'G100007',
        productName: 'Chic Frames',
        price: '$380',
        stock: '70',
        description: 'Make a fashion statement with these chic frames, designed for the trendsetters.',
        country: 'Spain',
        manufaturer: 'Fashion Frames Co.',
        category: "Women's Glasses",
        discount: '25%',
        front: '135mm',
        side: '140mm',
        width: '140mm',
        height: '50mm'
    },
    {
        id: 'check7',
        imgSrc: './assets/images/Huan.png',
        productId: 'G100008',
        productName: 'Active Shield',
        price: '$220',
        stock: '90',
        description: 'For active lifestyles, these sport sunglasses provide both protection and style during outdoor activities.',
        country: 'Australia',
        manufaturer: 'Outdoor Optics',
        category: 'Sunglasses',
        discount: '12%',
        front: '140mm',
        side: '135mm',
        width: '145mm',
        height: '55mm'
    }
];

function getProductData() {
    return productData;
}
const totalProduct = document.getElementById('total-product');
totalProduct.textContent = productData.length + " products";

const checkbox = document.getElementById('checkbox-product-input');
checkbox.addEventListener('change', function() {
    displayButton(this);
});

const productBox = document.querySelector('.product-box');

const img = productBox.querySelector('.img-product');
img.src = productData.imgSrc;

const dataRow = productBox.querySelector('#tr-product');
const tdElements = dataRow.querySelectorAll('td');
const productInfo = [productData.productId, productData.productName, productData.price, productData.category, productData.country, productData.stock];
tdElements.forEach((td, index) => {
    td.textContent = productInfo[index];
});

const updateButton = productBox.querySelector('#btn-update-product');
updateButton.addEventListener('click', function() {
    openPopup(productData);
});

function displayButton(checkbox) {
    var button = checkbox.closest('.product-box').querySelector('.buttonGrp');
    if (checkbox.checked) {
        button.classList.remove('d-none');
    } else {
        button.classList.add('d-none');
    }
}

// // Function to create the popup
// function createPopup(product) {
//     // Overlay
//     const overlay = document.createElement('div');
//     overlay.classList.add('overlay');
//     overlay.addEventListener('click', closePopup);

//     // Popup
//     const popup = document.createElement('div');
//     popup.classList.add('product-popup');

//     const popupContent = document.createElement('div');
//     popupContent.classList.add('product-popup-content');

//     // Close button
//     const closeButton = document.createElement('span');
//     closeButton.classList.add('close-popup','fs-2');
//     closeButton.role = 'button';
//     closeButton.textContent = '×';
//     closeButton.addEventListener('click', closePopup);

//     // Form
//     const inforContainer = document.createElement('div');
//     inforContainer.classList.add('col', 'd-flex', 'align-items-center', 'bg-w', 'rounded-3');
//     const leftContent = document.createElement('div');
//     leftContent.classList.add('col-6', 'left-content', 'p-4');
//     inforContainer.appendChild(leftContent);

//     const productImage = document.createElement('div');
//     productImage.classList.add('product-image');
//     const textImage = document.createElement('span');
//     textImage.textContent = "Product Images";
//     const imageContainer = document.createElement('div');
//     imageContainer.classList.add('image-container', 'd-flex', 'align-items-center', 'mt-2', 'gap-4');
//     const image1Container = document.createElement('div');
//     image1Container.classList.add('img-product-details');
//     const image1 = document.createElement('img');
//     image1.src = product.imgSrc;
//     const image2Container = document.createElement('div');
//     image2Container.classList.add('img-product-details', 'add-more-image');
//     const image2 = document.createElement('button');
//     image2.classList.add('rounded-pill', 'fs-075');
//     image2.textContent = "add new image";
//     const image3Container = document.createElement('div');
//     image3Container.classList.add('img-product-details', 'add-more-image');
//     const image3 = document.createElement('button');
//     image3.classList.add('rounded-pill', 'fs-075');
//     image3.textContent = "add new image";
//     productImage.appendChild(textImage);
//     productImage.appendChild(imageContainer);
//     image1Container.appendChild(image1);
//     image2Container.appendChild(image2);
//     image3Container.appendChild(image3);
//     imageContainer.appendChild(image1Container);
//     imageContainer.appendChild(image2Container);
//     imageContainer.appendChild(image3Container);
//     leftContent.appendChild(productImage);
//     // Product Name
//     const nameContainer = document.createElement('div');
//     nameContainer.classList.add('product-data');
//     const nameLabel = document.createElement('label');
//     nameLabel.textContent = "Product name:";
//     const inputName = document.createElement('input');
//     inputName.classList.add('form-control');
//     inputName.value = product.productName;
//     nameContainer.appendChild(nameLabel);
//     nameContainer.appendChild(inputName);
//     leftContent.appendChild(nameContainer);
//     // Product Description
//     const descriptionContainer = document.createElement('div');
//     descriptionContainer.classList.add('product-data');
//     const descriptionLabel = document.createElement('label');
//     descriptionLabel.textContent = "Product description:";
//     const textareaDescription = document.createElement('textarea');
//     textareaDescription.classList.add('form-control');
//     textareaDescription.rows = "4";
//     textareaDescription.value = product.description;

//     descriptionContainer.appendChild(descriptionLabel);
//     descriptionContainer.appendChild(textareaDescription);
//     leftContent.appendChild(descriptionContainer);
    
//     // Country of Manufaturer
//     const countryContainer = document.createElement('div');
//     countryContainer.classList.add('product-data');
//     const countryLabel = document.createElement('label');
//     countryLabel.textContent = "Country of manufaturer:";
//     const inputCountry = document.createElement('input');
//     inputCountry.classList.add('form-control');
//     inputCountry.value = product.country;
//     countryContainer.appendChild(countryLabel);
//     countryContainer.appendChild(inputCountry);
//     leftContent.appendChild(countryContainer);

//     // Manufaturer & Importer
//     const manuContainer = document.createElement('div');
//     manuContainer.classList.add('product-data');
//     const manuLabel = document.createElement('label');
//     manuLabel.textContent = "Manufaturer&Importer:";
//     const inputManu = document.createElement('input');
//     inputManu.classList.add('form-control');
//     inputManu.value = product.manufaturer;
//     manuContainer.appendChild(manuLabel);
//     manuContainer.appendChild(inputManu);
//     leftContent.appendChild(manuContainer);
    
//     const rightContent = document.createElement('div');
//     rightContent.classList.add('col-6', 'right-content', 'p-4');
//     inforContainer.appendChild(rightContent);

//     const categoryContainer = document.createElement("div");
//     categoryContainer.classList.add('product-data');
//     rightContent.appendChild(categoryContainer);
//     const categoryLabel = document.createElement("label");
//     categoryLabel.textContent = "Category:";
//     categoryContainer.appendChild(categoryLabel);
//     const selectCategory = document.createElement("select");
//     selectCategory.className = "form-select mt-2";
//     const categories = [
//         "Luxury",
//         "Sport",
//         "Men's Glasses",
//         "Women's Glasses",
//         "Popular",
//         "Gym",
//         "Sunglasses"
//     ];
//     categories.forEach(function(category) {
//         const option = document.createElement("option");
//         option.textContent = category;
//         selectCategory.appendChild(option);
//     });
//     categoryContainer.appendChild(selectCategory);
//     selectCategory.addEventListener("change", function() {
//         const selectedOption = selectCategory.options[selectCategory.selectedIndex].text;
//         console.log("Selected Category:", selectedOption);
//     });
//     // Price & Discount
//     const priceDiscountContainer = document.createElement('div')
//     priceDiscountContainer.classList.add('product-data', 'specifications');
//     // Base pricing
//     const priceContainer = document.createElement('div');
//     const priceLabel = document.createElement('label');
//     priceLabel.textContent = "Base pricing:";
//     const inputPrice = document.createElement('input');
//     inputPrice.classList.add('form-control');
//     inputPrice.value = product.price;
//     priceContainer.appendChild(priceLabel);
//     priceContainer.appendChild(inputPrice);
//     priceDiscountContainer.appendChild(priceContainer);
//     rightContent.appendChild(priceDiscountContainer);

//     // Discount
//     const discountContainer = document.createElement('div');
//     const discountLabel = document.createElement('label');
//     discountLabel.textContent = "Discount:";
//     const inputDiscount = document.createElement('input');
//     inputDiscount.classList.add('form-control');
//     inputDiscount.value = product.discount;
//     discountContainer.appendChild(discountLabel);
//     discountContainer.appendChild(inputDiscount);
//     priceDiscountContainer.appendChild(discountContainer);

//     // Frame
//     const frameContainer = document.createElement('div')
//     frameContainer.classList.add('product-data', 'specifications');
//     // Frame front
//     const frontContainer = document.createElement('div');
//     const frontLabel = document.createElement('label');
//     frontLabel.textContent = "Frame Front:";
//     const inputFront = document.createElement('input');
//     inputFront.classList.add('form-control');
//     inputFront.value = product.front;
//     frontContainer.appendChild(frontLabel);
//     frontContainer.appendChild(inputFront);
//     frameContainer.appendChild(frontContainer);
//     rightContent.appendChild(frameContainer);

//     // Frame side
//     const sideContainer = document.createElement('div');
//     const sideLabel = document.createElement('label');
//     sideLabel.textContent = "Frame Side:";
//     const inputSide = document.createElement('input');
//     inputSide.classList.add('form-control');
//     inputSide.value = product.side;
//     sideContainer.appendChild(sideLabel);
//     sideContainer.appendChild(inputSide);
//     frameContainer.appendChild(sideContainer);
    
//     // Lens
//     const lensContainer = document.createElement('div')
//     lensContainer.classList.add('product-data', 'specifications');
//     // Lens width
//     const widthContainer = document.createElement('div');
//     const widthLabel = document.createElement('label');
//     widthLabel.textContent = "Lens Width:";
//     const inputWidth= document.createElement('input');
//     inputWidth.classList.add('form-control');
//     inputWidth.value = product.width;
//     widthContainer.appendChild(widthLabel);
//     widthContainer.appendChild(inputWidth);
//     lensContainer.appendChild(widthContainer);
//     rightContent.appendChild(lensContainer);

//     // Lens height
//     const heightContainer = document.createElement('div');
//     const heightLabel = document.createElement('label');
//     heightLabel.textContent = "Lens Height:";
//     const inputHeight = document.createElement('input');
//     inputHeight.classList.add('form-control');
//     inputHeight.value = product.height;
//     heightContainer.appendChild(heightLabel);
//     heightContainer.appendChild(inputHeight);
//     lensContainer.appendChild(heightContainer);

//     // Stock
//     const stockContainer = document.createElement('div');
//     stockContainer.classList.add('product-data');
//     const stockLabel = document.createElement('label');
//     stockLabel.textContent = "Stock:";
//     const inputStock = document.createElement('input');
//     inputStock.classList.add('form-control');
//     inputStock.value = product.stock;
//     stockContainer.appendChild(stockLabel);
//     stockContainer.appendChild(inputStock);
//     rightContent.appendChild(stockContainer);

//     // Update & Delete button
//     const buttonGroup = document.createElement('buttonGrp');
//     buttonGroup.classList.add('buttonGrp');
    
//     rightContent.appendChild(buttonGroup);
//     const updateButton = document.createElement('button');
//     updateButton.classList.add('btn-update');
//     const iconUpdate = document.createElement('i')
//     iconUpdate.classList.add('fa-solid', 'fa-pen-to-square')
//     const textUpdate = document.createElement('span')
//     textUpdate.textContent = "Update";
//     updateButton.appendChild(iconUpdate);
//     updateButton.appendChild(textUpdate);
//     buttonGroup.appendChild(updateButton);
//     updateButton.addEventListener('click', function(event) {
//         event.preventDefault();
//         // Handle form submission here
//         closePopup();
//     });
//     const deleteButton = document.createElement('button');
//     deleteButton.classList.add('btn-delete');
//     const iconDelete = document.createElement('i')
//     iconDelete.classList.add('fa-regular', 'fa-trash-can');
//     const textDelete = document.createElement('span')
//     textDelete.textContent = "Delete";
//     deleteButton.appendChild(iconDelete);
//     deleteButton.appendChild(textDelete);
//     buttonGroup.appendChild(deleteButton);
//     // Form
//     const form = document.createElement('form');
//     form.id = 'updateForm';

//     // Add elements to popupContent
//     popupContent.appendChild(closeButton);
//     popupContent.appendChild(inforContainer);

//     // Add popupContent to popup
//     popup.appendChild(popupContent);

//     // Add overlay and popup to body
//     document.body.appendChild(overlay);
//     document.body.appendChild(popup);
// }
// function openPopup(product) {
//     createPopup(product);
// }

// Function to close the popup
// function closePopup() {
//     const overlay = document.querySelector('.overlay');
//     const popup = document.querySelector('.product-popup');
//     if (overlay && popup) {
//         overlay.remove();
//         popup.remove();
//     }
// }
function openPopup() {
    // Display the popup
    document.querySelector('.product-popup').classList.remove('d-none');
    document.querySelector('.overlay').classList.remove('d-none');
}

// Function to close the popup
function closePopup() {
    // Hide the popup
    document.querySelector('.product-popup').classList.add('d-none');
    document.querySelector('.overlay').classList.add('d-none');
}