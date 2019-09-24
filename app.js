// app.js

const express = require("express");
const bodyParser = require("body-parser");
const reviewController = require("./controllers/ReviewController");

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS

app
  .route("/reviews")
  .get(reviewController.listAllReviews)
  .post(reviewController.createNewReview);

app
  .route("/reviews/:reviewid")
  .get(reviewController.readReview)
  .put(reviewController.updateReview)
  .delete(reviewController.deleteReview);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
