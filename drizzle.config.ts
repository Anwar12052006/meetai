// import 'dotenv/config';
// import { defineConfig } from "drizzle-kit";



// export default defineConfig({
//   out: "./drizzle",
//   schema: "./src/db/schema.ts",
//   dialect: "pg",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
// });


import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({ path: ".env" });  // ✅ explicitly load .env

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",   // works for all drizzle-kit versions
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
