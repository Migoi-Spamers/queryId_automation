# Tool extension auto query_id from tele web app by JJ

\> Chỉ dùng cho chrome chống chỉ định bravo

## 🛠️ Hướng dẫn cài đặt

> Yêu cầu đã cài đặt NodeJS

- Bước 1: Tải về phiên bản mới nhất của tool
- Bước 2: Tại thư mục `\backend` (thư mục có chứa file package.json), chạy lệnh `npm install` để cài đặt các thư viện bổ trợ
- Bước 3: Tại thư mục `\backend` chạy `npm start` giữ nguyên cửa sổ đó
- Bước 4: Load folder extension lên chrome extension
- Bước 5: Vào ứng dụng tele mà bạn muốn lấy `query_id` và play nó lên. Chờ 1 lúc xem cửa sổ chạy `npm start` ở `\backend` sẽ hiện thông báo ghi lại thành công `query_id`
- Bước 6: Có thể check `\backend\data\{hostname}\data\{username}.txt` sẽ được lưu lại hết ở đây, xem đã đầy đủ file cho các account chưa.
- Bước 7: Chạy lệnh `npm run collect:vana` hoặc `npm run collect:seed`, tất cả sẽ được tổng hợp lại ở `\backend\{hostname}\users.txt`
- Bước 8: Lấy hết dữ liệu ở `users.txt` và đem qua source code để chạy.
