import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  // 이 경로들에만 미들웨어가 적용됩니다.
  matcher: [
    "/api/flags",
    "/api/flags/imgbb",
    "/api/flags/insert",
  ], // 이 경로들에만 미들웨어가 적용됩니다.
};

// Read ALLOWED_DOMAINS from the environment variable
const ALLOWED_DOMAINS = process.env.ALLOWED_DOMAINS?.split(",") || [];
const STG = process.env.IS_STG;

export async function middleware(request: NextRequest) {
  // if (STG !== "LOCAL") {
  //   // STEP 1
  //   const origin = request.headers.get("origin");
  //   const referer = request.headers.get("referer");
  //   //const host = request.headers.get('host');

  //   // console.log("Request Headers:");
  //   // request.headers.forEach((value, key) => {
  //   //   console.log(`${key}: ${value}`);
  //   // });

  //   const isValidOrigin =
  //     ALLOWED_DOMAINS.includes(origin || "") ||
  //     ALLOWED_DOMAINS.includes(referer || "");

  //   if (!isValidOrigin) {
  //     return new NextResponse("Forbidden", { status: 403 });
  //   }
  // }

  // STEP 2
  const headerKey = request.headers.get("Authorization")?.split(" ")[1];
  const queryKey = request.nextUrl.searchParams.get("k123");

  const apiKey = process.env.NEXT_PUBLIC_F123_API_KEY || "날리면";
  if (headerKey === apiKey || queryKey === apiKey) {
    return NextResponse.next(); // 인증 성공
  }

  return NextResponse.redirect(`${process.env.BASE_URL}/403`); // 인증 실패
}
