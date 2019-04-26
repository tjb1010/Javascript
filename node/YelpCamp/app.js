const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const User = require('./models/user');

const app = express();

// configure dotenv
require('dotenv').config();

// requiring routes
const commentRoutes = require('./routes/comments');
const campgroundRoutes = require('./routes/campgrounds');
const indexRoutes = require('./routes/index');

// =======================
// MongoDB/Mongoose Config
// =======================
// assign mongoose promise library and connect to database
mongoose.Promise = global.Promise;

const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/yelp_camp';

mongoose
  .connect(databaseUri, { useNewUrlParser: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.log(`Database connection error: ${err.message}`));

// =================
// Misc Setup
// =================
app.use(express.static(`${__dirname}/public`));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
// require moment
app.locals.moment = require('moment');

// =================
// Passport Config
// =================

app.use(
  require('express-session')({
    secret: 'This is a really good secret!?',
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
});

// =================
// Routes
// =================
app.use('/', indexRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);

// =================
// SERVER
// =================
app.listen(3000, () => {
  console.log('The YelpCamp server has started on localhost:3000');
});
