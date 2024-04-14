// let products = {
//     data: [
//         {
//             productName: ".....",
//             price: "48$",
//             image: '.....',
//         }
//     ]
// }

// for(let i of products.data){
    // let card = document.createElement("div")
    // card.classList.add("card")
    // document.getElementById("products").appendChild(card)
// }




const itemsContainer = document.createElement('div')
itemsContainer.style.display = 'flex'; // Set display to flex
itemsContainer.style.flexWrap = 'wrap'; // Allow items to wrap onto multiple lines

for (let i = 0; i < 9; i++) {
    const cardItem = document.createElement('div');


cardItem.innerHTML = `
                    <!-- Card -->
                        <div class="card mt-4 m-2" style="width: 18rem; height: 34rem;">
                            <div class="position-relative">
                                <img src="./assets/images/category_img.jpg" class="card-img-top img" alt="...">
                                <div
                                    class="img-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                    <div class="card-btn flex-row ">
                                        <div><a class="btn2 btn btn-success text-white" href="product-details.html"><i
                                                    class="far fa-heart"></i></a></div>
                                        <div><a class="btn2 btn btn-success text-white mt-2"
                                                href="product-details.html"><i class="far fa-eye"></i></a></div>
                                        <div><a class="btn2 btn btn-success text-white mt-2"
                                                href="product-details.html"><i class="fas fa-cart-plus"></i></a></div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body">
                                <ul class="list-unstyled d-flex justify-content-between">
                                    <li>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                    </li>
                                    <li class="text-muted text-right">$48.00</li>
                                </ul>
                                <a href="product-details.html" class="h3 text-decoration-none text-dark">
                                    Sunglasses
                                </a>

                                <p class="card-text pt-1">
                                    Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed,
                                    commodo ullamcorper.
                                </p>
                                <p class="text-muted">Reviews (48)</p>
                            </div>
                        </div>
                        <!-- End Card -->

`

itemsContainer.appendChild(cardItem);
}
document.getElementById("itemsContainer").appendChild(itemsContainer)
