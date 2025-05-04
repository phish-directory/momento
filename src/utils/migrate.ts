//Migration test file? Kind of not needed as bun drizzle-kit migrate works or no?

// import { migrate } from "drizzle-orm/bun-sqlite/migrator";
import { migrate } from "drizzle-orm/bun-sql/migrator";
// import { drizzle } from "drizzle-orm/bun-sqlite";
import { drizzle } from "drizzle-orm/bun-sql";
// import { Database } from "bun:sqlite";
// const sqlite = new Database("sqlite.db");
// const db = drizzle(sqlite);
import { db } from "./db";
migrate(db, { migrationsFolder: "./drizzle" });