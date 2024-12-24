'use server';

import { sql } from "@vercel/postgres";

/**
 * 좋아요 변환 데이터를 데이터베이스에 저장하는 Server Action
 * @param insertData - 클라이언트에서 전달받은 좋아요 변환 데이터 배열
 * Ref
 * * https://nextjs.org/learn/dashboard-app/mutating-data#2-create-a-server-action
 * * https://stackoverflow.com/questions/77093626/vercel-postgres-bulk-insert-building-sql-query-dynamically-from-array
 */
export async function saveLikeDeltasToDatabase(insertData: { flag_id: number; delta_cnt: number }[]): Promise<void> {

  if (insertData.length === 0) {
    console.log("No like deltas to save.");
    return;
  }

  try {
    // JSON 데이터를 json_populate_recordset으로 변환하여 삽입
    await sql.query(
      `INSERT INTO flag_like_history (flag_id, delta_cnt)
       SELECT flag_id, delta_cnt
       FROM json_populate_recordset(NULL::flag_like_history, $1)`,
      [JSON.stringify(insertData)]
    );

    console.log("Like deltas saved successfully!");
    localStorage.removeItem("like_deltas"); // 데이터 저장 후 로컬스토리지 초기화
  } catch (error) {
    console.error("Failed to save like deltas:", error);
  }
}