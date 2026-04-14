import express from 'express'

import { AirplaneController} from '../../controllers/index.js';
import { AirplaneMiddlewares } from '../../middleware/index.js'

export const router = express.Router();

router.post('/', AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane)

