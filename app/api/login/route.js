import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();

  const { username, password } = res;

  console.log(res, "res");

  if (username === "admin@mail.com" && password === "123456") {
    return NextResponse.json({ success: true, admin: true });
  } else {
    return NextResponse.json({ success: true, admin: false });
  }
}
