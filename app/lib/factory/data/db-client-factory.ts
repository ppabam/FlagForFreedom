import { DbClientInterface } from "./db-clinet-interface";
import { DbClientPostgresJs } from "./db-client-postgres-js";
// import { DbClientVercelPostgres } from "./db-client-vercel-postgres";

export class DbClientFactory {
  static getClient(): DbClientInterface {
    // const clientType = process.env.DATABASE_CLIENT;
    // if (clientType === "vercel-postgres") {
    //   return new DbClientVercelPostgres();
    // }
    return new DbClientPostgresJs();
  }
}
