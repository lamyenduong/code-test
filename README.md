Công nghệ: 
- Frontend: Angular
- Backend: NodeJS
- Database: PostgreSQL kết nối qua DBeaver
- Mức độ hoàn thành và chức năng: 
 -  Thêm, xóa, sửa, hiển thị thông tin sản phẩm qua api
 -  Thêm, xóa sản phẩm vào giỏ hàng
 - Responsive
- Chưa hoàn thành :
 - Tăng giảm số lượng sản phẩm và cập nhật subtotal
 - Một số animation khi thao tác
  
Demo: ![image](https://github.com/lamyenduong/code-test/assets/72658961/e34e2643-cf87-4410-8e02-6d1fc540110c)

Cách chạy code: 
- clone repository, mở terminal tại 2 folder frontend và backend, cùng chạy lệnh npm install
- tạo kết nối database
- chạy lệnh npm start ở backend và ng serve ở frontend

Link deploy: 
 - Frontend: https://655e130c20c213360b0f711f--hilarious-syrniki-51ca39.netlify.app/
 - Backend: https://codetest-2tsf.onrender.com/api/v1/products
 - List api:
    - GET: /products
    - GET: /products/:id
    - POST: /products
    - PATCH: /products/:id
    - DELETE: /products/:id
    - POST: /cart/:id
    - GET: /cart
    - PATCH: /cart/:id
    - DELETE: /cart/:id 
