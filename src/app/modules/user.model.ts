import { Schema, model } from 'mongoose';
import { Address, FullName, IUser, Orders } from './user/user.interface';

const FullName = new Schema<FullName>({
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
});
const Address = new Schema<Address>({
  street: { type: String },
  city: { type: String },
  country: { type: String },
});

const Orders = new Schema<Orders>({
  productName: String,
  price: Number,
  quantity: Number,
});

const userSchema = new Schema<IUser>({
  userId: { type: Number, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: FullName, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  isActive: {
    type: Boolean,
    required:true,
  },
  hobbies: {
    type: String,
    enum: {
      values: ['reading', 'gardening', 'hiking', 'acting'],
      message:
        "Hobbies will be one of the following: 'reading', 'gardening', 'hiking', 'acting'",
    },
  },
  address: { type: Address, required: true },
  orders: [{ type: Orders }],
});

// creating model

export const UserModel = model<IUser>('User', userSchema);
