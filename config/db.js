const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://leomeliande:VDeOWJTeyhPkxxRy@review-pwact.mongodb.net/test?retryWrites=true&w=majority retryWrites=true";

mongoose.connect(dbURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Banco de dados conectado');
})

// require any models

require("../models/Task");
