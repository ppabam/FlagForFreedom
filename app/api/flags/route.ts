import { NextResponse } from 'next/server';

type Flag = {
  id: number;
  name: string;
  imageUrl: string;
};

const flags: Flag[] = [
  { id: 1, name: 'f1', imageUrl: '/img/flags/f1.png' },
  { id: 2, name: 'f2', imageUrl: '/img/flags/f2.png' },
  { id: 3, name: 'f3', imageUrl: '/img/flags/f3.png' },
  { id: 4, name: 'f4', imageUrl: '/img/flags/f4.png' },
  { id: 5, name: 'f5', imageUrl: '/img/flags/f5.png' },
  { id: 6, name: 'F6', imageUrl: '/img/flags/f6.png' },
  { id: 7, name: 'F7', imageUrl: '/img/flags/f7.png' },
  { id: 8, name: 'F8', imageUrl: '/img/flags/f8.png' },
  { id: 9, name: 'F9', imageUrl: '/img/flags/f9.png' },
  { id: 10, name: 'F10', imageUrl: '/img/flags/f10.png' },
  { id: 11, name: 'F11', imageUrl: '/img/flags/f11.png' },
  { id: 12, name: 'F12', imageUrl: '/img/flags/f12.png' },
];

export async function GET() {
  return NextResponse.json(flags);
}
