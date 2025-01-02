export type Flag = {
  id: number;
  name: string;
  img_url: string;
  like_count: number;
};

export type FlagFrom = {
  id: number;
  name: string;
  img_url: string;
  like_count: number;
  latitude: number;
  longitude: number;
};

export type Deploy_Environment = 'VERCEL' | 'LOCAL' | 'DOCKER';

