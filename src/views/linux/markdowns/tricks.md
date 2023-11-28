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
