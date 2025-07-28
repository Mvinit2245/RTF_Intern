// server/routes/reviews.js
const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// GET all reviews
router.get("/", async (req, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 });
  res.json(reviews);
});

// POST a new review
router.post("/", async (req, res) => {
  const { name, text, rating } = req.body;
  const review = new Review({ name, text, rating });
  await review.save();
  res.status(201).json(review);
});

module.exports = router;
