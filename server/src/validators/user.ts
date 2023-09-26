import { z } from 'zod';

// Create user schema validator
export const createUserSchema = z.object(
  {
    personal_id: z.string({
      required_error: 'Personal ID is required.',
      invalid_type_error: 'Personal ID must be a string.',
    }),
    first_name: z.string({
      required_error: 'First name is required.',
      invalid_type_error: 'First name must be a string.',
    }),
    last_name: z.string({
      required_error: 'Last name is required.',
      invalid_type_error: 'Last name must be a string.',
    }),
    email: z.string({
      required_error: 'Email is required.',
      invalid_type_error: 'Email must be a string.',
    }),
    phone_number: z.string({
      required_error: 'Phone number is required.',
      invalid_type_error: 'Phone number must be a string.',
    }),
    password: z
      .string({
        required_error: 'Password is required.',
        invalid_type_error: 'Password must be a string.',
      })
      .min(8, { message: 'Password should be atleast 8 characters long.' }),
    store: z.string({
      required_error: 'Store is required.',
      invalid_type_error: 'Store must be a string.',
    }),
    role: z.enum(['admin', 'super_admin', 'cashier', 'mechanic', 'manager'], {
      required_error: 'Role is required.',
    }),
  },
  {
    required_error: 'Data is required.',
    invalid_type_error: 'Data must be an object.',
  },
);

// Read user schema validator
export const readUserSchema = z.object(
  {
    id: z.string({
      required_error: 'User id is required.',
      invalid_type_error: 'User id must be a string.',
    }),
  },
  {
    required_error: 'Data is required.',
    invalid_type_error: 'Data must be an object.',
  },
);

// Update user schema validator
export const updateUserSchema = z.object(
  {
    id: z.string({
      required_error: 'User id is required.',
      invalid_type_error: 'User id must be a string.',
    }),
    personal_id: z.string({
      required_error: 'Personal ID is required.',
      invalid_type_error: 'Personal ID must be a string.',
    }),
    first_name: z.string({
      required_error: 'First name is required.',
      invalid_type_error: 'First name must be a string.',
    }),
    last_name: z.string({
      required_error: 'Last name is required.',
      invalid_type_error: 'Last name must be a string.',
    }),
    email: z.string({
      required_error: 'Email is required.',
      invalid_type_error: 'Email must be a string.',
    }),
    phone_number: z.string({
      required_error: 'Phone number is required.',
      invalid_type_error: 'Phone number must be a string.',
    }),
    password: z
      .string({
        required_error: 'Password is required.',
        invalid_type_error: 'Password must be a string.',
      })
      .min(8, { message: 'Password should be atleast 8 characters long.' }),
    store: z.string({
      required_error: 'Store is required.',
      invalid_type_error: 'Store must be a string.',
    }),
    role: z.enum(['admin', 'super_admin', 'cashier', 'mechanic', 'manager'], {
      required_error: 'Role is required.',
    }),
  },
  {
    required_error: 'Data is required.',
    invalid_type_error: 'Data must be an object.',
  },
);

// Delete user schema validator
export const deleteUserSchema = z.object(
  {
    id: z.string({
      required_error: 'User id is required.',
      invalid_type_error: 'User id must be a string.',
    }),
  },
  {
    required_error: 'Data is required.',
    invalid_type_error: 'Data must be an object.',
  },
);
