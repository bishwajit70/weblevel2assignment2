// import { z } from 'zod';

// const fullNameValidationSchema = z.object({
//   firstName: z.string().trim(),
//   lastName: z.string().trim(),
// });

// const addressValidationSchema = z.object({
//   street: z.string(),
//   city: z.string(),
//   country: z.string(),
// });

// const orderValidationSchema = z.object({
//   productName: z.string(),
//   price: z.number(),
//   quantity: z.number(),
// });

// const userValidationSchema = z.object({
//   userId: z.number(),
//   userName: z.string(),
//   password: z.string(),
//   fullName: fullNameValidationSchema.required(),
//   age: z.number(),
//   email: z.string(),
//   isActive: z.boolean().default(true),
//   hobbies: z.enum(['reading', 'gardening', 'hiking', 'acting']),
//   address: addressValidationSchema,
//   orders: z.string.array(orderValidationSchema),
// });

// export default userValidationSchema;
