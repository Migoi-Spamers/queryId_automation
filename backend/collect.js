// collect.js
const fs = require('fs');
const path = require('path');

// Nhận tên folder từ biến môi trường
const hostname = process.argv.find(arg => arg.startsWith('--name='));
const folderName = hostname ? hostname.split('=')[1] : null;

if (!folderName) {
    console.error('Vui lòng cung cấp tên folder bằng biến môi trường --name={hostname}');
    process.exit(1);
}

// Đường dẫn tới thư mục dữ liệu
const dataDir = path.join(__dirname, 'data', folderName);
const usersFilePath = path.join(dataDir, 'users.txt');
const dataDirPath = path.join(dataDir, 'data');

// Kiểm tra xem file users.txt có tồn tại không
if (fs.existsSync(usersFilePath)) {
    // Nếu có, xóa nội dung trong file
    fs.writeFileSync(usersFilePath, '', 'utf8');
} else {
    // Nếu không có, tạo mới
    fs.writeFileSync(usersFilePath, '', 'utf8');
}

// Đọc tất cả file .txt trong thư mục data
fs.readdir(dataDirPath, (err, files) => {
    if (err) {
        console.error('Lỗi khi đọc thư mục:', err);
        return;
    }

    // Duyệt qua tất cả các file
    files.forEach(file => {
        if (file.endsWith('.txt')) {
            const filePath = path.join(dataDirPath, file);

            // Đọc nội dung file
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Lỗi khi đọc file:', err);
                    return;
                }

                // Ghi nội dung vào users.txt
                fs.appendFileSync(usersFilePath, data + '\n', 'utf8');

                // Xóa file sau khi đã ghi vào users.txt
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error('Lỗi khi xóa file:', err);
                    } else {
                        console.log(`Đã xóa file: ${file}`);
                    }
                });
            });
        }
    });
});
