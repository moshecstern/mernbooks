const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const User = require("./models/user")
const jwt = require("jsonwebtoken")
const jwtSecret = require('./config/jwtConfig')
const passport = require("passport")
require('./config/passport');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('*', function(req, res, next) {
  //replace localhost:8080 to the ip address:port of your server
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next(); 
  });

  app.options('*', cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

app.post('/registerUser', (req, res, next) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.error("error here" + err);
    }
    if (info !== undefined) {
      console.error(info.message);
      res.status(403).send(info.message);
    } else {
      // eslint-disable-next-line no-unused-vars
      res.status(200).send({ message: 'user created' });
    }
  })(req, res, next);
});

app.post('/loginUser', (req, res, next) => {
  passport.authenticate('login', (err, users, info) => {
    if (err) {
      console.error(`error ${err}`);
    }
    if (info !== undefined) {
      console.error(info.message);
      if (info.message === 'bad username') {
        res.status(401).send(info.message);
      } else {
        res.status(403).send(info.message);
      }
    } else {
        User.findOne({ username: req.body.username
        }).then(user => {
          const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
            expiresIn: 60 * 60,
          });
          res.status(200).send({
            auth: true,
            token,
            message: 'user found & logged in',
          });
        });
    }
  })(req, res, next);
});

app.get(
  "/auth/google", (req, res, next) =>{
    console.log("here....")
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })(req, res, next)
}
);

app.get(
  "/auth/google/callback", (req, res, next) =>{
    passport.authenticate("google", (err, user, info) => {
      const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
        expiresIn: 60 * 60,
      });
      res.cookie('JWT', token)
      res.redirect("/home")
    })(req, res, next)
  }
);




// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.json({ extended: false }));


// app.use('/api/users', require('./routes/users'));
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/contacts', require('./routes/contacts'));


// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// app.use(cors());
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/comicbookdb", { useNewUrlParser: true });
app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/comicbookdb", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
// Send every other request to the React app
// Define any API routes before this runs

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
  // Set static folder
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   );
// }




app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
// const express = require('express');
// const connectDB = require('./config/db');
// const path = require('path');

// const app = express();

// // Connect Database
// connectDB();

// // Init Middleware
// app.use(express.json({ extended: false }));

// // Define Routes
// app.use('/api/users', require('./routes/users'));
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/contacts', require('./routes/contacts'));

// // Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   );
// }

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
