let cart = [];

// Thêm sản phẩm vào giỏ hàng
function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

// Cập nhật giỏ hàng và tổng tiền
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const totalPriceElement = document.getElementById('totalPrice');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartCount.textContent = cart.length;
    totalPriceElement.textContent = `Tổng tiền: $${total.toFixed(2)}`;

    // Ẩn/hiện nút thanh toán tùy theo trạng thái giỏ hàng
    const checkoutButton = document.getElementById('checkoutButton');
    checkoutButton.style.display = cart.length > 0 ? 'block' : 'none';
}

// Xóa giỏ hàng
function clearCart() {
    cart = [];
    updateCart();
}

// Hàm xử lý thanh toán
function checkout() {
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống!');
        return;
    }

    let orderSummary = 'Đơn hàng của bạn:\n';
    let total = 0;
    
    cart.forEach(item => {
        orderSummary += `- ${item.productName}: $${item.price.toFixed(2)}\n`;
        total += item.price;
    });

    orderSummary += `\nTổng tiền: $${total.toFixed(2)}`;

    // Xác nhận thanh toán
    if (confirm(`${orderSummary}\n\nBạn có muốn thanh toán không?`)) {
        alert('Thanh toán thành công! Cảm ơn bạn đã mua hàng.');
        clearCart();
    }
}

// Hiển thị/Ẩn giỏ hàng
function toggleCart() {
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
}
