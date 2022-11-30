// Call in installed dependencies
const loaders = require("./loaders");
const express = require("express");
// // set up express app
// const app = express();
// // set up port number
// const port = 5035;
// // set up home route
// app.get("/", (request, respond) => {
//   respond.status(200).json({
//     message: "Welcome to Project Support"
//   });
// });
// app.listen(port, (request, respond) => {
//   console.log(`Our server is live on ${port}. Yay!`);
// });

async function startServer() {
  const app = express();

  // set up port number
  const port = 5035;
  // set up home route
  app.get("/", (request, respond) => {
    respond.status(200).json({
      message: "Welcome to Project Support",
    });
  });
  await loaders.init({ expressApp: app });

  app.listen(port, (request, respond) => {
    console.log(`Our server is live on ${port}. Yay!`);
  });
}

startServer();
