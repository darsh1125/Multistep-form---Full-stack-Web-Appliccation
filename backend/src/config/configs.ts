import dotenv from 'dotenv';

dotenv.config({ path: `.env` });

export const {
  PORT,
  DB_USER,
  DB_PASSWORD,
  HOST,
  DB_NAME,
} = {...process.env } as { [key: string]: string };