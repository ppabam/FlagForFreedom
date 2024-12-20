'use client'

import Image from "next/image";
import { Heart, Info, } from "lucide-react";
import { Flag } from "@/app/lib/definitions";
import { useState, useEffect } from "react";
import { getAuthHeaders } from "@/lib/utils";

interface FlagsProps {
  filteredFlags: Flag[];
}

export function Gallery({ filteredFlags }: FlagsProps) {
  const [likedFlags, setLikedFlags] = useState<string[]>([]); // 좋아요된 플래그 ID 배열

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
  );
}