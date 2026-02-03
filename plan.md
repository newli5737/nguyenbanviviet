Thiết kế giao diện website bán cà phê cao cấp tại Việt Nam, phong cách hiện đại – tinh tế – cảm xúc, ưu tiên trải nghiệm thị giác và hiệu ứng mượt mà.

Ngôn ngữ & nội dung

Toàn bộ nội dung hiển thị 100% tiếng Việt chuẩn, văn phong tự nhiên, gần gũi nhưng cao cấp

Không dùng tiếng Anh xen kẽ

Tên thương hiệu ví dụ: “Cà Phê Nguyên Bản” hoặc “Mộc Coffee”

Font chữ (ưu tiên tiếng Việt đẹp)

Heading: Playfair Display hoặc Merriweather (đậm, sang, có cảm xúc)

Body: Be Vietnam Pro hoặc Inter (dễ đọc, hiện đại, hỗ trợ tiếng Việt tốt)

Chữ có tracking thoáng, line-height dễ thở

Màu sắc chủ đạo

Nâu cà phê đậm (#4E342E)

Be / kem nhạt (#F5EFE6)

Xanh olive nhạt (#6B705C) hoặc xanh rừng

Điểm nhấn vàng đồng hoặc cam đất nhẹ

Hình ảnh

Ảnh thật, phong cách lifestyle:

Hạt cà phê rang thủ công

Ly cà phê nóng có khói

Nông trại cà phê Việt Nam (Tây Nguyên)

Người pha cà phê thủ công (pour over, phin)

Ánh sáng ấm, chiều sâu tốt, cảm giác thủ công – mộc

Cấu trúc website

1. Hero section

Ảnh full width, có overlay nhẹ

Heading lớn:
“Cà phê nguyên bản – Đậm vị từ nông trại Việt”

Subtext:
“Từng hạt cà phê được chọn lọc và rang thủ công, mang trọn hương vị tự nhiên.”

Button: “Khám phá ngay”

2. Sản phẩm nổi bật

Card bo góc lớn, shadow mềm

Tên sản phẩm:

Cà phê Arabica rang vừa

Cà phê Robusta đậm vị

Cà phê Phin truyền thống

Giá rõ ràng, nút “Thêm vào giỏ”

3. Câu chuyện thương hiệu

Layout split text – image

Nội dung kể về hành trình từ nông trại → rang → ly cà phê

4. Quy trình rang xay

Icon line mềm

Các bước: Thu hoạch – Rang – Xay – Đóng gói

5. Đánh giá khách hàng

Card testimonial

Avatar tròn, tên tiếng Việt

6. Footer

Logo

Thông tin liên hệ

Mạng xã hội

Chính sách – điều khoản

Hiệu ứng & motion

Scroll animation mượt (fade-up, parallax nhẹ)

Hover card nâng nhẹ + shadow

Button có ripple hoặc transition mềm

Ưu tiên cảm giác “chạm là thích”

Cảm xúc tổng thể

Thủ công, ấm áp, đáng tin

Cao cấp nhưng không xa cách

Khi nhìn vào là muốn uống cà phê ngay

---

## 🛒 Các chức năng đã triển khai

### 1. Header Navigation
- Thanh điều hướng cố định (sticky header)
- Logo "Mộc Coffee" với icon và typography đẹp
- Menu navigation đến các section: Trang chủ, Sản phẩm, Câu chuyện, Quy trình, Liên hệ
- Icon giỏ hàng với badge đếm số lượng sản phẩm
- Responsive mobile menu
- Hiệu ứng thay đổi style khi scroll

### 2. Giỏ hàng (Cart)
- **Cart Context**: Quản lý state giỏ hàng toàn cục với React Context
- **Thêm vào giỏ**: Click nút "Thêm vào giỏ" trên mỗi sản phẩm
- **Animation feedback**: Nút chuyển xanh và hiển thị "Đã thêm!" khi thêm thành công
- **Cart Drawer**: Panel trượt từ bên phải hiển thị giỏ hàng
- **Tăng/Giảm số lượng**: Nút +/- để điều chỉnh số lượng
- **Xóa sản phẩm**: Nút xóa từng sản phẩm khỏi giỏ
- **Tính tổng tiền**: Tự động cập nhật tổng tiền
- **Xóa tất cả**: Nút clear toàn bộ giỏ hàng

### 3. Toast Notifications
- Thông báo popup mượt mà khi thêm sản phẩm vào giỏ
- Tự động ẩn sau 3 giây
- Animation fade-in/out đẹp mắt

### 4. Smooth Scroll Navigation
- Navigation menu scroll mượt đến các section
- Nút "Khám phá ngay" scroll xuống phần sản phẩm

### 5. Sản phẩm (6 sản phẩm)
1. Cà phê Arabica rang vừa - 245.000₫
2. Cà phê Robusta đậm vị - 195.000₫
3. Cà phê Phin truyền thống - 215.000₫
4. Cà phê Moka đặc sản - 320.000₫
5. Blend Sữa Đá tuyệt hảo - 185.000₫
6. Cà phê Espresso đậm đặc - 275.000₫

---

## 📁 Cấu trúc files mới

```
src/app/
├── context/
│   ├── CartContext.tsx      # Cart state management
│   └── ToastContext.tsx     # Toast notifications
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── CartDrawer.tsx       # Cart panel drawer
│   └── ... (existing)
```

---

## 🚀 Chức năng cần phát triển tiếp

- [ ] Trang chi tiết sản phẩm
- [ ] Trang thanh toán (Checkout)
- [ ] Lưu giỏ hàng vào localStorage
- [ ] Tích hợp payment gateway
- [ ] Trang đăng nhập/đăng ký
- [ ] Quản lý đơn hàng
- [ ] Search & filter sản phẩm