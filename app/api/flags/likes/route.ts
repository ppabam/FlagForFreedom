import { NextRequest, NextResponse } from "next/server";
import { insertFlagLikeInDatabase } from "@/app/lib/data";

function extractBrowser(userAgent: string): string {
  if (userAgent.includes("Firefox")) return "Firefox";
  if (userAgent.includes("Edg")) return "Edge";
  if (userAgent.includes("Chrome")) return "Chrome";
  if (userAgent.includes("Safari")) return "Safari";
  if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera";
  return "Unknown";
}

export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
      const { flagId, likeStatus } = body;
  
      if (!flagId || ![1, -1].includes(likeStatus)) {
        return NextResponse.json({ error: "Invalid data" }, { status: 400 });
      }
  
      // 클라이언트 정보 추출
      const ipAddress = req.headers.get("x-forwarded-for") || req.ip || "0.0.0.0";
      const userAgent = req.headers.get("user-agent") || "";
      const browser = extractBrowser(userAgent);
      const device = /Mobile|Tablet|iPad|iPhone|Android/i.test(userAgent)
        ? "mobile"
        : "desktop";
      const language = req.headers.get("accept-language") || "en-US";
  
      // 데이터베이스 삽입
      await insertFlagLikeInDatabase(flagId, likeStatus, ipAddress, browser, device);
  
      return NextResponse.json({
        success: true,
        data: { browser, device, ipAddress, language },
      });
    } catch (error) {
      console.error("Error in API /likes:", error);
      return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
  }
