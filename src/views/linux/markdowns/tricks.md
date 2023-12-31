### Increase SSH Connection Timeout

Sửa file config sau

```bash
sudo vi /etc/ssh/sshd_config
```

Tìm hai dòng này, `ClientAliveInterval` theo đơn vị giây:
```bash
#ClientAliveInterval 
#ClientAliveCountMax
```

Thời gian timout sẽ bằng `ClientAliveInterval * ClientAliveCountMax`, hoặc chỉ cần chỉnh `ClientAliveInterval`:
```bash
ClientAliveInterval 3600
```

Khởi động lại ssh deamon:
```bash
sudo systemctl reload sshd
```

### Connect to wifi via terminal

1. Hiển thị các mạng wifi đang có

```bash
nmcli device wifi list
```

2. Connect bằng tên và password của wifi:

```bash
sudo nmcli device wifi connect "SSID" password "your_password"

```

3. Kiểm tra connection status:

```bash
nmcli connection show
```
4. Force disconnect SSH

Khi ssh session bịtimeout, thường dẫn tới việc terminal bịinactive, không thể thao tác được gì. Khi đó, thử bấm `~.`, terminal sẽ gửi tín hiệu ngắt kết nối.
