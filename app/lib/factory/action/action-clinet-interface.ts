import { Flag, FlagFrom } from "@/app/lib/definitions";

export interface ActionClientInterface {
  saveLikeDeltasToDatabase(): Promise<void>;
  insertFlag(flag: Omit<Flag, "id" | "like_count">): Promise<Flag>;
  fetchFlagById(id: string): Promise<FlagFrom>;
}