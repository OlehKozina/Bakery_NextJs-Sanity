import { NextResponse } from "next/server";
import { getBakers } from "@/sanity/sanity-utils";

export async function GET() {
  try {
    const bakers = await getBakers();
    return NextResponse.json({ bakers });
  } catch (error) {
    return NextResponse.error();
  }
}
