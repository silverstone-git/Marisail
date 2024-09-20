import { Router } from "express";
import homeRouter from "./routes/home.js";
import advertBerthRouter from "./routes/advert_berth.js";
import advertEngineRouter from "./routes/advert_engine.js";
import advertTrailerRouter from "./routes/advert_trailer.js";
import searchEngineRouter from "./routes/search_engine.js";
import searchTrailerRouter from "./routes/search_trailer.js";
import searchBerthRouter from "./routes/search_berth.js";
import searchShopRouter from "./routes/search_Shop.js";
import searchCharterRouter from "./routes/search_charter.js";
import searchTransportRouter from "./routes/search_transport.js";

const router = Router();

// Use the homeRouter for requests to /api/home
router.use("/home", homeRouter);

router.use("/advert_berth", advertBerthRouter);

router.use("/advert_engine", advertEngineRouter);

router.use("/trailers", advertTrailerRouter);

router.use("/search_engine", searchEngineRouter);

router.use("/search_trailer", searchTrailerRouter);

router.use("/search_berth", searchBerthRouter);

router.use("/search_Shop", searchShopRouter);

router.use("/search_charter", searchCharterRouter);

router.use("/search_transport", searchTransportRouter);




// Export the router
export default router;
