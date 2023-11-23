import {} from 'mongoose';

export type FullName = {
  firstName: string;
  lastName: string;
};
export type Address={
  street: string;
  city: string;
  country: string;
}

export type IUser = {
  userId: number;
  username: string;
  password: string;
  fullName: FullName;
  age: number;
  email: string;
  isActive: 'active' | 'inactive';
  hobbies:string ;
  address: Address;
};