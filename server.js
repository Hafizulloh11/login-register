const express = require("express");
const cors = require("cors");
const connectBase = require("./configs/database");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", require("./routes/userRoutes"));

const PORT = process.env.PORT || 4200;

connectBase();

const server = app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
