'use client'

import { Flag } from "@/app/lib/definitions";
import LikeableImage from "./likeable-image";
import { useEffect, useState } from "react";
import { saveLikeDeltasToDatabase } from "@/app/lib/action"
import { getEnv } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

const IMAGE_QUALITY = getEnv<number>("NEXT_PUBLIC_IMAGE_QUALITY", 75);

interface FlagsProps {
  filteredFlags: Flag[];
}

export default function SortableGallery({ filteredFlags }: FlagsProps) {
  const searchParams = useSearchParams();
  const [sortedFlags, setSortedFlags] = useState<Flag[]>(filteredFlags);

  useEffect(() => {
    const sortParam = searchParams.get("sort") || "idDesc";

    const sorted = [...filteredFlags];
    switch (sortParam) {
      case "idDesc":
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "idAsc":
        sorted.sort((a, b) => a.id - b.id);
        break;
      case "desc":
        sorted.sort((a, b) => b.like_count - a.like_count);
        break;
      case "asc":
        sorted.sort((a, b) => a.like_count - b.like_count);
        break;
      case "shuffle":
        for (let i = sorted.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
        }
        break;
      default:
        console.warn(`Unknown sort parameter: ${sortParam}`);
    }
    setSortedFlags(sorted);
  }, [filteredFlags, searchParams]);

  // 좋아요 저장
  useEffect(() => {
    let isSaving = false; // 중복 방지 플래그

    const saveLikes = async () => {
      if (isSaving) return; // 이미 저장 중이면 실행하지 않음
      isSaving = true;

      const likeDeltas = JSON.parse(localStorage.getItem("like_deltas") || "{}");

      if (Object.keys(likeDeltas).length === 0) {
        console.log("No like deltas to save.");
        return;
      }

      // 데이터 생성
      const insertData = Object.entries(likeDeltas)
        .filter(([, delta_cnt]) => parseInt(delta_cnt as string, 10) !== 0) // delta_cnt가 0이 아닌 항목만 포함
        .map(([flag_id, delta_cnt]) => ({
          flag_id: parseInt(flag_id, 10),
          delta_cnt: parseInt(delta_cnt as string, 10),
        }));

      if (insertData.length === 0) {
        console.log("No valid like deltas to save.");
        return; // 추가 작업 없이 함수 종료
      }

      try {
        // Server Action 호출
        await saveLikeDeltasToDatabase(insertData);

        // 저장 성공 시 로컬스토리지 초기화
        localStorage.removeItem("like_deltas");
      } catch (error) {
        console.error("Failed to save likes on unload:", error);
      } finally {
        isSaving = false; // 저장 완료 후 플래그 리셋
      }
    };

    const handleBeforeUnload = saveLikes;
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        saveLikes();
      }
    };
    // 필수 이벤트만 등록
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);


    // Cleanup 함수: 이벤트 리스너 제거
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []); // 빈 의존성 배열: 컴포넌트 마운트/언마운트 시 실행



  return (
    <section className="container mx-auto px-1 py-1">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {sortedFlags.map((flag) => (
          <li key={flag.id} className="text-center">
            <LikeableImage flag={flag} image_quality={IMAGE_QUALITY} />
            {/* 플래그 이름 */}
            <p className="mt-2 text-pretty font-bold"> {flag.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}