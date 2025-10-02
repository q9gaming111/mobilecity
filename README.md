# 🎯 CSS Grid Layout - Hướng dẫn từ cơ bản đến nâng cao

Bộ tài liệu hướng dẫn CSS Grid Layout bằng tiếng Việt, bao gồm các ví dụ thực tế và best practices.

## 📁 Cấu trúc tài liệu

### 1. [grid-basics.html](./grid-basics.html) - Kiến thức cơ bản
- **display: grid** - Kích hoạt Grid Layout
- **grid-template-columns** và **grid-template-rows** - Định nghĩa cột và hàng
- **gap** - Khoảng cách giữa các items
- **Named Areas** - Tạo layout với các vùng có tên
- Ví dụ cơ bản với 3 layout khác nhau

### 2. [grid-properties.html](./grid-properties.html) - Thuộc tính chi tiết
- **Container Properties** - Thuộc tính cho grid container
- **Grid Units** - Các đơn vị đo (px, fr, auto, minmax, repeat)
- **Alignment Properties** - Căn chỉnh (justify-content, align-content)
- **Grid Items Properties** - Thuộc tính cho grid items
- **Named Grid Lines** - Đường lưới có tên
- Bảng tra cứu thuộc tính đầy đủ

### 3. [grid-examples.html](./grid-examples.html) - Ví dụ thực tế
- **Card Layout** - Layout card responsive
- **Dashboard Layout** - Layout dashboard với named areas
- **Photo Gallery** - Gallery với aspect-ratio
- **Pricing Table** - Bảng giá với card nổi bật
- **Masonry Layout** - Layout masonry với các item có chiều cao khác nhau

### 4. [grid-responsive.html](./grid-responsive.html) - Layout thích ứng
- **Mobile First Approach** - Thiết kế mobile trước
- **Auto-fit với minmax** - Tự động điều chỉnh số cột
- **Responsive Navigation** - Navigation responsive
- **Responsive Blog Layout** - Layout blog với sidebar
- **Responsive Dashboard** - Dashboard với layout khác nhau cho từng breakpoint
- **Container Queries** - Tính năng CSS hiện đại
- **Best Practices** - Các thực hành tốt nhất

## 🚀 Cách sử dụng

1. **Mở file HTML** trong trình duyệt để xem ví dụ
2. **Thay đổi kích thước cửa sổ** để thấy responsive behavior
3. **Inspect element** để xem CSS code
4. **Copy code** và áp dụng vào project của bạn

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
.grid {
  display: grid;
  grid-template-columns: 1fr;  /* Mobile default */
}

/* Tablet */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large Desktop */
@media (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## 🎨 Auto-fit với minmax

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

## 📊 Named Areas Layout

```css
.layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 80px 1fr 60px;
  gap: 10px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## 🔧 Grid Units Reference

| Unit | Mô tả | Ví dụ |
|------|-------|-------|
| `fr` | Fractional unit | `1fr 2fr 1fr` |
| `px` | Pixel cố định | `200px` |
| `%` | Phần trăm | `50%` |
| `auto` | Tự động điều chỉnh | `auto` |
| `minmax()` | Min/Max values | `minmax(200px, 1fr)` |
| `repeat()` | Lặp lại pattern | `repeat(3, 1fr)` |

## 🎯 Alignment Properties

### Container Alignment
- `justify-content` - Căn chỉnh theo chiều ngang
- `align-content` - Căn chỉnh theo chiều dọc
- `place-content` - Viết tắt của cả hai

### Item Alignment
- `justify-self` - Căn chỉnh item theo chiều ngang
- `align-self` - Căn chỉnh item theo chiều dọc
- `place-self` - Viết tắt của cả hai

## 📚 Tài liệu tham khảo

- [MDN CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Grid Garden](https://cssgridgarden.com/) - Game học CSS Grid
- [Grid by Example](https://gridbyexample.com/) - Ví dụ CSS Grid
- [Can I Use CSS Grid](https://caniuse.com/css-grid) - Browser support

## 🌟 Tips & Tricks

1. **Sử dụng `gap` thay vì `margin`** cho spacing
2. **Mobile First** - Thiết kế cho mobile trước
3. **Named Areas** cho complex layouts
4. **minmax()** cho flexible sizing
5. **auto-fit/auto-fill** cho responsive grids
6. **Container Queries** cho modern responsive design

## 📝 License

Tài liệu này được tạo ra để học tập và chia sẻ kiến thức. Bạn có thể tự do sử dụng và chỉnh sửa.

---

**Tác giả:** AI Assistant  
**Ngày tạo:** 2024  
**Phiên bản:** 1.0