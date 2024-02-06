import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await prisma.country.findMany();
    const random = Math.floor(Math.random() * result.length);
    return NextResponse.json(result[random]);
  } catch (e: any) {
    return NextResponse.json({ error: e.message });
  }
}
