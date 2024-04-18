var orderContent = null;

function showOrder(){
    if(!orderContent){
        const orderContainer = document.createElement('div');
        orderContainer.className = "container order-container p-4";
        // Order management
        const management = document.createElement('div');
        management.className = "row d-flex align-items-center rounded-3 custom-padding mb-4 bg-white";
        
        //
        const topContainer = document.createElement('div');
        topContainer.className = "col-12 d-flex align-items-center";
        //
        const leftManagement = document.createElement('div');
        leftManagement.className = "col-4";
        //
        const managementTextContainer = document.createElement('div');
        managementTextContainer.className = "d-flex align-items-center";
        const iconOrder = document.createElement('i');
        iconOrder.className = "fas fa-clipboard-list fa-2x mx-2";
        const textManagement = document.createElement('h2');
        textManagement.textContent = "Order Management";
        textManagement.className ="mb-0";
        managementTextContainer.appendChild(iconOrder);
        managementTextContainer.appendChild(textManagement);
        // Filter
        const filterContainer = document.createElement('div');
        filterContainer.className = "filter_buttons d-flex align-items-center mt-2";        const btnAll = document.createElement('button');
        btnAll.className = "active btn all-btn d-flex align-items-center gap-2 rounded-0";
        const allOrderText = document.createElement('span');
        allOrderText.textContent = "All";
        const allOrderNumber = document.createElement('span');
        allOrderNumber.textContent = "400";
        allOrderNumber.className = "all-order rounded-pill fs-065 p-2-5 text-white";
        btnAll.appendChild(allOrderText);
        btnAll.appendChild(allOrderNumber);

        const btnNew = document.createElement('button');
        btnNew.className = "btn new-btn d-flex align-items-center gap-2 rounded-0";
        const newOrderText = document.createElement('span');
        newOrderText.textContent = "New";
        const newOrderNumber = document.createElement('span');
        newOrderNumber.textContent = "400";
        newOrderNumber.className = "new-order rounded-pill fs-065 p-2-5 text-white";
        btnNew.appendChild(newOrderText);
        btnNew.appendChild(newOrderNumber);

        const btnPending = document.createElement('button');
        btnPending.className = "btn pending-btn d-flex align-items-center gap-2 rounded-0";
        const pendingOrderText = document.createElement('span');
        pendingOrderText.textContent = "Pending";
        const pendingOrderNumber = document.createElement('span');
        pendingOrderNumber.textContent = "400";
        pendingOrderNumber.className = "pending-order rounded-pill fs-065 p-2-5 text-white";
        btnPending.appendChild(pendingOrderText);
        btnPending.appendChild(pendingOrderNumber);

        const btnDelivered = document.createElement('button');
        btnDelivered.className = "btn delivered-btn d-flex align-items-center gap-2 rounded-0";
        const deliveredOrderText = document.createElement('span');
        deliveredOrderText.textContent = "Delivered";
        const deliveredOrderNumber = document.createElement('span');
        deliveredOrderNumber.textContent = "400";
        deliveredOrderNumber.className = "delivered-order rounded-pill fs-065 p-2-5 text-white";
        btnDelivered.appendChild(deliveredOrderText);
        btnDelivered.appendChild(deliveredOrderNumber);
        filterContainer.appendChild(btnAll);
        filterContainer.appendChild(btnNew);
        filterContainer.appendChild(btnPending);
        filterContainer.appendChild(btnDelivered);

        leftManagement.appendChild(managementTextContainer);
        leftManagement.appendChild(filterContainer);

        // Search
        const rightManagement = document.createElement('div');
        rightManagement.className = "col-8";
        const searchBox = document.createElement('div');
        searchBox.className = "search-box d-flex align-items-center bg-w rounded-3 px-2 py-1 mx-5 mb-3 gap-3";
        const iconSearch = document.createElement('i');
        iconSearch.className = "fas fa-search icon mx-1";
        const inputSearch = document.createElement('input');
        inputSearch.className = "bg-w rounded-3 h-4 fs-6 w-100 border-0 outline-none";
        inputSearch.type = "search";
        inputSearch.placeholder = "Search";
        searchBox.appendChild(iconSearch);
        searchBox.appendChild(inputSearch);
        rightManagement.appendChild(searchBox);

        topContainer.appendChild(leftManagement);
        topContainer.appendChild(rightManagement);
        management.appendChild(topContainer);
        orderContainer.appendChild(management);

        orderContent = orderContainer;

        const listOrder = document.createElement('div');
        listOrder.className = "order_list row rounded-3 p-0 gap-2";
        orderContainer.appendChild(listOrder);
        const orderData = [
            {
                orderID: '#12345',
                totalPrice: {
                    amount: 99.99,
                    currency: '$'
                },
                date: '2024-04-06',
                shippingNo: '03828126265',
                status: 'New',
                items: [
                    {
                        itemImg: './assets/images/Huan.png',
                        itemName: 'Style, convenience, unparalleled sophistication.',
                        sku: 'fashion-17',
                        quantity: 2
                    },
                    {
                        itemImg: './assets/images/Huan.png',
                        itemName: 'Style, convenience, unparalleled sophistication.',
                        sku: 'fashion-17',
                        quantity: 2
                    },
                    {
                        itemImg: './assets/images/Huan.png',
                        itemName: 'Style, convenience, unparalleled sophistication.',
                        sku: 'fashion-17',
                        quantity: 2
                    }
                ]
            }
        ];
        
        orderData.forEach(order => {
            const orderBox = createOrder(order);
            listOrder.appendChild(orderBox);
        });
        function createOrder(order){
            const orderBox = document.createElement('div');
            orderBox.className = "order rounded-3 p-3 bg-white w-100 mb-2";

            const price = document.createElement('span');
            price.textContent =  order.totalPrice.currency +  order.totalPrice.amount;
            orderBox.appendChild(price);

            const statusContainer = document.createElement('div')
            statusContainer.className = "custom-select mx-4 mb-3";
            const selectStatus = document.createElement("select");
            selectStatus.className = "status-select rounded-pill p-2-5 text-success";
            const statuses = [
                "New",
                "Pending",
                "Delivered",
                "Unfinished"
            ];
            statuses.forEach(function(status) {
                const option = document.createElement("option");
                option.textContent = status;
                selectStatus.appendChild(option);
            });
            statusContainer.appendChild(selectStatus);
            orderBox.appendChild(statusContainer);
            
            
            const itemsContainer = document.createElement('div');
            itemsContainer.className = "item";
            order.items.forEach(item => {
                const itemBox = createItems(item);
                itemsContainer.appendChild(itemBox);
            });
            orderBox.appendChild(itemsContainer);

            const btnShow = document.createElement('div');
            btnShow.className = "mt-2 show-item-1 d-flex align-items-center gap-2";
            btnShow.role = "button";
            const btnShowText = document.createElement('span');
            btnShowText.textContent = "Show more items";
            const iconShow = document.createElement('i');
            iconShow.className = "fa fa-angle-down";
            btnShow.appendChild(btnShowText);
            btnShow.appendChild(iconShow);
            orderBox.appendChild(btnShow);

            return orderBox;
        }
        function createItems(item){
            const itemContainer = document.createElement('div');
            itemContainer.className = "d-flex gap-3 mb-2";

            const itemImgSrc = document.createElement('img');
            itemImgSrc.className = "rounded-start rounded";
            itemImgSrc.height = "80";
            itemImgSrc.src = item.itemImg;
            itemContainer.appendChild(itemImgSrc);

            const inforItem = document.createElement('div');
            inforItem.className = "d-flex flex-column h-100";
            itemContainer.appendChild(inforItem);

            const itemName = document.createElement('span');
            itemName.textContent = "Fashion glasses: " + item.itemName;
            const sku = document.createElement('span');
            sku.className = "sku text-primary";
            sku.textContent = "SKU: " + item.sku;
            const itemQuantity = document.createElement('span');
            itemQuantity.className = "quantity";
            itemQuantity.textContent = "Quantity: " + item.quantity;

            inforItem.appendChild(sku);
            inforItem.appendChild(itemName);
            inforItem.appendChild(itemQuantity);

            return itemContainer;
        }
    }
    return orderContent;
}