import { Schema, model } from 'mongoose';
import {
  TAddress,
  TFullName,
  TIUser,
  TIUserMethods,
  TOrder,
  UserModel,
  TUserModel,
} from './user/user.interface';
import validator from 'validator';

const FullName = new Schema<TFullName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First Name is required'],
    maxlength: [20, 'First name cannot be more than 30 characters'],
    validate: {
      validator: function (value: string) {
        const fristNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return fristNameStr === value;
      },
      message: '{VALUE} is not in capitalize format',
    },
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required.'],
  },
});
const Address = new Schema<TAddress>({
  street: { type: String },
  city: { type: String },
  country: { type: String },
});

const OrderSchema = new Schema<TOrder>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const userSchema = new Schema<TIUser, UserModel>({
  userId: { type: Number, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: FullName, required: true },
  age: { type: Number, required: true },
  email: {
    type: String,
    required: [true, 'Email is requied'],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not a valid email type',
    },
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  hobbies: {
    type: String,
    enum: {
      values: ['reading', 'gardening', 'hiking', 'acting'],
      message:
        "Hobbies will be one of the following: 'reading', 'gardening', 'hiking', 'acting'.",
    },
  },
  address: { type: Address, required: true },
  orders: [OrderSchema],
});

// creating a custom static method

userSchema.statics.isUserExists = async function (userId: number) {
  const existingUser = await User.findOne({userId});
  return existingUser;
};

// creating model

// creating a custom instance method
// userSchema.methods.isUserExists = async function (userId: number) {
//   const existingUser = await User.findOne({ userId });
//   return existingUser;
// };

export const User = model<TIUser, TUserModel>('User', userSchema);
