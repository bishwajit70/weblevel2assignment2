import { Schema, model, connect } from 'mongoose';

export interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: 'active'|'inactive';
  hobbies: [string, string];
  address: {
    street: string;
    city: string;
    country: string;
  };
}
