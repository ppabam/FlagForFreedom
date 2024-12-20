"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { InputFlagSearch } from "@/app/ui/gnb/input-flag-search";
import { ButtonUpload } from "@/components/my/button-upload";
import * as React from "react";



import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";



import {
  Heart,
  Info,
  Menu,
} from "lucide-react";
import { parseCookies, setCookie } from "nookies"; // nookies 사용

import { Flag } from "@/app/lib/definitions"; // Flag 타입을 가져옵니다.

import { getAuthHeaders } from "@/lib/utils";

import { Search } from "@/app/ui/gnb/search";

import { useSearchParams } from 'next/navigation';
import { MenuDrawerContent } from "@/app/ui/gnb/menu-drawer-content";
import { Gnb } from "@/app/ui/gnb/gnb";

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


  // sort 값이 변경될 때마다 실행되는 useEffect
  // useEffect(() => {
  //   if (sortParam) {
  //     sortFlags(sortParam);
  //     console.log(`Sort parameter changed to: ${sortParam}`);
  //   }
  // }, [sortParam]);

  useEffect(() => {
    if (!sortOrder) return; // sortParam이 없을 때는 실행하지 않음
    sortFlags(sortOrder);
    console.log(`Sort parameter changed to: ${sortOrder}`);
  }, [sortOrder]);

  // useEffect(() => {
  //   // sortOrder가 변경될 때 정렬 수행
  //   sortFlags(sortOrder);
  // }, [sortOrder]);

  useEffect(() => {
    setFilteredFlags(initialFlags);
  }, [initialFlags]);

  // useEffect(() => {
  //   // 컴포넌트 로드 시 기본 정렬 "idDesc" 적용
  //   sortFlags("idDesc");
  // }, []);



  // 초기 쿠키 로드
  useEffect(() => {
    const cookies = parseCookies();
    const liked = cookies[LIKED_FLAGS_COOKIE_NAME]
      ? JSON.parse(cookies[LIKED_FLAGS_COOKIE_NAME])
      : [];
    setLikedFlags(liked);
  }, []);

  // 좋아요 버튼 클릭 핸들러
  const toggleLike = async (flagId: string) => {
    // 로컬에서 바로 like_count 값을 업데이트
    const likeStatus = likedFlags.includes(flagId) ? -1 : 1;

    const updatedLikeCount = filteredFlags.map((flag) => {
      if (flag.id === Number(flagId)) {
        return {
          ...flag,
          like_count:
            likeStatus === 1
              ? Number(flag.like_count) + 1
              : Number(flag.like_count) - 1,
        };
      }
      return flag;
    });
    setFilteredFlags(updatedLikeCount); // UI에서 바로 like_count 반영

    // 애니메이션 상태 업데이트
    setAnimatingFlags((prev) => ({ ...prev, [flagId]: true }));
    setTimeout(() => {
      setAnimatingFlags((prev) => ({ ...prev, [flagId]: false }));
    }, 500); // 애니메이션 지속 시간

    // 쿠키
    let updatedLikes = [...likedFlags];

    if (likeStatus === -1) {
      updatedLikes = updatedLikes.filter((id) => id !== flagId);
    } else {
      updatedLikes.push(flagId);
    }
    setLikedFlags(updatedLikes);
    setCookie(null, LIKED_FLAGS_COOKIE_NAME, JSON.stringify(updatedLikes), {
      path: "/",
      maxAge: 30 * 24 * 60 * 60, // 30일
    });

    // 디비
    try {
      // 클라이언트 정보 수집
      // API 호출
      const response = await fetch("/api/flags/likes", {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          flagId: Number(flagId),
          likeStatus,
        }),
      });

      if (!response.ok) {
        console.error("Failed to update like on the server.");
      }
    } catch (error) {
      console.error("Error during toggleLike API call:", error);
    }
  };



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* GNB */}
      <Gnb />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="container mx-auto px-1 py-1">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {filteredFlags.map((flag) => (
              <li key={flag.id} className="text-center">
                <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-gray-800 aspect-square">
                  <Image
                    src={flag.img_url}
                    alt={flag.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300"
                    loading="lazy"
                    onClick={() => toggleLike(String(flag.id))}
                  />

                  {/* 좋아요 버튼과 숫자 (이미지 좌측 하단) */}
                  {flag.like_count > -1 &&
                    (process.env.NEXT_PUBLIC_LIKE_BUTTON_ENABLED || "OFF") ===
                    "ON" && (
                      <div className="absolute bottom-2 left-2 flex items-center gap-1">
                        <button
                          onClick={() => toggleLike(String(flag.id))}
                          className={`flex items-center justify-center w-7 h-7 rounded-full ${likedFlags.includes(String(flag.id))
                            ? "bg-red-500 text-white"
                            : "bg-gray-700 text-gray-300"
                            }`}
                        >
                          <Heart
                            className={`w-5 h-5 transition-transform duration-500 ${animatingFlags[flag.id]
                              ? "animate-heartbeat"
                              : "scale-100"
                              }`}
                          />
                        </button>
                        {/* 말풍선 부분 */}
                        <div className="relative flex items-center ml-2">
                          {" "}
                          {/* ml-2로 말풍선 위치 조정 */}
                          <span className="text-white bg-blue-500 text-sm px-3 py-1 rounded-lg relative z-0">
                            {flag.like_count}
                          </span>
                          {/* 말풍선 꼬리 */}
                          <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-blue-500"></div>
                        </div>
                      </div>
                    )}

                  {/* MapPinned 버튼 (환경 변수로 ON/OFF) */}
                  {(process.env.NEXT_PUBLIC_MAP_PINNED_ENABLED || "OFF") ===
                    "ON" && (
                      <button
                        onClick={() =>
                          console.log(`MapPinned clicked for ${flag.id}`)
                        }
                        className="absolute bottom-2 right-2 flex items-center justify-center w-7 h-7 rounded-full bg-gray-700 text-white hover:bg-blue-600"
                      >
                        <Info className="w-5 h-5" />
                      </button>
                    )}
                </div>
                {/* 플래그 이름 */}
                <p className="mt-2 text-pretty font-bold"> {flag.name}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
