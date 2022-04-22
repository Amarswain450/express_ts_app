import express from 'express';
import { registerController } from '../controllers/user-controller';
import { registrationValidation } from '../validations/user-validation';

const router:express.Router = express.Router();

router.post('/register', registrationValidation, registerController);

export default router;