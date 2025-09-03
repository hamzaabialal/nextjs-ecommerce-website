import { Schema, model, models, InferSchemaType } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    images: [String],
    brand: { type: String, required: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true },
    listPrice: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    tags: { type: [String], default: ["new arrival"] },
    colors: { type: [String], default: ["White", "Red", "Black"] },
    sizes: { type: [String], default: ["S", "M", "L"] },
    avgRating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    ratingDistribution: [
      {
        rating: { type: Number, required: true },
        count: { type: Number, required: true },
      },
    ],
    numSales: { type: Number, required: true, default: 0 },
    isPublished: { type: Boolean, required: true, default: false },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

// Let Mongoose infer the type from schema
export type IProduct = InferSchemaType<typeof productSchema>;

const Product =
  models.Product || model<IProduct>("Product", productSchema);

export default Product;
