const express = require("express");
const Campground = require("../models/campground");
const Comment = require("../models/comment");
const middleware = require("../middleware");

const router = express.Router();

const { isLoggedIn, checkUserCampground, isSafe } = middleware; // destructuring assignment

// INDEX - show all campgrounds
router.get("/", (req, res) => {
  // Get all campgrounds from DB
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      req.flash("error", "Something went wrong, please try again.");
    } else if (req.xhr) {
      res.json(allCampgrounds);
    } else {
      res.render("campgrounds/index", {
        campgrounds: allCampgrounds,
        page: "campgrounds"
      });
    }
  });
});

// CREATE - add new campground to DB
router.post("/", isLoggedIn, isSafe, (req, res) => {
  // get data from form and add to campgrounds array
  const { name, image, location, description, price } = req.body;
  const author = {
    id: req.user._id,
    username: req.user.username
  };
  const newCampground = {
    name,
    image,
    price,
    description,
    location,
    author
  };

  // Create a new campground and save to DB
  Campground.create(newCampground, (err, campground) => {
    if (err) {
      console.log(err);
    } else {
      // redirect back to campgrounds page
      console.log(campground);
      res.redirect("/campgrounds");
    }
  });
});

// NEW - show form to create new campground
router.get("/new", isLoggedIn, (req, res) => {
  res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
router.get("/:id", (req, res) => {
  // find the campground with provided ID
  Campground.findById(req.params.id)
    .populate("comments")
    .exec((err, foundCampground) => {
      if (err || !foundCampground) {
        console.log(err);
        req.flash("error", "Sorry, that campground does not exist!");
        return res.redirect("/campgrounds");
      }
      console.log(foundCampground);
      // render show template with that campground
      return res.render("campgrounds/show", { campground: foundCampground });
    });
});

// EDIT - shows edit form for a campground
router.get("/:id/edit", isLoggedIn, checkUserCampground, (req, res) => {
  // render edit template with that campground
  res.render("campgrounds/edit", { campground: req.campground });
});

// PUT - updates campground in the database
router.put("/:id", isLoggedIn, (req, res) => {
  const { name, image, location, description, price } = req.body;
  const newData = {
    name,
    image,
    description,
    location,
    price
  };
  Campground.findByIdAndUpdate(
    req.params.id,
    { $set: newData },
    (err, campground) => {
      if (err) {
        req.flash("error", err.message);
        res.redirect("back");
      } else {
        req.flash("success", "Successfully Updated!");
        res.redirect(`/campgrounds/${campground._id}`);
      }
    }
  );
});

// DELETE - removes campground and its comments from the database
router.delete("/:id", isLoggedIn, checkUserCampground, (req, res) => {
  Comment.remove(
    {
      _id: {
        $in: req.campground.comments
      }
    },
    err => {
      if (err) {
        req.flash("error", err.message);
        res.redirect("/");
      } else {
        req.campground.remove(err => {
          if (err) {
            req.flash("error", err.message);
            return res.redirect("/");
          }
          req.flash("error", "Campground deleted!");
          return res.redirect("/campgrounds");
        });
      }
    }
  );
});

module.exports = router;
