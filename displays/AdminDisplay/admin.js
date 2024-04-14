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
var pages = {
    "admin-dashboard": {
        "title": "Dashboard",
        "content": null, // Lưu trạng thái của trang sau khi được tạo
        "loadContent": function(){
            if (!this.content) {
                const dashboardContainer = document.createElement('div');
                dashboardContainer.classList.add('container', 'dashboard-container', 'mt-5');

               
                const columns = [
                    { income: '17', type: 'Customer', iconClass: 'fa-users' },
                    { income: '25', type: 'Product', iconClass: 'fa-shopping-bag' },
                    { income: '10', type: 'Order', iconClass: 'fa-shopping-cart' },
                    { income: '50.89', type: 'Income', iconClass: 'fa-dollar-sign' }
                ];

                const overviewContainer = document.createElement('div');
                overviewContainer.classList.add('overview-container', 'row', 'mb-5');
                
                columns.forEach(column => {
                    const colDiv = createColumn(column.income, column.type, column.iconClass);
                    overviewContainer.appendChild(colDiv);
                });
                dashboardContainer.appendChild(overviewContainer);
                function createColumn(income, type, iconClass) {
                    const colDiv = document.createElement('div');
                    colDiv.classList.add('col-3');

                    const card = document.createElement('div');
                    card.classList.add('card');

                    const cardBody = document.createElement('div');
                    cardBody.classList.add('card-body');

                    const cardContent = document.createElement('div');
                    cardContent.classList.add('custom-card-content');

                    const incomeDiv = document.createElement('div');
                    incomeDiv.classList.add('income');

                    const cardTitle = document.createElement('h2');
                    cardTitle.classList.add('card-title');
                    cardTitle.textContent = income;

                    const cardText = document.createElement('p');
                    cardText.classList.add('card-text');
                    cardText.textContent = type;

                    const iconContainer = document.createElement('div');
                    iconContainer.classList.add('icon-container');

                    const iconCard = document.createElement('h2');
                    iconCard.classList.add('fa', iconClass);
                    
                    incomeDiv.appendChild(cardTitle);
                    incomeDiv.appendChild(cardText);
                    cardContent.appendChild(incomeDiv);
                    iconContainer.appendChild(iconCard);
                    cardContent.appendChild(iconContainer);
                    cardBody.appendChild(cardContent);
                    card.appendChild(cardBody);
                    colDiv.appendChild(card);

                    return colDiv;
                    
                }
                const recentContainer = document.createElement('div');
                recentContainer.classList.add('row', 'gap-3');
                dashboardContainer.appendChild(recentContainer);
                // Create and append recent purchase table
                const purchaseContainer = document.createElement('div');
                purchaseContainer.id = 'purchase';
                purchaseContainer.classList.add('col', 'bg-white', 'p-3', 'rounded-3', 'mb-4');

                const heading = document.createElement('h3');
                heading.textContent = 'Recent Purchases';

                const table = document.createElement('table');
                table.classList.add('table', 'table-hover', 'table-striped');

                // Table header
                const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');
                const headers = ['Order No.', 'Name', 'Amount', 'Date & Time', 'Status'];

                headers.forEach(headerText => {
                    const th = document.createElement('th');
                    th.scope = 'col';
                    th.textContent = headerText;
                    headerRow.appendChild(th);
                });

                thead.appendChild(headerRow);

                // Table body
                const tbody = document.createElement('tbody');
                tbody.classList.add('purchase-table');

                // Sample data
                const purchases = [
                    { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'PENDING' },
                    { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'FAILED' },
                    { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'SUCCESS' },
                    { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'COMPLETED' },
                    { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'PENDING' },
                    { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'FAILED' },
                    { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'SUCCESS' },
                    { orderNo: '78959', name: 'Albert Flores', amount: '$1345', dateTime: 'Mar 26, 2024', status: 'SUCCESS' }
                ];

                purchases.forEach(purchase => {
                    const row = document.createElement('tr');
                    const cells = ['orderNo', 'name', 'amount', 'dateTime'];

                    cells.forEach(cell => {
                        const td = document.createElement('td');
                        td.textContent = purchase[cell];
                        row.appendChild(td);
                    });

                    // Add status span with appropriate class
                    const statusCell = document.createElement('td');
                    statusCell.classList.add('status');
                    const statusSpan = document.createElement('span');
                    statusSpan.classList.add('status-btn', `status-${purchase.status.toLowerCase()}`);
                    statusSpan.textContent = purchase.status;
                    statusCell.appendChild(statusSpan);
                    row.appendChild(statusCell);

                    tbody.appendChild(row);
                });

                table.appendChild(thead);
                table.appendChild(tbody);

                // "Show All" button
                const showAllButton = document.createElement('button');
                showAllButton.type = 'button';
                showAllButton.classList.add('btn', 'btn-outline-success');
                showAllButton.textContent = 'Show All';

                purchaseContainer.appendChild(heading);
                purchaseContainer.appendChild(table);
                purchaseContainer.appendChild(showAllButton);

                // Append the recent purchase table to dashboardContainer
                recentContainer.appendChild(purchaseContainer);



                const activityContainer = document.createElement('div');
                activityContainer.id = 'activity';
                activityContainer.classList.add('col', 'bg-white', 'p-3', 'rounded-3', 'mb-4');

                const headingActivity = document.createElement('h3');
                headingActivity.textContent = 'Recent Admin Activities';

                const tableActivity = document.createElement('table');
                tableActivity.classList.add('table', 'table-hover', 'table-striped');

                // Table header for activities
                const theadActivity = document.createElement('thead');
                const headerRowActivity = document.createElement('tr');
                const headersActivity = ['Activity', 'Date & Time'];

                headersActivity.forEach(headerText => {
                    const th = document.createElement('th');
                    th.scope = 'col';
                    th.textContent = headerText;
                    headerRowActivity.appendChild(th);
                });

                theadActivity.appendChild(headerRowActivity);

                // Table body for activities
                const tbodyActivity = document.createElement('tbody');

                // Sample data for activities
                const activities = [
                    { adminName: 'Cong', avatar: './assets/images/Cong.png', activity: 'has deleted a voucher from List Voucher', dateTime: 'Mar 26, 2024' },
                    { adminName: 'Huan', avatar: './assets/images/Huan.png', activity: 'has added a new product', dateTime: 'Mar 25, 2024' },
                    { adminName: 'Long', avatar: './assets/images/Long.png', activity: 'has updated product prices', dateTime: 'Mar 24, 2024' },
                    { adminName: 'Anh Minh', avatar: './assets/images/AnhMinh.png', activity: 'has deleted a customer account', dateTime: 'Mar 23, 2024' },
                    { adminName: 'Pham Minh', avatar: './assets/images/PhamMinh.png', activity: 'has added a new category', dateTime: 'Mar 22, 2024' },
                    { adminName: 'Cong', avatar: './assets/images/Cong.png', activity: 'has updated order status', dateTime: 'Mar 21, 2024' },
                    { adminName: 'Cong', avatar: './assets/images/Cong.png', activity: 'has updated customer details', dateTime: 'Mar 20, 2024' }
                ];

                activities.forEach(activity => {
                    const rowActivity = document.createElement('tr');
                    const activityCell = document.createElement('td');
                    activityCell.classList.add('d-flex', 'align-items-center');

                    const adminLogo = document.createElement('div');
                    adminLogo.classList.add('admin-logo', 'd-flex', 'align-items-center');

                    const adminAvatar = document.createElement('img');
                    adminAvatar.classList.add('avt');
                    adminAvatar.src = activity.avatar;
                    adminAvatar.alt = 'Avatar';

                    const adminName = document.createElement('p');
                    adminName.classList.add('admin-name', 'text-success', 'mb-0');
                    adminName.textContent = activity.adminName;

                    adminLogo.appendChild(adminAvatar);
                    adminLogo.appendChild(adminName);

                    const activityText = document.createElement('p');
                    activityText.classList.add('activity', 'mb-0');
                    activityText.textContent = ` ${activity.activity}`;

                    activityCell.appendChild(adminLogo);
                    activityCell.appendChild(activityText);

                    const dateTimeCell = document.createElement('td');
                    dateTimeCell.textContent = activity.dateTime;

                    rowActivity.appendChild(activityCell);
                    rowActivity.appendChild(dateTimeCell);

                    tbodyActivity.appendChild(rowActivity);
                });

                tableActivity.appendChild(theadActivity);
                tableActivity.appendChild(tbodyActivity);

                // "Show All" button for activities
                const showAllActivityButton = document.createElement('button');
                showAllActivityButton.type = 'button';
                showAllActivityButton.classList.add('btn', 'btn-outline-success');
                showAllActivityButton.textContent = 'Show All';

                activityContainer.appendChild(headingActivity);
                activityContainer.appendChild(tableActivity);
                activityContainer.appendChild(showAllActivityButton);

                // Append the recent activity table to dashboardContainer
                recentContainer.appendChild(activityContainer);

                // Return dashboardContainer để gán vào content
                this.content = dashboardContainer;
            }
            
            return this.content;
        }
    },
    "admin-product": {
        "title": "Product",
        "content": null,
        "loadContent": function() {
            if (!this.content) {
                const productContainer = document.createElement('div');
                productContainer.classList.add('container', 'product-container', 'mt-4');

                const productTitle = document.createElement('h1');
                productTitle.textContent = "Products";

                productContainer.appendChild(productTitle);

                // Tạo nội dung cho trang Product ở đây

                this.content = productContainer;
            }

            return this.content;
        }
    }
};

// Function to load pages
// Biến để lưu trạng thái trang hiện tại
var currentPage = null;

function loadPage(page) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Xóa nội dung cũ

    const pageContent = pages[page].loadContent();
    contentContainer.appendChild(pageContent);

    currentPage = page;
}

window.onload = function() {
    loadPage('admin-dashboard');

    $('.load-page').on('click', function() {
        var page = $(this).data('page');
        loadPage(page);
    });
};

// Menu animation
const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));


function displayButton(checkbox) {
    var button = checkbox.closest('.product-box').querySelector('.buttonGrp');
    if (checkbox.checked) {
        button.classList.remove('d-none');
    } else {
        button.classList.add('d-none');
    }
}
function displayButton(checkbox) {
    var button = checkbox.closest('.voucher-box').querySelector('.buttonGrp');
    if (checkbox.checked) {
        button.classList.remove('d-none');
    } else {
        button.classList.add('d-none');
    }
}
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




