export interface DbAdapter {
  query<T>(queryString: string, params?: any[]): Promise<T[]>;
  insert<T>(queryString: string, params?: any[]): Promise<T>;
}
