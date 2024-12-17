'use client'

import { useState, useEffect } from 'react';
import { Flag } from '@/app/lib/definitions'; // Flag 타입을 가져옵니다.
import Image from 'next/image';
import { parseCookies, setCookie } from 'nookies'; // nookies 사용

import { InputFlagSearch } from '@/components/my/input-flag-search';
import { ButtonUpload } from '@/components/my/button-upload';
import { AvatarSadness } from '@/components/my/avatar-sadness';
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
import { 
  // Copy, MapPinned, ShieldOff, 
  Heart } from "lucide-react";

interface FlagsProps {
  initialFlags: Flag[];
}

export default function FlagsPage({ initialFlags }: FlagsProps) {
  const [searchTerm, setSearchTerm] = useState('');
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
      updatedLikes = updatedLikes.filter(id => id !== flagId);
    } else {
      updatedLikes.push(flagId);
    }
    setLikedFlags(updatedLikes);
    setCookie(null, 'likedFlags', JSON.stringify(updatedLikes), {
      path: '/',
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
                <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-gray-800 aspect-square bottom-1">
                  <Image
                    src={flag.img_url}
                    alt={flag.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* <Label className="mt-2 text-pretty font-medium text-blue-600">{flag.name}</Label> */}

                {/* 좋아요 버튼 */}
                <button
                  onClick={() => toggleLike(String(flag.id))}
                  className={`mt-2 text-lg flex items-center justify-center gap-1 ${
                    likedFlags.includes(String(flag.id)) ? 'text-red-500' : 'text-gray-400'
                  }`}
                >
                  <Heart />
                  {flag.name}
                  {/* {likedFlags.includes(String(flag.id)) ? '좋아요 취소' : '좋아요'} */}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
