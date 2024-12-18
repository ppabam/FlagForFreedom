"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { InputFlagSearch } from "@/components/my/input-flag-search";
import { ButtonUpload } from "@/components/my/button-upload";
import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

import {
  Heart,
  Info,
  Menu,
  // Barcode,
  // LogOut,
  // SortAsc,
  // SortDesc,
  // HeartOff,
  // HeartHandshake,
  // CalendarHeart,
  // Images,
  // MapPinned,
  // Github,
  // Shuffle,
} from "lucide-react";
import { parseCookies, setCookie } from "nookies"; // nookies 사용

import { Flag } from "@/app/lib/definitions"; // Flag 타입을 가져옵니다.

import { getAuthHeaders } from "@/lib/utils";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

interface FlagsProps {
  initialFlags: Flag[];
}

const LIKED_FLAGS_COOKIE_NAME = "likedFlagsV241218.3";

export default function FlagsPage({ initialFlags }: FlagsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFlags, setFilteredFlags] = useState<Flag[]>(initialFlags);
  const [likedFlags, setLikedFlags] = useState<string[]>([]); // 좋아요된 플래그 ID 배열
  const [animatingFlags, setAnimatingFlags] = useState<{
    [key: string]: boolean;
  }>({}); // 개별 플래그 애니메이션 상태

  const shuffleFlags = () => {
    const shuffledFlags = [...filteredFlags];
    for (let i = shuffledFlags.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledFlags[i], shuffledFlags[j]] = [
        shuffledFlags[j],
        shuffledFlags[i],
      ];
    }
    setFilteredFlags(shuffledFlags);
  };

  const sortFlags = (order: "asc" | "desc" | "shuffle") => {
    if (order === "shuffle") {
      shuffleFlags();
      return;
    }

    const sortedFlags = [...filteredFlags].sort((a, b) => {
      if (order === "desc") {
        return b.like_count - a.like_count; // 내림차순
      }
      return a.like_count - b.like_count; // 오름차순
    });
    setFilteredFlags(sortedFlags);
  };

  // 초기 쿠키 로드
  useEffect(() => {
    const cookies = parseCookies();
    // const liked = cookies.likedFlags ? JSON.parse(cookies.likedFlags) : [];
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
    // const likeStatus = likedFlags.includes(flagId) ? -1 : 1;

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

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    const filtered = initialFlags.filter((flag) =>
      flag.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFlags(filtered);
  };

  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Top bar */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r to-indigo-600 from-blue-500 text-white shadow-md z-10">
        <div className="container mx-auto flex items-center px-4 py-3 space-x-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Menu
                  size={33}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>MENU</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => sortFlags("desc")}>
                    <SortDesc />
                    <span>좋아요 내림차순</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => sortFlags("asc")}>
                    <SortAsc />
                    <span>좋아요 오름차순</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={() => sortFlags("shuffle")}>
                    <Shuffle />
                    <span>좋아요 뒤죽박죽</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem disabled>
                    <Heart />
                    <span>좋아요 선택 보기</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem disabled>
                    <HeartOff />
                    <span>좋아요 뺴고 보기</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem disabled>
                    <HeartHandshake />
                    <span>좋아요 모두 보기</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>
                  <CalendarHeart />
                  <span>기간 좋아 순위</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <MapPinned />
                  <span>깃발 위치 정보</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <Images />
                  <span>깃발 모아 보기</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/dMario24/flag123?tab=readme-ov-file#-contribution")
                  }
                >
                  <Github />
                  <span>Contribution</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  <span>나가기</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            <Drawer>
              <DrawerTrigger asChild>
                <Menu
                  size={33}
                  // className="text-red-500"
                />
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>
                      12.3 계엄배 천하제일 재기발랄 깃발대회
                    </DrawerTitle>
                    <DrawerDescription>
                      민주주의 해방전선 나만 깃발 없엉 총연맹
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(-10)}
                        disabled={goal <= 200}
                      >
                        <Minus />
                        <span className="sr-only">Decrease</span>
                      </Button>
                      <div className="flex-1 text-center">
                        <div className="text-7xl font-bold tracking-tighter">
                          {goal}
                        </div>
                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                          Calories/day
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(10)}
                        disabled={goal >= 400}
                      >
                        <Plus />
                        <span className="sr-only">Increase</span>
                      </Button>
                    </div>
                    <div className="mt-3 h-[120px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                          <Bar
                            dataKey="goal"
                            style={
                              {
                                fill: "hsl(var(--foreground))",
                                opacity: 0.9,
                              } as React.CSSProperties
                            }
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button onClick={() => sortFlags("desc")}>DESC</Button>
                    <Button onClick={() => sortFlags("asc")}>ASC</Button>
                    <Button onClick={() => sortFlags("shuffle")}>SHUFFLE</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>

            <h1 className="text-xl font-bold text-green-300 flex space-x-1">
              <span className="text-indigo-400 hidden lg:inline">
                12.3 계엄배
              </span>
              <span className="text-indigo-200 hidden md:inline">
                천하제일 깃발대회
              </span>
            </h1>
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
                    onClick={() => toggleLike(String(flag.id))}
                  />

                  {/* 좋아요 버튼과 숫자 (이미지 좌측 하단) */}
                  {flag.like_count > -1 &&
                    (process.env.NEXT_PUBLIC_LIKE_BUTTON_ENABLED || "OFF") ===
                      "ON" && (
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
                              animatingFlags[flag.id]
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
