import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// constant
import router from '../router';
import config from '../configs/index';

const app = express();

/**
 * Bật CORS. Nếu không dùng khi client request lên sẽ lỗi 'No Acccess Origin'
  *Tham khảo: https://github.com/expressjs/cors
 */
app.use(cors());

/**
 * Parse body trong các request gửi lên từ phía client
 * Tham khảo: https://github.com/expressjs/body-parser
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));
/**
 * Khởi tạo các router
 */
app.use(config.apiPrefix, router);

app.listen(config.PORT, () => {
  console.log(`Server runing is PORT: ${config.PORT} -> ENV: ${app.get('env')}` // eslint-disable-line no-console
  );
});

export default app;
