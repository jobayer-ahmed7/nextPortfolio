import { connectToDatabase } from "@/lib/db";
import Project from "@/models/Projects";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
): Promise<NextResponse> {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { error: "Project slug is required" },
        { status: 400 },
      );
    }

    await connectToDatabase();

    // Check by slug first; if valid ObjectId, also allow lookup by _id for backward compatibility
    const isObjectId = mongoose.isValidObjectId(slug);
    const project = isObjectId
      ? await Project.findOne({ $or: [{ slug }, { _id: slug }] })
      : await Project.findOne({ slug });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching project", error);
    return NextResponse.json(
      { error: "Error fetching project" },
      { status: 500 },
    );
  }
}
