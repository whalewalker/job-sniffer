import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request, { params }) {
  const id = params.id;

  // this id is a hard coded user id
  const user = await prisma.user.findUnique({
    where: { id: "clrr039g40000txfefr2decyl" },
  });

  const result = await prisma.post.findUnique({
    where: { id },
  });

  // const updateUser = await prisma.user.update({
  //   where: {
  //     id: "clrr039g40000txfefr2decyl",
  //   },
  //   data: {
  //     posts: [],
  //   },
  // });

  //   console.log(result, "params");

  return NextResponse.json(result);
}
