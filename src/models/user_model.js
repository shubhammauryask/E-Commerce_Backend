const { Schema, model } = require("mongoose");
const uuid = require("uuid");
const bcrypt = require("bcrypt");

const userShema = new Schema({
  id: { type: String, unique: true },
  fullName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }, //I Want to ncript the password useing bcrypt
  phoneNumber: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  address: { type: String, default: "" },
  profileProgress: { type: Number, default: 0 }, //-?Only Account is Creatednot complet this thinges,1->Address is Writen so go on Home
  updatedOn: { type: Date },
  createdOn: { type: Date },
});

userShema.pre("save", function (next) {
  this.id = uuid.v1();
  this.updatedOn = new Date();
  this.createdOn = new Date();

  //Has the password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(this.password, salt);
  this.password = hash;

  next();
});

userShema.pre(["update", "findOneAndUpdate", "updateOne"], function (next) {
  const update = this.getUpdate();
  delete update._id;
  delete update.id;

  this.updatedOn = new Date();

  next();
});

const UserModel = model("User", userShema);

module.exports = UserModel;
