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
export type Orders = {
  producName: string,
  price:number,
  quantity:number,
}

export type IUser = {
  userId: number;
  username: string;
  password: string;
  fullName: FullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies:string ;
  address: Address;
  orders:Orders
};
