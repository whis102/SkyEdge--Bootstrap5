// Kích hoạt sự kiện đóng menu

const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle");

    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    });


// Kích hoạt sự kiện đóng mở dropdown trên navbar
function activateEvents() {
    // Khi click vào dropdown-toggle
    $(document).on('click', '.dropdown-toggle', function(e) {
        e.preventDefault();
        var dropdownMenu = $(this).next('.dropdown-menu');
        if (dropdownMenu.hasClass('show')) {
            // Nếu dropdown-menu đã mở, không cần làm gì
            dropdownMenu.removeClass('show');
        } else {
            // Nếu dropdown-menu chưa mở, mở nó và đóng các dropdown-menu khác
            $('.dropdown-menu').removeClass('show');
            dropdownMenu.addClass('show');
        }
    });

    // Khi click bất kỳ đâu khác, đóng dropdown-menu (nếu có mở)
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown-menu').removeClass('show');
        }
    });
}
// Load trang Dashboard khi bắt đầu
function loadDashboard() {
    loadPage('admin-dashboard.html', 'Dashboard');
}
const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((item) =>
item.addEventListener('click',activeLink));
// Kích hoạt sự kiện khi trang được load
function loadPage(page, title) {
    $("#content").load(page, function() {
        document.getElementById('page-title').textContent = title;
        // Kích hoạt sự kiện đóng mở dropdown
        activateEvents();
    });
}
$(document).ready(function() {
    activateEvents();
});

// Copy subscribers
function copyEmail(i) {
    // Tìm phần tử chứa email trong cùng một hàng (row)
    var row = i.closest("tr");
    var emailElement = row.querySelector(".email");
  
    // Lấy nội dung email
    var email = emailElement.textContent.trim();
  
    // Tạo một textarea ẩn để sao chép nội dung
    var textarea = document.createElement("textarea");
    textarea.value = email;
    document.body.appendChild(textarea);
  
    // Chọn và sao chép nội dung trong textarea
    textarea.select();
    document.execCommand("copy");
  
    // Loại bỏ textarea không cần thiết
    document.body.removeChild(textarea);
  
    // Thông báo cho người dùng biết rằng email đã được sao chép
    alert("Email has been copied: " + email);
}

// Show more items
function toggleItems(button) {
    var item = button.previousElementSibling;
    var icon = button.querySelector('i');

    if (item.classList.contains('d-none')) {
        item.classList.remove('d-none');
        button.querySelector('span').textContent = 'Show less items';
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
    } else {
        item.classList.add('d-none');
        button.querySelector('span').textContent = 'Show more items';
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
    }
}

function toggleButton(checkbox) {
    var button = checkbox.parentElement.nextElementSibling.querySelector('.viewDetails');
    if (checkbox.checked) {
        button.classList.remove('d-none');
    } else {
        button.classList.add('d-none');
    }
}

function openPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function viewOrderDetails() {
    var viewButtons = document.getElementById('viewButton');
    viewButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            openPopup();
        });
    });
}




