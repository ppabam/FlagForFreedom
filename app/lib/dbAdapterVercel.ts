import postgres, { RowList, Row } from "postgres";
import { DbAdapter } from "./dbAdapter";

export class DbAdapterPostgres implements DbAdapter {
  private db = postgres();

  async query<T extends Row>(
    queryString: string,
    params: (string | number | boolean | null | undefined)[]
  ): Promise<T[]> {
    const result: RowList<T> = await this.db<T[]>(queryString, ...params);
    return result as T[];
  }

  async insert<T extends Row>(
    queryString: string,
    params: (string | number | boolean | null | undefined)[]
  ): Promise<T> {
    const result: RowList<T> = await this.db<T[]>(queryString, ...params);
    return result[0] as T;
  }
}
