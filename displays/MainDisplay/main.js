// Top Nav
const topNav = document.createElement('div')
topNav.classList.add('container', 'text-light')

topNav.innerHTML = `
    <div class="w-100 d-flex justify-content-between">

        <!-- Nav Top Contact -->
        <div>
            <a class="navbar-sm-brand text-light text-decoration-none"
                href="mailto:hanu@gmail.com">
                <i class="fa-solid fa-envelope"></i>
                hanu@gmail.com
            </a>

            <a class="navbar-sm-brand text-light text-decoration-none" href="tel:032-323-3232">
                <i class="fa-solid fa-phone"></i>
                032-323-3232
            </a>
        </div>
        <!-- End Contact Nav Top -->

        <!-- Nav Top Icon-->
        <div>
            <!-- Facebook Icon -->
            <a href="https://www.facebook.com/" class="text-light text-decoration-none" target="_blank">
                <i class="fab fa-facebook-f fa-sm fa-fw me-2"></i>
            </a>

            <!-- Instagram Icon -->
            <a href="https://www.instagram.com/" class="text-light text-decoration-none" target="_blank">
                <i class="fab fa-instagram fa-sm fa-fw me-2"></i>
            </a>

            <!-- LinkedIn Icon -->
            <a href="https://www.linkedin.com/" class="text-light text-decoration-none" target="_blank">
                <i class="fab fa-linkedin fa-sm fa-fw me-2"></i>
            </a>
        </div>
        <!-- End Icon Nav Top -->
    </div>
`
document.getElementById('nav-top').appendChild(topNav)

// Header
const header = document.createElement('div')
header.classList.add('container', 'd-flex', 'justify-content-between', 'align-items-center')

header.innerHTML = `
<!-- Brand -->
<a class="navbar-brand align-self-center logo" href="index.html">
    <div class="d-flex align-items-center">
        <img src="./assets/favicon.png" alt="skyedge-logo" style="width: 16%;">
        <h4 class="ms-3 text-success">SkyEdge</h4>
    </div>
</a>

<!-- Menubar -->
<div id="nav-menu" class="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between">
    <div class="flex-fill">
        <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
            <li class="nav-item">
                <a class="nav-link" href="index.html" aria-current="page">Home</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="shop.html">Shop</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="about-us.html">About</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="contact-us.html">Contact</a>
            </li>
        </ul>
    </div>

    <!-- Menu Icon -->
    <div class="navbar align-items-center d-flex">
        <a class="nav-icon text-decoration-none" href="#">
            <i class="fa-solid fa-magnifying-glass text-dark"></i>
        </a>
        <a class="nav-icon text-decoration-none" href="cart.html">
            <i class="fa-solid fa-cart-shopping text-dark"></i>
            <span class="position-absolute translate-middle badge rounded-pill bg-danger">
            0
            </span>
        </a>
        <div id="dropdown" class="dropdown">
            <a class="nav-icon d-flex align-items-center text-decoration-none" data-bs-toggle="dropdown" href="#">
                <i class="fa-solid fa-user text-dark"></i>
                <span class="dropdown-toggle ms-2"></span>
            </a>

            <ul class="dropdown-menu" aria-labelledby="userDropdown">
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="login.html">Log out</a></li>
            </ul>
        </div>
    </div>
</div>
`

document.getElementById('header').appendChild(header)

// Footer
const footerContainer = document.createElement('div')
footerContainer.classList.add('row')

footerContainer.innerHTML = `
    <!-- Contact -->
    <div class="col-md-4 pt-5">
        <h2 class="h2 border-bottom pb-3 border-light text-success">SkyEdge</h2>
        <ul class="list-unstyled text-light footer-link-list">
            <li>
                <i class="fas fa-map-marker-alt fa-fw"></i>
                Hanoi University
            </li>

            <li>
                <i class="fa fa-phone fa-fw"></i>
                <a class="text-decoration-none" href="tel:032-323-3232">032-323-3232</a>
            </li>

            <li>
                <i class="fa fa-envelope fa-fw"></i>
                <a class="text-decoration-none" href="mailto:hanu@gmail.com">hanu@gmail.com</a>
            </li>
        </ul>
    </div>

    <!-- Product -->
    <div class="col-md-4 pt-5">
        <h2 class="h3 text-light border-bottom pb-3 border-light foot-title">Products</h2>
        <ul class="list-unstyled text-light footer-link-list">
            <li><a class="text-decoration-none" href="#">Luxury</a></li>
            <li><a class="text-decoration-none" href="#">Trending</a></li>
            <li><a class="text-decoration-none" href="#">Men's Glass</a></li>
            <li><a class="text-decoration-none" href="#">Women's Glass</a></li>
            <li><a class="text-decoration-none" href="#">Sunglasses</a></li>
            <li><a class="text-decoration-none" href="#">Accessories</a></li>
            <li><a class="text-decoration-none" href="#">Eyeglass Frames</a></li>
        </ul>
    </div>

    <!-- Futher infor -->
    <div class="col-md-4 pt-5">
        <h2 class="h3 text-light border-bottom pb-3 border-light foot-title">Pages</h2>
        <ul class="list-unstyled text-light footer-link-list">
            <li><a class="text-decoration-none" href="index.html">Home</a></li>
            <li><a class="text-decoration-none" href="#">Shop</a></li>
            <li><a class="text-decoration-none" href="about-us.html">About</a></li>
            <li><a class="text-decoration-none" href="#">FAQs</a></li>
            <li><a class="text-decoration-none" href="#">Contact</a></li>
        </ul>
    </div>
    </div>

    <!-- Social contacts -->
    <div class="row text-light mb-4">
    <div class="col-12 mb-3">
        <div class="w-100 my-3 border-top border-light"></div>
    </div>

    <div class="col-auto me-auto">
        <ul class="list-inline text-left footer-icons">
            <li class="list-inline-item border border-light rounded-circle text-center">
                <a class="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
            </li>

            <li class="list-inline-item border border-light rounded-circle text-center">
                <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
            </li>

            <li class="list-inline-item border border-light rounded-circle text-center">
                <a class="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
            </li>

            <li class="list-inline-item border border-light rounded-circle text-center">
                <a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
            </li>
        </ul>
    </div>

    <!-- Email subscriber -->
    <div class="col-auto">
        <div class="container-fluid col-auto">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="email" placeholder="Enter your email"
                    aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Subscribe</button>
            </form>
        </div>
    </div>
`

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

document.getElementById("footer").appendChild(footerContainer)

// Copyright
const cpContainer = document.createElement('div');
cpContainer.classList.add('container')

cpContainer.innerHTML = `
    <div class="row pt-2">
      <div class="col-12">
        <p class="text-left text-light">Copyright &copy; 2024 SE2-Group-4 | From Hanu with love
          <i class="fa-solid fa-heart"></i>
        </p>
      </div>
    </div>
`;

document.getElementById("copyright").appendChild(cpContainer);