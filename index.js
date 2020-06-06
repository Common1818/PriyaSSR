import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./src/App";
import * as functions from "firebase-functions";

const path = require("path");
const fs = require("fs");

const app = express();
// var BUILD_DIR = path.join(__dirname, 'build')

// app.use(express.static(BUILD_DIR))

app.get("**", (req, res) => {
  console.log("cloud function requested");
  const context = {};
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App display={"this is a prop from server"} />
    </StaticRouter>
  );
  const filePath = path.resolve(__dirname, "hosting", "index.html");
  let index = fs.readFileSync(filePath, "utf8");
  index = index.toString();
  const finalHtml = index.replace("<!---- ::APP:: ---->", html);
  // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
  res.send(finalHtml);
});
export let ssrapp = functions.https.onRequest(app);
