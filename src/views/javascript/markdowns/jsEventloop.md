>**Javascript là ngôn ngữ lập trình đơn luồng (single thread). Event loop là cơ chế cho phép javascript xử lý nhiều task bất đồng bộ một cách hiệu quả.**

![Event loop](https://res.cloudinary.com/practicaldev/image/fetch/s--dhjH4Wt---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_800/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif14.1.gif)

### Các thành phần trong event loop của javascript

#### 1. Call stack
 - Javascript chạy theo từng dòng code một, mỗi khi thực thi một function, function đó sẽ được đẩy vào trong một call stack (stack là một data structure, dạng LIFO, vào sau - ra trước). Khi toàn bộ code trong function được thực thi xong, function đó được xoá khỏi callstack.

 [Callstack: dev.to](https://dev.to/ejjraifihamza/javascript-call-stack-4e1c)

 ![Callstack example gif](https://res.cloudinary.com/practicaldev/image/fetch/s--pJ1tXzik--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gbpl2i0goqnms4hduiz9.gif)
 

#### 2. Web APIs và Callback Queue

 - Javascript tương tác với browser thông qua Web APIs (Xử lý DOM, XMLHttpRequest, SetTimeout).
 - Khi xử lý một function bất đồng bộ (async) thì browser sẽ không trực tiếp thực thi nó trong main thread, mà đẩy (delegate) task đó cho Web API

#### 3. Callback Queue
 - Khi task bất đồng bộ được hoàn thành, một call back function sẽ được đẩy vào trong Callback queue
 - **Important!!** Trong callback queue còn được chia ra làm hai queue nhỏ hơn: Macro task queue và Micro task queue, cả hai đều có cùng kiểu dữ liệu FIFO:
    - Macrotask queue: Nơi lưu các callback function trong Web API, các macro task trong javascript bao gồm: `setTimeout()`, `setInterval()` và `các event listeners`
    - Microtask queue: Nơi lưu các `promises` callback, các micro task có độ ưu tiên thực thi cao hơn macro task
  > Javascript luôn thực thi toàn bộ các microtask trước -> Tìm 1 macro task để thực thi -> Tiếp tục kiểm tra xem có tồn tại micro task nào không, nếu có, thực thi hết micro task -> Tiếp tục thực thi 1 macro task nếu có
  >> Làm hết việc nhẹ -> Tìm một việc nặng và làm nếu có -> Quay lại tìm và làm hết việc nhẹ (nếu có) -> Tìm một việc nặng và làm nếu có -> Lặp lại

#### 4. Event loop

 - Event loop liên tục kiểm tra call stack và callback queue
 - Nếu call stack trống, event loop sẽ lấy callback đầu tiên trong callback queue và đẩy nó vào call stack.
