const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/assets"));

app.get("", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});