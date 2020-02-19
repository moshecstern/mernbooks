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
const Stripe = require("stripe")
const dotenv = require('dotenv');
require('./config/passport');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('*', function(req, res, next) {
  //replace localhost:8080 to the ip address:port of your server
  res.header("Access-Control-Allow-Origin", process.env.PORT||"http://localhost:3001");
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
// Add routes, both API and view   STRIPE
app.get('/', (req, res) => {
  res.send({
    message: 'Ping from Checkout Server',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV,
  });
})
app.post('/payment/session-initiate', async (req, res) => {
  const {
    clientReferenceId,
    customerEmail,
    lineItem,
    successUrl,
    cancelUrl,
  } = req.body;

  // const stripe = Stripe('sk_test_xNW92P513GLaZ66DZDbkqYKJ004ahKjPlw');
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY||'sk_test_xNW92P513GLaZ66DZDbkqYKJ004ahKjPlw');

  let session;

  try {
    session = await stripe.checkout.sessions.create({
      client_reference_id: clientReferenceId,
      customer_email: customerEmail,
      payment_method_types: ['card'],
      line_items: [lineItem],
      payment_intent_data: {
        description: `${lineItem.name} ${lineItem.description}`,
      },
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
  } catch (error) {
    res.status(500).send({ error });
  }

  return res.status(200).send(session);
});
app.post('/payment/session-complete', async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      req.headers['stripe-signature'],
      process.env.STRIPE_PUBLISHABLE_KEY||'pk_test_XxtjpEXLFbdljxFdiXtqbyte00eGPoT2JU'
    );
  } catch (error) {
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      // complete your customer's order
      // e.g. save the purchased product into your database
      // take the clientReferenceId to map your customer to a product
    } catch (error) {
      return res.status(404).send({ error, session });
    }
  }

  return res.status(200).send({ received: true });
});
// USER AUTH
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
          const token = jwt.sign({ id: user.id, username: user.username }, jwtSecret.secret, {
            expiresIn: 60 * 60,
          });
          res.status(200).send({
            auth: true,
            token,
            message: 'user found & logged in',
          })
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

app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/comicbookdb", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
