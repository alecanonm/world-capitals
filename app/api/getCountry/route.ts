import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await prisma.country.findMany();
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json({ error: e.message });
  }
}
