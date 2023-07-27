const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logsheetSchema = new Schema(
  {
    username: { type: String, required: true },
    shiftDate: { type: Date, required: true },
    project: { type: String, required: true },
    accountName: { type: String, required: true },
    fiCase: { type: Number, required: true },
    notes: { type: String },
    vID: { type: String, required: true },
    eID: { type: String, required: true },
    previewLink: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Logsheet = mongoose.model("Logsheet", logsheetSchema);

module.exports = Logsheet;
