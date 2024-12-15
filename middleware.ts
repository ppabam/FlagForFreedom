import { NextResponse } from 'next/server';
// import { get } from '@vercel/edge-config';
// export const config = { matcher: '/edge' };

const API_KEY = process.env.F123_API_KEY || 'cjeksgksek'; // .env.local에 설정된 API 키를 가져옵니다.

export const config = {
  // 이 경로들에만 미들웨어가 적용됩니다.
  matcher: [
    '/api/flags',
    '/api/flags/db',
    '/api/flags/imbb',
    // '/api/flags/insert',  
  ], // 이 경로들에만 미들웨어가 적용됩니다.
};

export async function middleware(req: Request) {
  const apiHeaderKey = req.headers.get('Authorization')?.split(' ')[1]; // "Bearer <API_KEY>" 형태로 헤더에서 API 키 추출

  const url = new URL(req.url);
  const apiQueryKey = url.searchParams.get('k123');

  // 하나라도 있자!
  if (!apiHeaderKey) {
    if (!apiQueryKey) {
      return NextResponse.redirect(`${process.env.BASE_URL}/403`);
    }
  }

  // 헤더에 있는 API 키가 올바르지 않으면 403 Forbidden을 반환합니다.
  if(apiHeaderKey) {
    if (apiHeaderKey !== API_KEY) {
      return NextResponse.redirect(`${process.env.BASE_URL}/403`);
    }
  }

  // 쿼리 스트링에 있는 API 키가 올바르지 않으면 403 Forbidden을 반환합니다.
  if(apiQueryKey) {
    if (apiQueryKey !== API_KEY) {
      return NextResponse.redirect(`${process.env.BASE_URL}/403`);
    }
  }


  
}
