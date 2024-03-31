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