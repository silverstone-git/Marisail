import { Router } from "express";
import homeRouter from "./routes/home.js";
import advertBerthRouter from "./routes/advert_berth.js";
import advertEngineRouter from "./routes/advert_engine.js";
import advertTrailerRouter from "./routes/advert_trailer.js";
import searchEngineRouter from "./routes/search_engine.js";
import searchTrailerRouter from "./routes/search_trailer.js";
import advertCharterRouter from "./routes/advert_charter.js";
import advertTransportRouter from "./routes/advert_transport.js";
import advertChandleryRouter from "./routes/advert_shop.js";

const router = Router();

// Use the homeRouter for requests to /api/home
router.use("/home", homeRouter);

router.use("/advert_berth", advertBerthRouter);

router.use("/advert_engine", advertEngineRouter);

router.use("/trailers", advertTrailerRouter);

router.use("/search_engine", searchEngineRouter);

router.use("/search_trailer", searchTrailerRouter);

router.use("/advert_charter", advertCharterRouter);

router.use("/advert_transport", advertTransportRouter);

router.use("/advert_chandlery", advertChandleryRouter);

// Export the router
export default router;
