// https://github.com/felixyu9/nodejs-express-on-aws-ec2
// https://github.com/felixyu9/nodejs-express-on-aws-ec2/blob/main/README.md
// https://www.youtube.com/watch?v=9ecjsd-jim4

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 1.1</p>"
  );
});

app.get("/products", (req, res) => {
  res.send([
    {
      productId: "101",
      price: 100,
    },
    {
      productId: "102",
      price: 150,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Demo app is up and listening to port: ${port}`);
});
