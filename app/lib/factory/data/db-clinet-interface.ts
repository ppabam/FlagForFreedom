import { Flag, FlagFrom } from "@/app/lib/definitions";

export interface DbClientInterface {
  fetchFlags(): Promise<Flag[]>;
}