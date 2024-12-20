"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import * as React from "react";

import {
  Heart,
  Info,
} from "lucide-react";

import { parseCookies, setCookie } from "nookies"; // nookies 사용
import { Flag } from "@/app/lib/definitions"; // Flag 타입을 가져옵니다.
import { getAuthHeaders } from "@/lib/utils";
import { useSearchParams } from 'next/navigation';
import { Gnb } from "@/app/ui/gnb/gnb";
import { Gallery } from "@/app/ui/gallery/gallery";

interface FlagsProps {
  initialFlags: Flag[];
}

const LIKED_FLAGS_COOKIE_NAME = "likedFlagsV241218.3";
type SortOrder = "shuffle" | "asc" | "desc" | "idDesc" | "idAsc" | null;

export default function FlagsPage({ initialFlags }: FlagsProps) {
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort") as SortOrder | null;  // 타입 단언을 사용하여 SortOrder로 변환;

  const [filteredFlags, setFilteredFlags] = useState<Flag[]>(initialFlags);
  const [likedFlags, setLikedFlags] = useState<string[]>([]); // 좋아요된 플래그 ID 배열
  const [animatingFlags, setAnimatingFlags] = useState<{
    [key: string]: boolean;
  }>({}); // 개별 플래그 애니메이션 상태

  const [sortOrder, setSortOrder] = useState<SortOrder>(sortParam);

  const sortFlags = (order: SortOrder) => {
    switch (order) {
      case "asc":
        console.log("Sorting flags in ascending order");
        setFilteredFlags((prev) =>
          [...prev].sort((a, b) => a.like_count - b.like_count)
        );
        break;
      case "desc":
        console.log("Sorting flags in descending order");
        setFilteredFlags((prev) =>
          [...prev].sort((a, b) => b.like_count - a.like_count)
        );
        break;
      case "shuffle":
        console.log("Shuffling flags");
        setFilteredFlags((prev) => {
          const shuffled = [...prev];
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          return shuffled;
        });
        break;
      case "idDesc":
        console.log("Sorting flags by id in descending order");
        setFilteredFlags((prev) => [...prev].sort((a, b) => b.id - a.id));
        break;
      case "idAsc":
        console.log("Sorting flags by id in ascending order");
        setFilteredFlags((prev) => [...prev].sort((a, b) => a.id - b.id));
        break;
      default:
        console.log("Unknown sort order");
    }
  };

  useEffect(() => {
    if (!sortOrder) return; // sortParam이 없을 때는 실행하지 않음
    sortFlags(sortOrder);
    console.log(`Sort parameter changed to: ${sortOrder}`);
  }, [sortOrder]);

  useEffect(() => {
    setFilteredFlags(initialFlags);
  }, [initialFlags]);

  useEffect(() => {
    // 컴포넌트 로드 시 기본 정렬 "idDesc" 적용
    sortFlags("idDesc");
  }, []);

  // 초기 쿠키 로드
  useEffect(() => {
    const cookies = parseCookies();
    const liked = cookies[LIKED_FLAGS_COOKIE_NAME]
      ? JSON.parse(cookies[LIKED_FLAGS_COOKIE_NAME])
      : [];
    setLikedFlags(liked);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* GNB */}
      <Gnb />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Gallery filteredFlags={filteredFlags} />
      </main>

    </div>
  );
}
