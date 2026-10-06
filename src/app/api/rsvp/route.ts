import { NextRequest, NextResponse } from "next/server";

const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

function unavailable() {
  return NextResponse.json(
    { status: "error", message: "Chưa cấu hình Google Apps Script URL." },
    { status: 503 },
  );
}

export async function GET(request: NextRequest) {
  if (!scriptUrl) return unavailable();

  const id = request.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ status: "not_found", message: "Thiếu mã khách." }, { status: 400 });

  try {
    const url = new URL(scriptUrl);
    url.searchParams.set("id", id);
    const response = await fetch(url, { cache: "no-store" });
    return NextResponse.json(await response.json(), { status: response.status });
  } catch {
    return NextResponse.json({ status: "error", message: "Không thể kết nối Google Apps Script." }, { status: 502 });
  }
}

export async function POST(request: NextRequest) {
  if (!scriptUrl) return unavailable();

  try {
    const body = await request.json();
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    return NextResponse.json(await response.json(), { status: response.status });
  } catch {
    return NextResponse.json({ status: "error", message: "Không thể gửi xác nhận." }, { status: 502 });
  }
}
