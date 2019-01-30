import mongoose from 'mongoose';

const message = 'không được để trống!';

const userSchema = new mongoose.Schema({
  firtname: {
    type: String,
    required: [true, message],
  },

  lastname: {
    type: String,
    required: [true, message],
  },

  fullname: {
    type: String,
  },

  username: {
    type: String,
    required: [true, message],
  },

  phone: {
    type: Number,
    required: [true, message],
  },

  email: {
    type: String,
    required: [true, message],
    unique: true,
    lowercase: true,
    validate: {
      validator(email) {
        const emailRegex = /^[-a-z0-9%S_+]+(\.[-a-z0-9%S_+]+)*@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i;
        return emailRegex.test(email);
      },
      message: '{VALUE} không phải là một địa chỉ email hợp lệ',
    },
  },

  password: {
    type: String,
    required: [true, message],
    minlength: [6, 'Password phải nhiều hơn 6 kí tự!'],
  },

  token: {
    type: String,
    default: null,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },

}, { timestamps: true });

const userModels = mongoose.model('Users', userSchema);

export default userModels;
