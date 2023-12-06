import { z } from 'zod';

export const FullNameSchema = z.object({
    firstName: z
      .string()
      .min(1)
      .max(20)
      .refine((value) => value.charAt(0).toUpperCase() + value.slice(1) === value, {
        message: 'First name must start with a capital letter',
      }),
    lastName: z.string(),
  });
  
  export const AddressSchema = z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  });
  
  export const OrderSchema = z.object({
    productName: z.string(),
    price: z.number().positive(),
    quantity: z.number().positive(),
  });
  
  export const UserValidationSchema = z.object({
    userId: z.number().positive().int(),
    userName: z.string().min(1).max(255),
    password: z.string().min(1),
    fullName: FullNameSchema,
    age: z.number().positive().int(),
    email: z.string().email(),
    isActive: z.boolean(),
    hobbies: z.enum(['reading', 'gardening', 'hiking', 'acting']),
    address: AddressSchema,
    orders: z.array(OrderSchema),
  });
  
  export default UserValidationSchema;
