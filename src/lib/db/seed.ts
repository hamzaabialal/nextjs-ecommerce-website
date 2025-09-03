import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd()); // ✅ loads .env.local into process.env

import { connectToDatabase } from "./index";
import Product from "@/lib/db/models/product.models";
import { products } from "@/lib/data";

async function main() {
  try {
    // ✅ Ensure DATABASE_URL exists
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is missing in .env.local");
    }

    // ✅ Connect to DB
    await connectToDatabase(process.env.DATABASE_URL);

    // ✅ Clear old products
    await Product.deleteMany({});

    // ✅ Insert new products
    const createdProducts = await Product.insertMany(products);

    console.log({
      message: "✅ Products are inserted to DB",
      count: createdProducts.length,
    });
  } catch (err) {
    console.error("❌ Error seeding DB:", err);
  } finally {
    process.exit(0); // ✅ exit process
  }
}

main();
