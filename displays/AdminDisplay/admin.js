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