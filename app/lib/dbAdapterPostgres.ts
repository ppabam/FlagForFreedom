
import postgres from "postgres";
import { DbAdapter } from "./dbAdapter";

export class DbAdapterPostgres implements DbAdapter {
  private sql;

  constructor(connectionString: string) {
    this.sql = postgres(connectionString);
  }

  async query<T = any>(queryString: string, params: any[] = []): Promise<T[]> {
    return this.sql.unsafe(queryString, params);
  }

  async insert<T = any>(queryString: string, params: any[] = []): Promise<T> {
    const result = await this.sql.unsafe(queryString, params);
    return result[0];
  }
}
