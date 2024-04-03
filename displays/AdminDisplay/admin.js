function loadPage(page) {
    $("#content").load(page, function() {
        activateDropdownEvents();
    });
}

function activateDropdownEvents() {
    let dropdownToggle = document.querySelectorAll('.dropdown-navbar');

    dropdownToggle.forEach(function(toggle) {
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            let target = document.getElementById(this.getAttribute('data-bs-target'));

            if (target.classList.contains('show')) {
                target.classList.remove('show');
            } else {
                target.classList.add('show');
            }
        });
    });

    let dropdownMenu = document.querySelectorAll('.dropdown-menu');

    dropdownMenu.forEach(function(menu) {
        menu.addEventListener('shown.bs.dropdown', function() {
            this.parentNode.querySelector('.dropdown-navbar').classList.add('active');
        });

        menu.addEventListener('hidden.bs.dropdown', function() {
            this.parentNode.querySelector('.dropdown-navbar').classList.remove('active');
        });
    });
}

