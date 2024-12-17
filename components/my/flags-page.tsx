"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { InputFlagSearch } from "@/components/my/input-flag-search";
import { ButtonUpload } from "@/components/my/button-upload";
import { AvatarSadness } from "@/components/my/avatar-sadness";

import { Heart, MapPinned } from "lucide-react";
import { parseCookies, setCookie } from "nookies"; // nookies 사용

import { Flag } from "@/app/lib/definitions"; // Flag 타입을 가져옵니다.
import { randomBytes } from "crypto";
interface FlagsProps {
  initialFlags: Flag[];
}

export default function FlagsPage({ initialFlags }: FlagsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFlags, setFilteredFlags] = useState<Flag[]>(initialFlags);
  const [likedFlags, setLikedFlags] = useState<string[]>([]); // 좋아요된 플래그 ID 배열

  // 초기 쿠키 로드
  useEffect(() => {
    const cookies = parseCookies();
    const liked = cookies.likedFlags ? JSON.parse(cookies.likedFlags) : [];
    setLikedFlags(liked);
  }, []);

  // 좋아요 버튼 클릭 핸들러
  const toggleLike = (flagId: string) => {
    let updatedLikes = [...likedFlags];
    if (likedFlags.includes(flagId)) {
      updatedLikes = updatedLikes.filter((id) => id !== flagId);
    } else {
      updatedLikes.push(flagId);
    }
    setLikedFlags(updatedLikes);
    setCookie(null, "likedFlags", JSON.stringify(updatedLikes), {
      path: "/",
      maxAge: 30 * 24 * 60 * 60, // 30일
    });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    const filtered = initialFlags.filter((flag) =>
      flag.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFlags(filtered);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Top bar */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r to-indigo-600 from-blue-500 text-white shadow-md z-10">
        <div className="container mx-auto flex items-center px-4 py-3 space-x-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              <AvatarSadness />
              <h1 className="text-xl font-bold text-green-300 hidden md:flex space-x-1">
                <span className="text-indigo-400">12.3 계엄배</span>
                <span className="text-indigo-200">천하제일 깃발대회</span>
              </h1>
            </a>
          </div>

          {/* Search Field */}
          <div className="flex-1">
            <InputFlagSearch
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex-shrink-0 w-11">
            <ButtonUpload searchTerm={searchTerm} />
          </div>
        </div>
      </header>

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
                  />

                  {/* 좋아요 버튼과 숫자 (이미지 좌측 하단) */}
                  {flag.like_count > -1 && (process.env.NEXT_PUBLIC_LIKE_BUTTON_ENABLED || "OFF") === "ON" && (
                    <div className="absolute bottom-2 left-2 flex items-center gap-1">
                      <button
                        onClick={() => toggleLike(String(flag.id))}
                        className={`flex items-center justify-center w-7 h-7 rounded-full ${
                          likedFlags.includes(String(flag.id))
                            ? "bg-red-500 text-white"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        <Heart className="w-5 h-5" />
                      </button>
                      <span className="text-white text-sm">
                        {/* {Math.floor(Math.random() * 10000) + 1} */}
                        {flag.like_count}
                      </span>
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
                      <MapPinned className="w-5 h-5" />
                    </button>
                  )}
                </div>
                {/* 플래그 이름 */}
                <p className="mt-2 text-pretty font-bold">{flag.name}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
