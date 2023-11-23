import { Schema, model } from 'mongoose';
import { IUser } from './user/user.interface';

const userSchema = new Schema<IUser>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: ['active', 'inactive'],
  hobbies: { type: String },
  address: {
    street: { type: String },
    city: { type: String },
    country: { type: String },
  },
});

// creating model

export const UserModel = model<IUser>('User', userSchema);
