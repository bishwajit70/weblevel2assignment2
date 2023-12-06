import { Model } from 'mongoose';
import {} from 'mongoose';

export type TFullName = {
  firstName: string;
  lastName: string;
};
export type TAddress = {
  street: string;
  city: string;
  country: string;
};
export type TOrder = {
  productName: string;
  price: number;
  quantity: number;
};
export type TIUser = {
  userId: number;
  userName: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string;
  address: TAddress;
  orders: TOrder[];
};

// for creating static method

export interface UserModel extends Model<TIUser> {
  isUserExists(userId: number): Promise<TIUser | null>;
}

// for creating instance

// export type TIUserMethods = {
//   isUserExists(userId: number): Promise<TIUser | null>;
// };

// export type TUserModel = Model<TIUser, Record<string, never>, TIUserMethods>;
