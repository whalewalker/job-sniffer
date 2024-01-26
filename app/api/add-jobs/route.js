import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  console.log(res, "ress");

  const { title, company, salary, type } = res;

  const result = await prisma.post.create({
    data: {
      title,
      company,
      salary,
      type,
    },
  });

  return NextResponse.json({ result });
}
