## NodeJs là gì ?

- NodeJS là một nền tảng .. được xây dựng trên V8 JavaScript Engine – trình thông dịch thực thi mã JavaScript, giúp xây dựng các ứng dụng web .. một cách đơn giản và dễ dàng mở rộng.

- Nếu như ở các ngôn ngữ khác như PHP , .NET , Java .. để giải quyết vấn đề .. nhiều yêu cầu cùng một lúc .. người ta sử dụng khái niệm đa luồng .. tức là ứng với mỗi yêu cầu .. sẽ sinh ra một luồng mới để giải quyết.

- Nhưng NodeJs thì sử dụng đơn luồng .. tức là mọi yêu cầu đều nằm trên một luồng chính (main thread)

![example](1.png)

- Các yêu cầu sẽ phải nằm trong Event Queue để đợi thực hiện .. khi đó Event Loop sẽ tiến hành thực thi các tác vụ trên một luồng duy nhất .. theo cơ chế non-blocking I/O để xử lý hàng chục ngàn request đến .

- Vậy cơ chế non-blocking I/O là gì ?
  Cơ chế non-blocking I/O có nghĩa không cần đợi hoàn thành xử lý của cái request này xong rồi mới đến xử lý cái request kế tiếp, vì vậy mà có thể xử lý nhiều request đồng thời cùng 1 lúc.

- Và với phần core phía dưới .. được lập trình gần như toàn bộ bằng ngôn ngữ C++ .. kết hợp với V8 Javascript Engine mà Google cung cấp, thì tốc độ vận hành, thực hiện mã lệnh của NodeJS diễn ra rất nhanh.

## Ưu và nhược điểm của Nodejs

### Ưu điểm

- Có tốc độ xử lý nhanh nhờ cơ chế xử lý bất đồng bộ (non-blocking) nên bạn có thể dễ dàng xử lý hàng ngàn kết nối trong khoảng thời gian ngắn nhất.
- Nhận và xử lý nhiều kết nối chỉ với một luồng chính duy nhất. Nhờ đó mà hệ thống sẽ sử dụng ít lượng RAM hơn và giúp quá trình xử lý NodeJs nhanh hơn rất nhiều.
- Phù hợp để xây dựng những ứng dụng thời gian thực như các ứng dụng chat, mạng xã hội …

### Nhược điểm

- NodeJs được viết bằng C++ và JavaScript nên khi xử lý cần phải trải qua một quá trình biên dịch. Nếu bạn cần xử lý những ứng dụng tốn tài nguyên CPU thì không nên sử dụng NodeJs.
