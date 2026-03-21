import express from 'express'

import { InfoController } from '../../controllers/info-controller.js';

const router = express.Router();

router.get('/info', InfoController)

export const v1Routes = router;