import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    location: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zipcode: {
        type: String,
      },
    },
    beds: {
      type: Number,
      required: true,
    },
    baths: {
      type: Number,
      required: true,
    },
    square_feet: {
      type: Number,
      required: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: {
        type: number,
      },
      weekly: {
        type: number,
      },
      monthly: {
        type: number,
      },
    },
    seller_info: {
      name: {
        type: string,
      },
      email: {
        type: string,
      },
      phone: {
        type: string,
      },
    },
    images: [
      {
        type: string,
      },
    ],
    is_Featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Property = models.property || model("Property", PropertySchema);
export default Property;
