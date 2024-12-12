import { sql } from '@vercel/postgres';
import { Flag } from './definitions';
import { getFlags } from '@/app/lib/getFlags';
import { unstable_cache } from 'next/cache';

export async function fetchFlags() {
  const flags = await getCachedFlags();
  return flags;
}

const getCachedFlags = unstable_cache(
  selectFlags,
  ["select_flags"],
  {
    revalidate: Number(process.env.CACHE_TIMEOUT_SECONDS)
  }
);

async function selectFlags() {
  try {
    const data = await sql<Flag>`SELECT id,name,img_url FROM flags ORDER BY id DESC`;
    // console.log('Data fetch completed');
    return data.rows;
  } catch (error) {
    console.error('🎅-Error Database:', error);
    // throw new Error('Failed to fetch revenue data.');
    try {
      console.warn('🔥-Try Fallback API');
      const flags = await getFlags();
      return flags;
    } catch (error) {
      console.error('🎅-Error Fallback API:', error);
      // Fallback API 호출 실패 시 처리 로직
      // 예: 사용자에게 알림, 로그 남기기 등
      throw new Error('데이터를 가져오는데 실패했습니다.');
    }
  }
}



