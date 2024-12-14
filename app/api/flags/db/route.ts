import { NextResponse } from 'next/server';
import { fetchFlags } from '@/app/lib/data';

export const fetchCache = 'force-no-store';

export async function GET() {
  const data = await fetchFlags();
  return NextResponse.json(data);
}

