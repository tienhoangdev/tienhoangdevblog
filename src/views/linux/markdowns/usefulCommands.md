### rsync (remote sync)

- Dùng để đồng bộ dữ liệu giữa các máy với nhau, thích hợp cho mô hình master-slave. 
- Use case: Khi máy slave được khởi tạo, nó sẽ chạy một script (Ví dụ user-data script trên AWS EC2) để đồng bộ file từ máy master.

```bash
rsync -avz source_directory/ user@destination_host:destination_directory/
```
### find
- Tìm file trong một thư mục

```bash
find . -type f
```
- Tìm directory

```bash
find . -type d
```

- Tìm file theo extensions
```bash
find . -iname "*jpg"
```

### zip
- zip thư mục

```bash
zip -r archive.zip directory/
```
- zip từ nhiều file và thư mục
```bash
zip archive.zip file1 directory/

```

### unzip
- Giải nén
```bash
unzip
```
- Giải nén tới một directory cụ thể
```bash
unzip <archive> -d <directory>
```
