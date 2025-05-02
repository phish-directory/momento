
// This file should contain code for the actual db object that can be used in utils and other parts of this program.
// Schema is in src/db/schema - possibly multi-file schema.
//
import { drizzle } from 'drizzle-orm/postgres-js';

const db = drizzle(process.env.DATABASE_URL);

const result = await db.execute('select 1');
