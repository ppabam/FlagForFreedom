import { NextResponse } from 'next/server';

type Flag = {
  id: number;
  name: string;
  imageUrl: string;
};

const flags: Flag[] = [
  { id: 1, name: 'f1', imageUrl: 'https://i.ibb.co/w0xZYG2/f1.png' },
  { id: 2, name: 'f2', imageUrl: 'https://i.ibb.co/M8JfYTp/f2.png' },
  { id: 3, name: 'f3', imageUrl: 'https://i.ibb.co/QHd3RHK/f3.png' },
  { id: 4, name: 'f4', imageUrl: 'https://i.ibb.co/R6rXvW6/f4.png' },
  { id: 5, name: 'f5', imageUrl: 'https://i.ibb.co/S0F7S69/f5.png' },
  { id: 6, name: 'F6', imageUrl: 'https://i.ibb.co/nnHgh7J/f6.png' },
  { id: 7, name: 'F7', imageUrl: 'https://i.ibb.co/1XjDyct/f7.png' },
  { id: 8, name: 'F8', imageUrl: '/img/flags/f8.png' },
  { id: 9, name: 'F9', imageUrl: '/img/flags/f9.png' },
  { id: 10, name: 'F10', imageUrl: '/img/flags/f10.png' },
  { id: 11, name: 'F11', imageUrl: '/img/flags/f11.png' },
  { id: 12, name: 'F12', imageUrl: '/img/flags/f12.png' },
];

export async function GET() {
  return NextResponse.json(flags);
}
