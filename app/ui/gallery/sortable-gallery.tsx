'use client'

import { Flag } from "@/app/lib/definitions";
import LikeableImage from "./likeable-image";
import { useEffect } from "react";
import { saveLikeDeltasToDatabase } from "@/app/lib/action"

interface FlagsProps {
  filteredFlags: Flag[];
}

export default function SortableGallery({ filteredFlags }: FlagsProps) {
  useEffect(() => {
    const handleBeforeUnload = async () => {
      const likeDeltas = JSON.parse(localStorage.getItem("like_deltas") || "{}");

      if (Object.keys(likeDeltas).length === 0) {
        console.log("No like deltas to save.");
        return;
      }

      // 데이터 생성
      const insertData = Object.entries(likeDeltas).map(([flag_id, delta_cnt]) => ({
        flag_id: parseInt(flag_id, 10),
        delta_cnt: parseInt(delta_cnt as string, 10),
      }));

      try {
        // Server Action 호출
        await saveLikeDeltasToDatabase(insertData);

        // 저장 성공 시 로컬스토리지 초기화
        localStorage.removeItem("like_deltas");
      } catch (error) {
        console.error("Failed to save likes on unload:", error);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup 함수: 이벤트 리스너 제거
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []); // 빈 의존성 배열: 컴포넌트 마운트/언마운트 시 실행

  return (
    <section className="container mx-auto px-1 py-1">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {filteredFlags.map((flag) => (
          <li key={flag.id} className="text-center">
            <LikeableImage flag={flag} />
            {/* 플래그 이름 */}
            <p className="mt-2 text-pretty font-bold"> {flag.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}