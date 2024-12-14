import { NextResponse } from 'next/server';
import { fetchFlags } from '@/app/lib/data';


export async function GET() {
  const data = await fetchFlags();
  return NextResponse.json(data);
}

