import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: '/edge' };

export async function middleware() {
  const greeting = await get('data');
  // NextResponse.json requires at least Next v13.1 or
  // enabling experimental.allowMiddlewareResponseBody in next.config.js
  // console.log(greeting);
  return NextResponse.json(greeting);
}
