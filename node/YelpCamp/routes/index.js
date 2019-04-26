var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//root route
router.get("/", function(req, res) {
  res.render("landing");
});

// show register form
router.get("/register", function(req, res) {
  res.render("auth/register", { page: "register" });
});

//handle sign up logic
router.post("/register", function(req, res) {
  var newUser = new User({ username: req.body.username });
  if (req.body.adminCode === process.env.ADMIN_CODE) {
    newUser.isAdmin = true;
  }
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      return res.render("auth/register", { error: err.message });
    }
    passport.authenticate("local")(req, res, function() {
      req.flash(
        "success",
        "Successfully Signed Up! Welcome to YelpCamp, " +
          req.body.username +
          "!"
      );
      res.redirect("/campgrounds");
    });
  });
});

//show login form
router.get("/login", function(req, res) {
  res.render("auth/login", { page: "login" });
});

//handling login logic
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "auth/login",
    failureFlash: true,
    successFlash: "Welcome back!"
  }),
  function(req, res) {}
);

// logout route
router.get("/logout", function(req, res) {
  req.logout();
  req.flash("success", "See you later!");
  res.redirect("/campgrounds");
});

module.exports = router;
