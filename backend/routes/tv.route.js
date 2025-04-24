import express from 'express';

import { getTrendingTv } from '../controllers/tv.controller.js';
import { getTvTrailers } from '../controllers/tv.controller.js';    
import { getTvDetails } from '../controllers/tv.controller.js';
import { getSimilarTv } from '../controllers/tv.controller.js';
import { getTvByCategory } from '../controllers/tv.controller.js';


const router = express.Router();

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTv);
router.get("/:category", getTvByCategory);

export default router;