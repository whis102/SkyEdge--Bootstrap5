const itemsContainer = document.createElement('div')
itemsContainer.className = "d-flex flex-wrap gap-3";
const productData = [
    {
        imageSrc: './assets/images/category_img.jpg',
        title: 'Basic Glasses',
        description: 'A simple-looking eyeglasses which suits everyone',
        review: '40',
        price: {
            amount: 90.99,
            currency: '$'
        }
    },
    {
        imageSrc: './assets/images/category_img.jpg',
        title: 'Basic Glasses',
        description: 'A simple-looking eyeglasses which suits everyone',
        review: '40',
        price: {
            amount: 90.99,
            currency: '$'
        }
    },
    {
        imageSrc: './assets/images/category_img.jpg',
        title: 'Basic Glasses',
        description: 'A simple-looking eyeglasses which suits everyone',
        review: '40',
        price: {
            amount: 90.99,
            currency: '$'
        }
    },
    {
        imageSrc: './assets/images/category_img.jpg',
        title: 'Basic Glasses',
        description: 'A simple-looking eyeglasses which suits everyone',
        review: '40',
        price: {
            amount: 90.99,
            currency: '$'
        }
    },
    {
        imageSrc: './assets/images/category_img.jpg',
        title: 'Basic Glasses',
        description: 'A simple-looking eyeglasses which suits everyone',
        review: '40',
        price: {
            amount: 90.99,
            currency: '$'
        }
    },
    {
        imageSrc: './assets/images/category_img.jpg',
        title: 'Basic Glasses',
        description: 'A simple-looking eyeglasses which suits everyone',
        review: '40',
        price: {
            amount: 90.99,
            currency: '$'
        }
    },
];
productData.forEach(product => {
    const cardItem = createCard(product);
    itemsContainer.appendChild(cardItem);
});
function createCard(data) {
    const cardItem = document.createElement('div');
    cardItem.classList.add('card', 'mt-4', 'mt-2');
    cardItem.style.width = '18rem';
    cardItem.style.height = '34rem';

    const cardImageContainer = document.createElement('div');
    cardImageContainer.classList.add('position-relative');

    const cardImage = document.createElement('img');
    cardImage.src = data.imageSrc;
    cardImage.classList.add('card-img-top', 'img');
    cardImage.alt = '...';

    const cardBtn = document.createElement('div');
    cardBtn.className = "card-btn position-absolute top-0 w-100 h-100 justify-content-center d-flex align-items-center gap-2";

    ['fa-heart', 'fa-eye', 'fa-cart-plus'].forEach(iconClass => {
        const btn = document.createElement('div');
        const link = document.createElement('a');
        link.classList.add('btn2', 'btn', 'btn-success', 'text-white', 'mt-2');
        link.href = '/product-details/1';
        const icon = document.createElement('i');
        icon.className = "fas";
        icon.classList.add(iconClass);
        link.appendChild(icon);
        btn.appendChild(link);
        cardBtn.appendChild(btn);
    });
    cardImageContainer.appendChild(cardImage);
    cardItem.appendChild(cardImageContainer);

    cardImageContainer.appendChild(cardBtn);
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const rateAndPriceContainer = document.createElement('div');
    rateAndPriceContainer.className = "list-unstyled d-flex justify-content-between";
    cardBody.appendChild(rateAndPriceContainer);
    const ratingList = document.createElement('div');
    ratingList.className = "a";

    for (let j = 0; j < 5; j++) {
        const starIcon = document.createElement('i');
        starIcon.className = "text-warning fa fa-star";
        ratingList.appendChild(starIcon);
    }

    rateAndPriceContainer.appendChild(ratingList);
    const priceItem = document.createElement('span');
    priceItem.className = "text-muted text-right";
    priceItem.textContent = data.price.currency + data.price.amount;
    rateAndPriceContainer.appendChild(priceItem);

    const titleLink = document.createElement('a');
    titleLink.href = '/product-details';
    titleLink.classList.add('h3', 'text-decoration-none', 'text-dark');
    titleLink.textContent = data.title;

    const description = document.createElement('p');
    description.classList.add('card-text', 'pt-1');
    description.textContent = data.description;

    const reviewText = document.createElement('p');
    reviewText.classList.add('text-muted');
    reviewText.textContent = "Reviews: " + data.review;

    cardBody.appendChild(titleLink);
    cardBody.appendChild(description);
    cardBody.appendChild(reviewText);

    cardItem.appendChild(cardBody);

    itemsContainer.appendChild(cardItem);
    return cardItem;
}
document.getElementById("itemsContainer").appendChild(itemsContainer);

// Pages, navigate pages
const totalPages = 3;
const currentPage = 1;

const paginationElement = document.getElementById('pagination');

const previousButton = document.createElement('li');
previousButton.classList.add('page-item');
previousButton.innerHTML = `<a class="page-link" href="#">Previous</a>`;
paginationElement.appendChild(previousButton);

for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement('li');
    pageItem.classList.add('page-item');
    if (i === currentPage) {
        pageItem.classList.add('active');
    }
    pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    paginationElement.appendChild(pageItem);
}

const nextButton = document.createElement('li');
nextButton.classList.add('page-item');
nextButton.innerHTML = `<a class="page-link" href="#">Next</a>`;
paginationElement.appendChild(nextButton);