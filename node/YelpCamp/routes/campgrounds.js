var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware");

// Index (list of campgrounds)
router.get("/", function(req, res) {
  Campground.find({}, function(err, campgrounds) {
    if (err) {
      req.flash("error", "Something went wrong, please reload the page");
      console.log(err);
    } else {
      res.render("campgrounds/index", { campgrounds: campgrounds });
    }
  });
});

// Create (creates new campground)
router.post("/", middleware.isLoggedIn, function(req, res) {
  var name = req.body.name;
  var price = req.body.price;
  var image = req.body.image;
  var description = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  var newCampground = {
    name: name,
    price: price,
    image: image,
    description: description,
    author: author
  };
  Campground.create(newCampground, function(err, campground) {
    if (err) {
      req.flash("error", "Oops! Something went wrong. Please try again!");
      res.redirect("/");
    } else {
      req.flash("success", "Campground created successfully");
      res.redirect("/campgrounds");
    }
  });
});

// New (form to submit new campground)
router.get("/new", middleware.isLoggedIn, function(req, res) {
  res.render("campgrounds/new");
});

// Show (show info about one campground)
router.get("/:id", function(req, res) {
  Campground.findById(req.params.id)
    .populate("comments")
    .exec(function(err, foundCampground) {
      if (err) {
        req.flash("error", "Oops! Something went wrong. Please try again!");
      } else {
        res.render("campgrounds/show", { campground: foundCampground });
      }
    });
});

// Edit (show form to update campground)
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(
  req,
  res
) {
  Campground.findById(req.params.id, function(err, campground) {
    res.render("campgrounds/edit", { campground: campground });
  });
});

// Update (send edit form as update to a campground)
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res) {
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(
    err
  ) {
    if (err) {
      req.flash("error", "Oops! Something went wrong. Please try again!");
      res.redirect("back");
    } else {
      req.flash("success", "Successfully updated campground info!");
      res.redirect("/campgrounds");
    }
  });
});

// Destroy (delete campground and associated comments)
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res) {
  Campground.findByIdAndRemove(req.params.id, function(err, campground) {
    if (err) {
      req.flash("error", "Oops! Something went wrong. Please try again!");
      res.redirect("/campgrounds");
    } else {
      Comment.deleteMany({ _id: { $in: campground.comments } }, function(err) {
        if (err) {
          req.flash("error", "Oops! Something went wrong. Please try again!");
        }
      });
      req.flash("success", "Campground successfully deleted");
      res.redirect("/campgrounds");
    }
  });
});

module.exports = router;
