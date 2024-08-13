import { Router } from "express";

const berthRouter = Router();

berthRouter.get("/", (req, res) => {
  console.log("Inside berth...");
  res.json({ message: "Berth route" });
});

export default berthRouter;
