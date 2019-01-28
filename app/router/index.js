import { Router } from 'express';

// Controllers
import auth from '../controllers/Auth';

// Access token in request header
import checkAuth from '../middleware/checkAuth';

// multer
import multerImage from '../multerImage';

const router = new Router();
/**
 * @description Authentication
 */
router.get('/', checkAuth, auth.home);
router.post('/signup', auth.signup);
router.post('/signin', auth.signin);

export default router;
