const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("stripe_key");
// api

// app config
const app = express();
// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res, next) => {
  res.status(200).send("it is works");
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request recive booom! ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd", // the currency.
  });
  //Ok Created!!
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen commands let's go
exports.api = functions.https.onRequest(app);

//http://localhost:5001/faisal-alqabbani/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
