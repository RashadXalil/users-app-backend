const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'name is required!'],
    },
    lastname: {
      type: String,
      required: [true, 'lastname is required!'],
    },
    email: {
      type: String,
      required: [true, 'email is required'],
    },
    birthday: {
      type: Date,
      required: [true, 'birthday is required'],
    },
    isDeleted: {
      type: Boolean,
      default: () => false,
    },
  },
  {
    timestamps: true,
  },
)
const UserModel = mongoose.model('Users', UserSchema)
module.exports = UserModel
