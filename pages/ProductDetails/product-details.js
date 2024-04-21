var quantity = 1;
var varValue = document.getElementById("var-value");

document.getElementById("btn-minus").addEventListener("click", function() {
    if (quantity > 1) {
        quantity--;
        varValue.innerText = quantity;
    }
});

document.getElementById("btn-plus").addEventListener("click", function() {
    quantity++;
    varValue.innerText = quantity;
});

document.querySelectorAll('.product-overlay a').forEach(function(iconLink) {
    iconLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor tag behavior
      this.querySelector('i').classList.toggle('fas'); // Toggle the fas class for filled icon
      this.querySelector('i').classList.toggle('far'); // Toggle the far class for empty icon
    });
});