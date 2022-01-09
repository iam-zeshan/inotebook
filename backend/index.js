const connectToMongo = require("./db");
connectToMongo();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})






// When you develop a node app and you make some changes, to see them in effect you have to restart the server. When you launch your node. js application with Nodemon it will monitor for any changes and automatically restart the server, improving your productivity

// Dev dependencies are modules which are only required during development whereas dependencies are required at runtime. If you are deploying your application, dependencies has to be installed, or else your app simply will not work.