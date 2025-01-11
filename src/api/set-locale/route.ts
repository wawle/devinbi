// File: src/app/api/set-locale/route.ts
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { locales } from "@/lib/locales";

export async function POST(request: NextRequest) {
  try {
    const { locale } = await request.json();

    // Validate the locale
    if (!(locales as readonly string[]).includes(locale)) {
      return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
    }

    // Set the locale cookie
    (await cookies()).set("locale", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: true,
      sameSite: "strict",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error setting locale:", error);
    return NextResponse.json(
      { error: "Failed to set locale" },
      { status: 500 },
    );
  }
}
