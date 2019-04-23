var Campground = require("../models/campground");
var Comment = require("../models/comment");

var middlewareObj = {
  checkCampgroundOwnership: function(req, res, next) {
    if (req.isAuthenticated()) {
      Campground.findById(req.params.id, function(err, campground) {
        if (err || !campground) {
          req.flash("error", "Campground couldn't be found...");
          res.redirect("/campgrounds");
        } else if (campground.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash("error", "You don't have permission to do that.");
          res.redirect("back");
        }
      });
    } else {
      req.flash("error", "You need to be logged in to do that!");
      res.redirect("back");
    }
  },
  checkCommentOwnership: function(req, res, next) {
    if (req.isAuthenticated()) {
      Comment.findById(req.params.comment_id, function(err, comment) {
        if (err || !comment) {
          res.redirect("/campgrounds");
        } else if (comment.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash("error", "You don't have permission to do that.");
          res.redirect("back");
        }
      });
    } else {
      req.flash("error", "You need to be logged in to do that!");
      res.redirect("back");
    }
  },
  isLoggedIn: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("error", "You need to be logged in to do that!");
    res.redirect("/login");
  },
  isSafe: function(req, res, next) {
    if (req.body.image.match(/^https:\/\/images\.unsplash\.com\/.*/)) {
      next();
    } else {
      req.flash(
        "error",
        "Only images from images.unsplash.com allowed.\nSee https://youtu.be/Bn3weNRQRDE for how to copy image urls from unsplash."
      );
      res.redirect("back");
    }
  }
};

module.exports = middlewareObj;
