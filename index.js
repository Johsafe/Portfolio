const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));




const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`Server running on port ${port} 👌👌`);
    });