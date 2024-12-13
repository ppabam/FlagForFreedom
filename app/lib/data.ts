import { sql } from '@vercel/postgres';
import { Flag } from '@/app/lib/definitions';
import { unstable_cache } from 'next/cache';
import { getCacheTimeout } from '@/lib/utils';

// const CACHE_TIMEOUT = getCacheTimeout();

// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
const getDbData = unstable_cache(
  async () => {

    await sql`
        UPDATE select_count
        SET count = count + 1, last_updated = now()
        WHERE id = 1;
      `;

    const data = await sql<Flag>`SELECT id, name, img_url FROM flags ORDER BY id DESC`;
    return data.rows;
  },
  ['unstablecache'],
  {
    revalidate: 60,
    tags: ['unstablecache']
  }
)


export async function fetchFlags() {
  try {
    // 데이터를 캐싱하며 ISR (Incremental Static Regeneration) 사용
    // const flags = await getFlagsFromDb();
    const flags = await getDbData();
    return flags;
  } catch (dbError) {
    console.error('🎅-dbError Try Fallback', dbError);
    throw new Error('데이터베이스 조회 실패');
  }
}

// async function getFlagsFromDb() {
//   const data = await sql<Flag>`SELECT id, name, img_url FROM flags ORDER BY id DESC`;
//   return data.rows;
// }

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

    console.log('revalidatePath allows you to purge cached data on-demand for a specific path.');
    // revalidatePath('/')

    return result.rows[0];
  } catch (error) {
    console.error('🎅-Error Inserting Data:', error);
    throw new Error('데이터베이스 삽입 실패');
  }
}


