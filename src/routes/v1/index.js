import express from 'express'

import {InfoController} from '../../controllers/index.js';

import { router as airplaneRoutes} from './airplane-routes.js'

import { router as cityRoutes } from './city-routes.js'

const router = express.Router();

router.use('/airplanes', airplaneRoutes)

router.use('/cities', cityRoutes)

router.get('/info', InfoController.info)

export const v1Routes = router;