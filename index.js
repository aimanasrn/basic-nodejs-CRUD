const express = require("express");
// const morgan = require("morgan");
// const helmet = require("helmet");
// const cors = require("cors");

const app = express();
const routers = require('./router/userRouter');

// app.use(morgan("dev"));
// app.use(helmet());
// app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api", routers);


// app.get("/", async (req, res) => {
//   res.json({
//     data: 'hidup usoppppp!!!!'
//   });
// });

app.listen(3001, () => {
  console.log("API server is listening on port 3001.");
});
