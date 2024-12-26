'use server';

import { sql } from "@vercel/postgres";

/**
 * 좋아요 변환 데이터를 데이터베이스에 저장하는 Server Action
 * @param insertData - 클라이언트에서 전달받은 좋아요 변환 데이터 배열
 * Ref
 * * https://nextjs.org/learn/dashboard-app/mutating-data#2-create-a-server-action
 * * https://stackoverflow.com/questions/77093626/vercel-postgres-bulk-insert-building-sql-query-dynamically-from-array
 */
export async function saveLikeDeltasToDatabase(
  insertData: { flag_id: number; delta_cnt: number }[],
  clientId: string
): Promise<void> {

  if (insertData.length === 0) {
    console.log("No like deltas to save.");
    return;
  }

  try {
    // Check if client_id exists or insert it
    const clientResult = await sql.query(
      `
      INSERT INTO clients (client_id)
      VALUES ($1)
      ON CONFLICT (client_id) DO NOTHING
      RETURNING id
      `,
      [clientId]
    );

    const clientRef =
      clientResult.rows.length > 0
        ? clientResult.rows[0].id // Newly inserted client
        : (
          await sql.query(
            `SELECT id FROM clients WHERE client_id = $1`,
            [clientId]
          )
        ).rows[0].id; // Existing client


    // JSON 데이터를 json_populate_recordset으로 변환하여 삽입
    await sql.query(
      `INSERT INTO flag_like_history (flag_id, delta_cnt, client_ref)
       SELECT flag_id, delta_cnt, $2
       FROM json_populate_recordset(NULL::flag_like_history, $1)`,
      [JSON.stringify(insertData), clientRef]
    );

    console.log("Like deltas saved successfully!");
  } catch (error) {
    console.error("Failed to save like deltas:", error);
  }
}