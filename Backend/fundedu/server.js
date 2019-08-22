const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const cors = require("cors");

const app = express();

console.log('app started');

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json());

var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

const db = require("./config/keys").mongoURI;

mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

    app.use(passport.initialize());

    app.get('/', (req, res) => {
        console.log('main run');
        res.send({"working": "true"})
    })

    require("./config/passport")(passport);


    app.use("/api/users", users)

    const port = 5000;
    app.listen(port, () => console.log(`Server up and running on port ${port}`));