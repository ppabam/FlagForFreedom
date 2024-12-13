import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCacheTimeout(): number {
  // 환경변수를 불러오고, 없으면 기본값 123을 사용하고, 숫자로 변환
  const timeout = process.env.NEXT_PUBLIC_CACHE_TIMEOUT_SECONDS;
  const parsedTimeout = timeout ? parseInt(timeout, 10) : 123;

  // 유효한 숫자일 경우 반환, 아니면 기본값 123
  return isNaN(parsedTimeout) ? 123 : parsedTimeout;
}