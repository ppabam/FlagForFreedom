
'use client'

import { Flag } from "@/app/lib/definitions";
import Image from "next/image";
import { useState, useEffect } from "react";
import { parseCookies, setCookie } from "nookies";
import { Heart, Info } from "lucide-react";

export default function LikeableImage({ flag }: { flag: Flag }) {

  const COOKIE_AGE = 123 * 24 * 60 * 60;

  const [liked, setLiked] = useState<boolean | null>(null); // 초기값을 null로 설정하여 로딩 상태 표현
  const [likeCount, setLikeCount] = useState(flag.like_count);
  const [animating, setAnimating] = useState(false);

  // 클라이언트에서 쿠키를 읽어 상태 초기화
  useEffect(() => {
    const cookies = parseCookies();
    const likedCookie = cookies[`flag_${flag.id}`];
    setLiked(likedCookie === "true"); // 쿠키 값으로 초기화
  }, [flag.id]);


  // 좋아요 버튼 클릭 핸들러
  const toggleLike = () => {
    if (liked === null) return; // 로딩 상태 중에는 동작하지 않음

    const updatedLiked = !liked;

    // 쿠키 업데이트
    setCookie(null, `flag_${flag.id}`, String(updatedLiked), {
      maxAge: COOKIE_AGE,
      path: "/",
    });

    // 상태 업데이트
    setLiked(updatedLiked);
    setLikeCount((prev) => (updatedLiked ? prev + 1 : prev - 1));

    // 애니메이션 활성화
    setAnimating(true);
    setTimeout(() => setAnimating(false), 500); // 0.5초 후 애니메이션 비활성화
  };


  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-gray-800 aspect-square">
      <Image
        src={flag.img_url}
        alt={flag.name}
        width={300}
        height={300}
        className="w-full h-full object-cover transition-transform duration-300"
        loading="lazy"
        onClick={toggleLike}
      />


      {/* 좋아요 버튼과 숫자 (이미지 좌측 하단) */}
      {likeCount > -1 &&
        (process.env.NEXT_PUBLIC_LIKE_BUTTON_ENABLED || "OFF") ===
        "ON" && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1">
            <button
              onClick={toggleLike}
              className={`flex items-center justify-center w-7 h-7 rounded-full ${liked
                ? "bg-red-500 text-white"
                : "bg-gray-700 text-gray-300"
                }`}
            >
              <Heart
                className={`w-5 h-5 transition-transform duration-500 ${animating
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
                {likeCount}
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
  );
}