
function copyEmail(icon) {
    // Tìm phần tử chứa email trong cùng một hàng (row)
    var emailElement = icon.closest("tr").querySelector(".email");

    if (emailElement) {
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
    } else {
        alert("Email not found.");
    }
}