const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://blocko-labs:passwordpassword@chat-app.xbcra.mongodb.net/node-assignment-db?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("db successfully connected."))
    .catch((err) => console.log(err));