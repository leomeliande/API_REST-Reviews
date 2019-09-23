const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  comentario: {
    type: String,
    required: true
  },
  plataforma: {
    type:String,
    required: true
  },
  curtido: {
    type: Boolean,
    default: false
  },
  qtdcurtido: {
    type: Number,
    default: 0
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Tasks", TaskSchema);
