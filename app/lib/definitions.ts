export type Flag = {
  id: number;
  name: string;
  // latitude: number;
  // longitude: number;
  img_url: string;
  like_count: number;
  // liked?: boolean;
};

export type FlagWithLike = {
  id: number;
  name: string;
  // latitude: number;
  // longitude: number;
  img_url: string;
  like_count: number;
  liked?: boolean;
  animating?: boolean;
};