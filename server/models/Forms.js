import mongoose from "mongoose";

// const CardSchema = new mongoose.Schema({
//   text: String,
// });

const FormSchema = new mongoose.Schema({
  title: String,
  color: String,
  formIndex: Number,
  cards: [Object],
});

const Forms = mongoose.model("Forms", FormSchema);

export default Forms;
