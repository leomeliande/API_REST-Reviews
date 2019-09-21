const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://leomeliande:mongo2508@cluster0-ntee5.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Banco de dados conectado');
})

// require any models

require("../models/Task");
