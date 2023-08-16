/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable func-call-spacing */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51NFfKvSEYf3SA4uAJshQZEDsWyadbyiKlGMbAGCLKzHGfDHcQqM41LazuKPCaGLUflYyN3iJc8W8hyFegzwANd3X00XUtIUAxQ');


// API


// APP config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API Route
// app.get("/payments/create", (request, response) => response.status(201).send("payment"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received ", total);

  const PaymentIntent = await stripe.paymentIntents.create(
    {
        amount: total,
        currency: "inr",
    },
  );

  // OK -Created
  response.status(201).send({
    clientSecret: PaymentIntent.client_secret,
  });

  console.log(PaymentIntent.client_secret);
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
//  http://127.0.0.1:5001/clone-6618c/us-central1/api
