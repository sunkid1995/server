import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username không được để trống!'],
  },

  phone: {
    type: Number,
    required: [true, 'Phone không được để trống!'],
  },

  email: {
    type: String,
    required: [true, 'Email không được để trống!'],
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
    required: [true],
    minlength: [6, 'Password phải nhiều hơn 6 kí tự!'],
  },

  token: {
    type: String,
    default: null,
  },

}, { timestamps: true });

const userModels = mongoose.model('Users', userSchema);

export default userModels;
