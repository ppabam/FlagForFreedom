import { Flag } from "@/app/lib/definitions";
import { unstable_cache } from "next/cache";
import { getCacheTimeout } from "@/lib/utils";
import sql from '@/app/lib/db'

const CACHE_TIMEOUT = getCacheTimeout();

// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
const getDbData = unstable_cache(
  async () => {
    const data = await sql`
    SELECT
      f.id,
      f.name,
      f.img_url,
      COALESCE(SUM(fl.delta_cnt), 0) AS like_count
    FROM 
        flags f
    LEFT JOIN 
        flag_like_history fl
    ON 
        f.id = fl.flag_id
    GROUP BY 
        f.id, f.name, f.img_url
    ORDER BY 
        f.id DESC
    `;

    // RowList<Row[]>를 Flag[]로 변환
    return data.map(row => ({
      id: row.id,
      name: row.name,
      img_url: row.img_url,
      like_count: Number(row.like_count) // 숫자로 변환
    })) as Flag[];
  },
  ["msi"], // 캐시 키에 query 포함
  {
    revalidate: CACHE_TIMEOUT,
    tags: ["ism"],
  }
);

export async function fetchFlags(): Promise<Flag[]> {
  try {
    // 데이터를 캐싱하며 ISR (Incremental Static Regeneration) 사용
    // const flags = await getFlagsFromDb();
    const flags = await getDbData();
    return flags;
  } catch (dbError) {
    console.error("🎅-dbError Try Fallback", dbError);
    throw new Error("데이터베이스 조회 실패");
  }
}

/**
 * 깃발 데이터를 데이터베이스에 삽입하는 함수
 * @param flag - 삽입할 깃발 데이터 (id 제외, 자동 생성)
 * @returns 삽입된 깃발 데이터
 */
export async function insertFlag(flag: Omit<Flag, "id" | "like_count">): Promise<Flag> {
  try {
    const result = await sql<Flag[]>`
      INSERT INTO flags(name, img_url, latitude, longitude)
      VALUES(
    ${flag.name},
    ${flag.img_url},
    37.525307 + (37.530139 - 37.525307) * RANDOM(),
    126.919467 + (126.922896 - 126.919467) * RANDOM()
  )
      RETURNING id, name, img_url
  `;
    console.log("✅ Data inserted successfully:", result[0]);

    console.log(
      "revalidatePath allows you to purge cached data on-demand for a specific path."
    );
    // revalidatePath('/')

    return result[0];
  } catch (error) {
    console.error("🎅-Error Inserting Data:", error);
    throw new Error("데이터베이스 삽입 실패");
  }
}

// flag_likes 테이블에 좋아요 상태 업데이트하는 함수
export async function insertFlagLikeInDatabase(
  flagId: number,
  likeStatus: number,
  ipAddress: string,
  browser: string,
  device: string,
  domain: string,
  language: string,
  pathname: string,
): Promise<void> {
  try {
    await sql`
      INSERT INTO flag_likes(flag_id, like_status, ip_address, browser, device, domain, language, pathname)
      VALUES(${flagId}, ${likeStatus}, ${ipAddress}, ${browser}, ${device}, ${domain}, ${language}, ${pathname})`;
    console.log(`Successfully inserted like for flag_id: ${flagId} `);
  } catch (error) {
    console.error("Error inserting flag like into the database:", error);
    // 에러를 호출한 쪽으로 다시 던지기
    throw new Error("Failed to insert flag like into the database.");
  }
}

export async function fetchFlagById(id: string) {
  try {
    const data = await sql`
    SELECT 
      f.id,
      f.name,
      f.img_url,
      COALESCE(SUM(fl.delta_cnt), 0) AS like_count
    FROM 
        flags f
    LEFT JOIN 
        flag_like_history fl
    ON 
        f.id = fl.flag_id
    WHERE 
        f.id = ${id}
    GROUP BY 
        f.id
  `;
    return data[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to FilteredFlags.');
  }
}

