const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const app = express();
const port = process.env.PORT || 3001;

//Bodyparsing
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,

}
//Used for restricting access requests.
app.use(cors(corsOptions));

//Mapping all endpoints through routes
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.listen(port, () => console.log(`Server is running on port ${port}`));
