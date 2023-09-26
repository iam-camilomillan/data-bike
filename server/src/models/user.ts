import { InferSchemaType, model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    personal_id: {
      type: String,
      required: true,
      unique: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    store: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      enum: ['admin', 'super_admin', 'cashier', 'mechanic', 'manager'],
    },
  },
  { timestamps: true },
);

type User = InferSchemaType<typeof userSchema>;

export const UserModel = model<User>('User', userSchema);
