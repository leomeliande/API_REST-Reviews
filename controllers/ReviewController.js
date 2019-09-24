const Review = require("../models/Review");

exports.listAllReviews = (req, res) => {
  Review.find({}, (err, review) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(review);
  });
};

exports.createNewReview = (req, res) => {
  let newReview = new Review(req.body);
  newReview.save((err, review) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(review);
  });
};

exports.readReview = (req, res) => {
  Review.findById(req.params.reviewid, (err, review) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(review);
  });
};

exports.updateReview = (req, res) => {
  Review.findOneAndUpdate(
    { _id: req.params.reviewid },
    req.body,
    { new: true },
    (err, review) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(review);
    }
  );
};

exports.deleteReview = (req, res) => {
  Review.deleteOne({ _id: req.params.reviewid }, (err, review) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Review deletada com sucesso!" });
  });
};
