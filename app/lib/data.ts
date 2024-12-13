import { sql } from '@vercel/postgres';
import { Flag } from './definitions';
import { getFlags } from '@/app/lib/getFlags';

const CACHE_TIMEOUT_SECONDS = parseInt(
  process.env.NEXT_PUBLIC_CACHE_TIMEOUT_SECONDS || '600',
  10
);

export async function fetchFlags() {
  try {
    // 데이터를 캐싱하며 ISR (Incremental Static Regeneration) 사용
    const flags = await getFlagsWithRevalidate();
    return flags;
  } catch (dbError) {
    console.warn('🎅-dbError Try Fallback', dbError);
    const fallBackFlags = getFlagsFallbackApi();
    return fallBackFlags;
  }
}

// ISR을 활용한 깃발 데이터 조회 함수
async function getFlagsWithRevalidate() {
  const data = await sql<Flag>`SELECT id, name, img_url FROM flags ORDER BY id DESC`;

  return {
    data: data.rows,
    revalidate: CACHE_TIMEOUT_SECONDS,
  };
}

async function getFlagsFallbackApi() {
  try {
    const data = await getFlags();
    return {
      data: data,  // fallback 데이터
      revalidate: CACHE_TIMEOUT_SECONDS, // ISR 재생성 주기 설정
    };
  } catch (apiError) {
    console.error('🎅-Error Fallback API:', apiError);
    throw new Error('데이터를 가져오는데 실패했습니다.');
  }
}

/**
 * 깃발 데이터를 데이터베이스에 삽입하는 함수
 * @param flag - 삽입할 깃발 데이터 (id 제외, 자동 생성)
 * @returns 삽입된 깃발 데이터
 */
export async function insertFlag(flag: Omit<Flag, 'id'>): Promise<Flag> {
  try {
    const result = await sql<Flag>`
      INSERT INTO flags (name, img_url, latitude, longitude)
      VALUES (
        ${flag.name}, 
        ${flag.img_url},
        37.525307 + (37.530139 - 37.525307) * RANDOM(), 
        126.919467 + (126.922896 - 126.919467) * RANDOM()
      )
      RETURNING id, name, img_url
    `;
    console.log('✅ Data inserted successfully:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('🎅-Error Inserting Data:', error);
    throw new Error('데이터 삽입에 실패했습니다.');
  }
}


