// /app/api/flags/route.ts
import { NextResponse } from 'next/server';

type Flag = {
  id: number;
  name: string;
  imageUrl: string;
};

const flags: Flag[] = [
  { id: 1, name: 'f1', imageUrl: '/flags/f1.png' },
  { id: 2, name: 'f2', imageUrl: '/flags/f2.png' },
  { id: 3, name: 'f3', imageUrl: '/flags/f3.png' },
  { id: 4, name: 'f4', imageUrl: '/flags/f4.png' },
  { id: 5, name: 'f5', imageUrl: '/flags/f5.png' },
  { id: 6, name: 'F6', imageUrl: '/flags/f6.png' },
  { id: 7, name: 'F7', imageUrl: '/flags/f7.png' },
  { id: 8, name: 'F8', imageUrl: '/flags/f8.png' },
  { id: 9, name: 'F9', imageUrl: '/flags/f9.png' },
  { id: 10, name: 'F10', imageUrl: '/flags/f10.png' },
  { id: 11, name: 'F11', imageUrl: '/flags/f11.png' },
  { id: 12, name: 'F12', imageUrl: '/flags/f12.png' },
];

export async function GET() {
  return NextResponse.json(flags);
}
