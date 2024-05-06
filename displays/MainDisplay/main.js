// Top Nav
const topNav = document.createElement('div');
topNav.classList.add('container', 'text-light');

// Contact information
const createContactInfo = (email, phone) => {
    const contactDiv = document.createElement('div');

    const emailLink = document.createElement('a');
    emailLink.classList.add('navbar-sm-brand', 'text-light', 'text-decoration-none');
    emailLink.href = `mailto:${email}`;
    emailLink.innerHTML = `<i class="fa-solid fa-envelope"></i> ${email}`;
    contactDiv.appendChild(emailLink);

    const phoneLink = document.createElement('a');
    phoneLink.classList.add('navbar-sm-brand', 'text-light', 'text-decoration-none');
    phoneLink.href = `tel:${phone}`;
    phoneLink.innerHTML = `<i class="fa-solid fa-phone"></i> ${phone}`;
    contactDiv.appendChild(phoneLink);

    return contactDiv;
};

// Social icons
const createSocialIcons = (socials) => {
    const iconDiv = document.createElement('div');
    socials.forEach(social => {
        const socialLink = document.createElement('a');
        socialLink.href = social.link;
        socialLink.classList.add('text-light', 'text-decoration-none');
        socialLink.target = '_blank';

        const socialIcon = document.createElement('i');
        socialIcon.classList.add('fab', social.icon, 'fa-sm', 'fa-fw', 'me-2');

        socialLink.appendChild(socialIcon);
        iconDiv.appendChild(socialLink);
    });
    return iconDiv;
};

// Define contact information and social icons data
const contactInfo = {
    email: 'hanu@gmail.com',
    phone: '032-323-3232'
};

const socialIcons = [
    { link: 'https://www.facebook.com/', icon: 'fa-facebook-f' },
    { link: 'https://www.instagram.com/', icon: 'fa-instagram' },
    { link: 'https://www.linkedin.com/', icon: 'fa-linkedin' }
];

topNav.appendChild(createContactInfo(contactInfo.email, contactInfo.phone));
topNav.appendChild(createSocialIcons(socialIcons));

document.getElementById('nav-top').appendChild(topNav);

// Header
const header = document.createElement('div')
header.classList.add('container', 'd-flex', 'justify-content-between', 'align-items-center')

const brandLink = document.createElement('a');
brandLink.classList.add('navbar-brand', 'align-self-center', 'logo');
brandLink.href = 'index.html';

const imageTextDiv = document.createElement('div');
imageTextDiv.classList.add('image-text', 'd-flex', 'align-items-center', 'mb-2', 'gap-2');

const logoImg = document.createElement('img');
logoImg.classList.add('image');
logoImg.src = './assets/favicon.png';
logoImg.alt = 'Logo';
logoImg.width = 40;
logoImg.height = 40;

const textSpan = document.createElement('span');
textSpan.classList.add('text', 'fs-4', 'color-web-text');
textSpan.textContent = 'SkyEdge';

imageTextDiv.appendChild(logoImg);
imageTextDiv.appendChild(textSpan);

brandLink.appendChild(imageTextDiv);

const navMenuDiv = document.createElement('div');
navMenuDiv.id = 'nav-menu';
navMenuDiv.classList.add('align-self-center', 'collapse', 'navbar-collapse', 'flex-fill', 'd-lg-flex', 'justify-content-lg-between');

const ulMenu = document.createElement('ul');
ulMenu.classList.add('nav', 'navbar-nav', 'd-flex', 'justify-content-between', 'mx-lg-auto');

const menuItems = [
    { text: 'Home', href: 'index.html' },
    { text: 'Shop', href: 'shop.html' },
    { text: 'About', href: 'about-us.html' },
    { text: 'Contact', href: 'contact-us.html' }
];

menuItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    const a = document.createElement('a');
    a.classList.add('nav-link');
    a.href = item.href;
    a.textContent = item.text;
    a.style.margin = '0 35px';
    li.appendChild(a);
    ulMenu.appendChild(li);
});

navMenuDiv.appendChild(ulMenu);

const menuIconDiv = document.createElement('div');
menuIconDiv.classList.add('navbar', 'align-items-center', 'd-flex');

const heartIconLink = document.createElement('a');
heartIconLink.classList.add('nav-icon', 'text-decoration-none');
heartIconLink.href = '#';
heartIconLink.style.marginRight = '20px';

const heartIcon = document.createElement('i');
heartIcon.classList.add('fa-solid', 'fa-heart', 'text-dark');
heartIconLink.appendChild(heartIcon);

const cartIconLink = document.createElement('a');
cartIconLink.classList.add('nav-icon', 'text-decoration-none');
cartIconLink.href = 'cart.html';
cartIconLink.style.marginRight = '20px';

const cartIcon = document.createElement('i');
cartIcon.classList.add('fa-solid', 'fa-cart-shopping', 'text-dark');
cartIconLink.appendChild(cartIcon);

const cartBadge = document.createElement('span');
cartBadge.classList.add('position-absolute', 'translate-middle', 'badge', 'rounded-pill', 'bg-danger');
cartBadge.textContent = '0';
cartIconLink.appendChild(cartBadge);

const dropdownDiv = document.createElement('div');
dropdownDiv.id = 'dropdown';
dropdownDiv.classList.add('dropdown');

const userIconLink = document.createElement('a');
userIconLink.classList.add('nav-icon', 'd-flex', 'align-items-center', 'text-decoration-none');
userIconLink.setAttribute('data-bs-toggle', 'dropdown');
userIconLink.href = '#';

const userIcon = document.createElement('i');
userIcon.classList.add('fa-solid', 'fa-user', 'text-dark');
userIconLink.appendChild(userIcon);

const dropdownMenu = document.createElement('ul');
dropdownMenu.classList.add('dropdown-menu');
dropdownMenu.setAttribute('aria-labelledby', 'userDropdown');

const dropdownItems = [
    { text: 'Settings', href: '#' },
    { text: 'Log out', href: 'login.html' }
];

dropdownItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('dropdown-item');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    dropdownMenu.appendChild(li);
});

dropdownDiv.appendChild(userIconLink);
dropdownDiv.appendChild(dropdownMenu);

menuIconDiv.appendChild(heartIconLink);
menuIconDiv.appendChild(cartIconLink);
menuIconDiv.appendChild(dropdownDiv);

header.appendChild(brandLink);
header.appendChild(navMenuDiv);
header.appendChild(menuIconDiv);

document.body.appendChild(header);

document.getElementById('header').appendChild(header)

// Footer
const footerContainer = document.createElement('div')
footerContainer.classList.add('row')
const containerFooter = document.getElementById('footer');
containerFooter.appendChild(footerContainer);

// Contact
const contactColumn = document.createElement('div');
contactColumn.classList.add('col-md-4', 'pt-5');

footerContainer.appendChild(contactColumn);

const contactTitle = document.createElement('h2');
contactTitle.classList.add('h2', 'border-bottom', 'pb-3', 'border-light', 'text-success');
contactTitle.textContent = 'SkyEdge';


contactColumn.appendChild(contactTitle);


const contactItems = [
    { icon: 'fas fa-map-marker-alt fa-fw', href:'https://maps.app.goo.gl/5jtXTNnZV3NLpy8m6', text: 'Hanoi University' },
    { icon: 'fa fa-phone fa-fw', href:'tel:032-323-3232', text: '032-323-3232' },
    { icon: 'fa fa-envelope fa-fw', href:'mailto:hanu@gmail.com', text: 'hanu@gmail.com' }
];
const ulElement = document.createElement('ul');
ulElement.classList.add('list-unstyled', 'text-light', 'footer-link-list');

contactItems.forEach(item => {
    const liElement = document.createElement('li');
    liElement.className = "d-flex align-items-center gap-2";
    ulElement.appendChild(liElement);
    const iElement = document.createElement('i');
    iElement.className = item.icon ;

    const linkElement = document.createElement('a');
    linkElement.className = "text-decoration-none";
    linkElement.href = item.href;
    linkElement.textContent = item.text;
    
    liElement.appendChild(iElement);
    liElement.appendChild(linkElement);
});

contactColumn.appendChild(ulElement);
// Product
const productColumn = document.createElement('div');
productColumn.classList.add('col-md-4', 'pt-5');

const productTitle = document.createElement('h2');
productTitle.classList.add('h3', 'text-light', 'border-bottom', 'pb-3', 'border-light', 'foot-title');
productTitle.textContent = 'Products';

const productList = document.createElement('ul');
productList.classList.add('list-unstyled', 'text-light', 'footer-link-list');

const productItems = [
    'Luxury', 'Trending', "Men's Glass", "Women's Glass", 'Sunglasses', 'Accessories', 'Eyeglass Frames'
];

productItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('text-decoration-none');
    a.href = '#';
    a.textContent = item;
    li.appendChild(a);
    productList.appendChild(li);
});

productColumn.appendChild(productTitle);
productColumn.appendChild(productList);
footerContainer.appendChild(productColumn);

// Pages
const pagesColumn = document.createElement('div');
pagesColumn.classList.add('col-md-4', 'pt-5');

footerContainer.appendChild(pagesColumn);
const pagesTitle = document.createElement('h2');
pagesTitle.classList.add('h3', 'text-light', 'border-bottom', 'pb-3', 'border-light', 'foot-title');
pagesTitle.textContent = 'Pages';

const pagesList = document.createElement('ul');
pagesList.classList.add('list-unstyled', 'text-light', 'footer-link-list');

const pagesItems = [
    { text: 'Home', href: 'index.html' },
    { text: 'Shop', href: '#' },
    { text: 'About', href: 'about-us.html' },
    { text: 'FAQs', href: '#' },
    { text: 'Contact', href: '#' }
];

pagesItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('text-decoration-none');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    pagesList.appendChild(li);
});

pagesColumn.appendChild(pagesTitle);
pagesColumn.appendChild(pagesList);

const socialContacts = document.createElement('div');
socialContacts.classList.add('row', 'text-light', 'mb-4');

const socialDivider = document.createElement('div');
socialDivider.classList.add('col-12', 'mb-3');
const divider = document.createElement('div');
divider.classList.add('w-100', 'my-3', 'border-top', 'border-light');
socialDivider.appendChild(divider);
socialContacts.appendChild(socialDivider);

const socialIconsColumn = document.createElement('div');
socialIconsColumn.classList.add('col-auto', 'me-auto');

const socialIconsList = document.createElement('ul');
socialIconsList.classList.add('list-inline', 'text-left', 'footer-icons');

const socialIcons2 = [
    'fab fa-facebook-f fa-lg fa-fw',
    'fab fa-instagram fa-lg fa-fw',
    'fab fa-twitter fa-lg fa-fw',
    'fab fa-linkedin fa-lg fa-fw'
];

socialIcons2.forEach(icon => {
    const li = document.createElement('li');
    li.classList.add('list-inline-item', 'border', 'border-light', 'rounded-circle', 'text-center');
    const a = document.createElement('a');
    a.classList.add('text-light', 'text-decoration-none');
    a.target = '_blank';
    a.href = '#';
    const i = document.createElement('i');
    i.classList.add(icon);
    a.appendChild(i);
    li.appendChild(a);
    socialIconsList.appendChild(li);
});

socialIconsColumn.appendChild(socialIconsList);
socialContacts.appendChild(socialIconsColumn);

const emailSubscriberColumn = document.createElement('div');
emailSubscriberColumn.classList.add('col-auto');

const emailForm = document.createElement('form');
emailForm.classList.add('container-fluid', 'col-auto', 'd-flex');
emailForm.role = 'search';

const emailInput = document.createElement('input');
emailInput.classList.add('form-control', 'me-2');
emailInput.type = 'email';
emailInput.placeholder = 'Enter your email';
emailInput.setAttribute('aria-label', 'Search');

const subscribeButton = document.createElement('button');
subscribeButton.classList.add('btn', 'btn-outline-success');
subscribeButton.type = 'submit';
subscribeButton.textContent = 'Subscribe';

emailForm.appendChild(emailInput);
emailForm.appendChild(subscribeButton);
emailSubscriberColumn.appendChild(emailForm);
socialContacts.appendChild(emailSubscriberColumn);

footerContainer.appendChild(socialContacts);

// Copyright
const cpContainer = document.createElement('div');
cpContainer.classList.add('container')

const createCopyright = (copyright) => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'pt-2');

    const colDiv = document.createElement('div');
    colDiv.classList.add('col-12');
    rowDiv.appendChild(colDiv);

    const pElement = document.createElement('p');
    pElement.classList.add('text-left', 'text-light');
    pElement.textContent = 'Copyright © 2024 SE2-Group-4 | From Hanu with love';
    colDiv.appendChild(pElement);

    const iElement = document.createElement('i');
    iElement.classList.add('fa-solid', 'fa-heart');
    pElement.appendChild(iElement);

    return rowDiv;
};    

document.getElementById("copyright").appendChild(cpContainer);

function createFooterLinks(links) {
    const ul = document.createElement('ul');
    ul.className = 'list-unstyled text-light footer-link-list';

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = 'text-decoration-none';
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    return ul;
}

const footerLinks = [
    { text: 'Luxury', href: '#' },
    { text: 'Trending', href: '#' },
    { text: 'Men\'s Glass', href: '#' },
    { text: 'Women\'s Glass', href: '#' },
    { text: 'Sunglasses', href: '#' },
    { text: 'Accessories', href: '#' },
    { text: 'Eyeglass Frames', href: '#' }
];

// const footerLinksElement = createFooterLinks(footerLinks);
// const footer = document.querySelector('.col-md-4');
// footer.appendChild(footerLinksElement);
// footerContainer.appendChild(footer)

