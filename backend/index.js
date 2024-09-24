// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json()); // Để xử lý dữ liệu dạng JSON

// API để ghi dữ liệu vào file
app.post('/saveData', (req, res) => {
    const queryString = req.body.queryString; // Dữ liệu query string từ client
    const hostname = req.body.hostname; // Nhận hostname từ client

    // Lấy thông tin người dùng từ parsedData.user (chuỗi JSON)
    const user = new URLSearchParams(queryString);
    const userParsed = JSON.parse(user.get('user')) || 'unknown_user'; // Lấy username, nếu không có thì đặt 'unknown_user'

    // Tạo đường dẫn tới file
    const dirPath = path.join(__dirname, 'data', hostname, 'data');
    const filePath = path.join(dirPath, `${userParsed.username}.txt`);

    // Tạo thư mục nếu chưa tồn tại
    fs.mkdirSync(dirPath, { recursive: true });

    // Ghi dữ liệu vào file
    fs.writeFile(filePath, queryString, (err) => {
        if (err) {
            console.error('Lỗi khi ghi dữ liệu:', err);
            return res.status(500).json({ message: 'Error saving data' });
        }
        res.json({ message: `Dữ liệu đã được lưu thành công vào file: ${userParsed.username}.txt` });
        console.log(`Dữ liệu đã được lưu thành công vào file: ${userParsed.username}.txt`);
    });
});

app.listen(port, () => {
    console.log(`API đang chạy tại http://localhost:${port}`);
});
