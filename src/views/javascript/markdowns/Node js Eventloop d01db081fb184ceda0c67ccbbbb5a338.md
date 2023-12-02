# Node.js Eventloop

Status: In progress

> Event loop của Node.js cho phép nó thực thi các tác vụ non-blocking bằng cách đẩy các tác vụ đó xuống cho kernel của hệ thống xử lý. Kernel của hệ thống thường có thể xử lý nhiều tác vụ song song. Mỗi khi thực thi xong một tác vụ, kernel sẽ thông báo cho Node.js thêm callback vào trong `poll queue` để chờ được xử lý
> 

### Giải thích về Event loop

Khi Node.js khởi chạy, nó khởi tạo một event loop, xử lý các input script - có thể chứa các `async API calls` , `schedule timers` hoặc gọi `process.nextTick()`, sau đó sẽ bắt đầu xử lý event loop

![Untitled](Node%20js%20Eventloop%20d01db081fb184ceda0c67ccbbbb5a338/Untitled.png)

Mỗi box ở trên là một “phase” trong event loop. Mỗi khi Node.js vào một phase, nó sẽ chạy các callbacks có trong queue của phase đó cho đến khi queue đó trống hoặc tới hạn số lượng callback được chạy, sau đó sẽ chuyển tiếp tới các phase sau.

### Phases overview

Các phase trong Node.js:

- **timers**: Phase này chạy các callback được đặt lịch bởi `setTimeout()` và `setInterval()`.
- **pending callbacks**: Chạy các I/O callbacks được trì hoãn cho tới lần loop tiếp theo
- **idle, prepare**: Chỉ được sử dụng internally.
- **poll**: Nhận thêm các I/O events, chạy các I/O callback có liên quan (hầu như tất các, ngoại trừ các `close callbacks`, `các callback được đặt lịch bởi timers` và `setImmediate()`). Node.js sẽ block ở phase này khi cần thiết
- **check**: `setImmediate()` sẽ được invoke tại phase này.
- **close callbacks**: Chạy các close callbacks, e.g. `socket.on('close', ...)`.

Tại mỗi lần lặp của event loop, Node.js sẽ kiểm tra nếu nó có đang chờ một tác vụ I/O bất đồng bộ hoặc timers hay không. Nếu không có thì sẽ shutdown.

### Phases detail (TODO)