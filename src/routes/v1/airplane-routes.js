import express from 'express'

import { AirplaneController} from '../../controllers/index.js';
import { AirplaneMiddlewares } from '../../middleware/index.js'

export const router = express.Router();

// /api/v1/airplanes POST
router.post('/', AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane)

// /api/v1/airplanes GET

router.get('/', AirplaneController.getAirplanes)