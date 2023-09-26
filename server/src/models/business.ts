import { InferSchemaType, model, Schema } from 'mongoose';

const businessSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

type Business = InferSchemaType<typeof businessSchema>;

export const BusinessModel = model<Business>('Business', businessSchema);
