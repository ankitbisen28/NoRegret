import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  id: { type: Number },
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("users", UserSchema);

export default User;
