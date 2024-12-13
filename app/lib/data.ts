import { sql } from '@vercel/postgres';
import { Flag } from './definitions';
import { getFlags } from '@/app/lib/getFlags';
import { unstable_cache } from 'next/cache';


export async function fetchFlags() {
  const flags = await fetchCachedFlags();
  return flags;
}

const fetchCachedFlags = unstable_cache(
  selectFlags,
  ["flags-cache"],
  {
    revalidate: parseInt(process.env.NEXT_PUBLIC_CACHE_TIMEOUT_SECONDS || '60', 10),
  }
);

// export async function fetchFlags() {
async function selectFlags() {
  try {
    const data = await sql<Flag>`SELECT id,name,img_url FROM flags ORDER BY id DESC`;
    // console.log('Data fetch completed');
    return data.rows;
  } catch (dbError) {
    console.error('🎅-Error Database:', dbError);

    // Fallback API 호출 시도
    try {
      console.warn('🔥-Try Fallback API');
      const flags = await getFlags();
      return flags;
    } catch (apiError) {
      console.error('🎅-Error Fallback API:', apiError);
      throw new Error('데이터를 가져오는데 실패했습니다.');
    }
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


