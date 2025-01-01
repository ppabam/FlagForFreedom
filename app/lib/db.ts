import postgres from 'postgres'

const POSTGRES_DATABASE_URL: string = process.env.DATABASE_URL as string;
const sql = postgres(POSTGRES_DATABASE_URL) // https://www.npmjs.com/package/postgres

export default sql
