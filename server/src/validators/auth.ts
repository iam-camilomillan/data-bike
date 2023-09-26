import { z } from 'zod';

// Login schema validator
export const loginSchema = z.object(
  {
    username: z
      .string({
        required_error: 'Username is required.',
        invalid_type_error: 'Username must be a string.',
      })
      .min(1, { message: "Username shouldn't be empty." }),
    password: z
      .string({
        required_error: 'Password is required.',
        invalid_type_error: 'Password must be a string.',
      })
      .min(8, { message: 'Password should be atleast 8 characters long.' }),
  },
  {
    required_error: 'Data is required.',
    invalid_type_error: 'Data must be an object.',
  },
);
