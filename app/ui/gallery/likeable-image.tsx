"use client";

import { Flag } from "@/app/lib/definitions";
import { getAuthHeaders } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { Heart } from "lucide-react";

const LIKED_FLAGS_COOKIE_NAME = "likedFlagsV241223.1";

export default function LikeableImage({ flag }: { flag: Flag }) {
  const cookies = parseCookies();
  const initialLikedFlags = cookies[LIKED_FLAGS_COOKIE_NAME]
    ? JSON.parse(cookies[LIKED_FLAGS_COOKIE_NAME])
    : [];
  const [likedFlags, setLikedFlags] = useState<string[]>(initialLikedFlags);
  const [animatingFlags, setAnimatingFlags] = useState<{
    [key: string]: boolean;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isLikeFeatureEnabled = 
    (process.env.NEXT_PUBLIC_LIKE_BUTTON_ENABLED || "OFF") === "ON";

  const toggleLike = async (flagId: string) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    setAnimatingFlags((prev) => ({ ...prev, [flagId]: true }));
    setTimeout(() => {
      setAnimatingFlags((prev) => ({ ...prev, [flagId]: false }));
    }, 500);

    const likeDelta = likedFlags.includes(flagId) ? -1 : 1;

    const updatedLikes =
      likeDelta === -1
        ? likedFlags.filter((id) => id !== flagId)
        : [...likedFlags, flagId];
    setLikedFlags(updatedLikes);

    setCookie(null, LIKED_FLAGS_COOKIE_NAME, JSON.stringify(updatedLikes), {
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });

    try {
      const response = await fetch("/api/flags/likes", {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          flagId: Number(flagId),
          likeStatus: likeDelta,
        }),
      });

      if (!response.ok) {
        console.error("Failed to update like on the server.");
        // 롤백
        setLikedFlags(likeDelta === 1 
          ? likedFlags.filter((id) => id !== flagId)
          : [...likedFlags, flagId]);
      }
    } catch (error) {
      console.error("Error during toggleLike API call:", error);
    } finally {
      setIsSubmitting(false);
    }
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
        onClick={() => toggleLike(String(flag.id))}
      />

      {flag.like_count > -1 && isLikeFeatureEnabled && (
        <div className="absolute bottom-2 left-2 flex items-center gap-1">
          <button
            onClick={() => toggleLike(String(flag.id))}
            className={`flex items-center justify-center w-7 h-7 rounded-full ${
              likedFlags.includes(String(flag.id))
                ? "bg-red-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            <Heart
              className={`w-5 h-5 transition-transform duration-500 ${
                animatingFlags[flag.id] ? "animate-heartbeat" : "scale-100"
              }`}
            />
          </button>
          <div className="relative flex items-center ml-2">
            <span className="text-white bg-blue-500 text-sm px-3 py-1 rounded-lg relative z-0">
              {flag.like_count}
            </span>
            <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-blue-500"></div>
          </div>
        </div>
      )}
    </div>
  );
}
