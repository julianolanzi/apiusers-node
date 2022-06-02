const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://julianolanzi:72645263@cluster0.4rfq6.mongodb.net/?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
    });

const db = mongoose.connection;
db.on("error", (error) => {
    console.error(error);
});

db.once("open", () => console.log("Connected to the database sucess"));

mongoose.Promise = global.Promise;

module.exports = mongoose;