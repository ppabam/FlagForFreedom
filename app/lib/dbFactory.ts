// dbFactory.ts
import { DbAdapterVercel } from "./dbAdapterVercel";
import { DbAdapterPostgres } from "./dbAdapterPostgres";
import { DbAdapter } from "./dbAdapter";

export function createDbAdapter(): DbAdapter {
  const dbType = process.env.DB_TYPE;

  if (dbType === "vercel") {
    return new DbAdapterVercel();
  }

  if (dbType === "postgres") {
    const connectionString = process.env.DATABASE_URL_USED_BY_POSTGRES_JS as string;
    return new DbAdapterPostgres(connectionString);
  }

  throw new Error("Invalid DB_TYPE. Set DB_TYPE to 'vercel' or 'postgres'.");
}
