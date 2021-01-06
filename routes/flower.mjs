import express from "express";
import { flowers } from "../model/flowers.mjs";

const route = express.Router();

route.get("/", async (req, res) => {});

route.post("/", async (req, res) => {
  try {
    const Flower = new flowers({
      Name: req.body.Name,
      Quantity: req.body.Quantity,
      amount: req.body.amount,
    });
    const a1 = await Flower.save();
    res.status(200).send({ message: "Saved Successful" });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default route;
