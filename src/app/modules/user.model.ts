import { Schema, model } from 'mongoose';
import { IUser } from './user/user.interface';

const userSchema = new Schema<IUser>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
    required: true,
  },
  hobbies: {
    type: String,
    enum: {
      values: ['reading', 'gardening', 'hiking', 'acting'],
      message:
        "Hobbies will be one of the following: 'reading', 'gardening', 'hiking', 'acting'",
    },
  },
  address: {
    street: { type: String },
    city: { type: String },
    country: { type: String },
  },
  orders: [
    {
      productName: {type: String,},
      price: {type: Number,},
      quantity: {type: Number,},
    },
  ],
});

// creating model

export const UserModel = model<IUser>('User', userSchema);
