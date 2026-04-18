import express from 'express'

import { CityController } from '../../controllers/index.js';
import { CityMiddlewares } from '../../middleware/index.js';

export const router = express.Router();

// /api/v1/cities POST
router.post('/', CityMiddlewares.validateCreateRequest, CityController.createCity)
