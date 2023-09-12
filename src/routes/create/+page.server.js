import { createPool, sql } from '@vercel/postgres';

async function seed() {
  console.log('seed');
  const createUserTable = await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  const createTransactionsTable = await sql`
    CREATE TYPE transaction_type as ENUM ('save', 'spend', 'donate');
    CREATE TABLE IF NOT EXISTS transactions (
      id SERIAL PRIMARY KEY,
      user SERIAL REFERENCES users(id),
      date DATE,
      description VARCHAR(255),
      category VARCHAR(255),
      type transaction_type,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  const createTotalsTable = await sql`
    CREATE TABLE IF NOT EXISTS transactions (
      id SERIAL PRIMARY KEY,
      user SERIAL REFERENCES users(id),
      save INTEGER,
      spend INTEGER,
      donate INTEGER,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  return {
    createUserTable,
    createTransactionsTable,
    createTotalsTable
  }
}

export async function load() {
  const db = createPool();
  const startTime = Date.now();
  try {
    const { rows: users } = await db.query('SELECT * FROM users');
    const duration = Date.now() - startTime;
    return {
      users: users,
      duration: duration,
    };
  } catch (error) {
    if (error?.message === `relation "users" does not exist`) {
      console.log("Table does not exist, creating and seeding it with dummy data now...");
      await seed();
      const { rows: users } = await db.query('SELECT * FROM users');
      const duration = Date.now() - startTime;
      return {
        users: users,
        duration: duration
      };
    } else {
      throw error;
    }
  }
}