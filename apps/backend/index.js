const express = require("express");
const cors = require("cors");
const axios = require("axios");
const e = require("express");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/recreq", async (req, res) => {
  try {
    let reqObj = {};
    Object.assign(reqObj, { ["url"]: req.body.url });
    Object.assign(reqObj, { ["method"]: req.body.method });
    Object.assign(reqObj, { ["body"]: req.body.body });
    Object.assign(reqObj, { ["headers"]: req.body.header });
    console.log(reqObj.body);
    console.log(reqObj.method);
    let response = { data: "Hello World" };

    if (reqObj.method === "GET") {
      response = await axios.get(reqObj.url, reqObj.body, {
        headers: reqObj.headers,
      });
    } else if (reqObj.method === "POST") {
      response = await axios.post(reqObj.url, reqObj.body, {
        headers: reqObj.headers,
      });
    } else if (reqObj.method === "PUT") {
      response = await axios.put(reqObj.url, reqObj.body, {
        headers: reqObj.headers,
      });
    } else if (reqObj.method === "DELETE") {
      response = await axios.delete(reqObj.url, reqObj.body, {
        headers: reqObj.headers,
      });
    } else if (reqObj.method === "PATCH") {
      response = await axios.patch(reqObj.url, reqObj.body, {
        headers: reqObj.headers,
      });
    } else {
      res.status(400).send("Invalid Method");
    }
    console.log(reqObj.body);
    res.status(200).send(response.data);
  } catch (er) {
    console.log(er);
    res.status(400).send("Something Went Wrong");
  }
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Example app listening on port ${port} @ ${"127.0.0.1"}`);
});
