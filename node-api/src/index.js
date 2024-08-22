import { Router } from "express";
import homeRouter from "./routes/home.js";
import berthRouter from "./routes/berths.js";
import advertEngineRouter from "./routes/advert_engine.js";
import trailersRouter from "./routes/trailers.js";

const router = Router();

// Use the homeRouter for requests to /api/home
router.use("/home", homeRouter);

// Use the berthRouter for requests to /api/berth
router.use("/berth", berthRouter);

router.use("/advert_engine", advertEngineRouter);

router.use('/trailers',trailersRouter);


// Export the router
export default router;
