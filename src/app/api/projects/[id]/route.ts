import { connectToDatabase } from "@/lib/db";
import Project from "@/models/Projects";
import { NextRequest, NextResponse } from "next/server";

export async function GET( request: NextRequest, 
  {params}: { params: Promise<{ id: string }> })
  : Promise<NextResponse> {
  try {
    const {id} = await params;
    console.log('received id:', id);

    if (!id) {
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 }
      );
    }
 
    await connectToDatabase();
    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching project", error);
    return NextResponse.json(
      { error: "Error fetching project" },
      { status: 500 }
    );
  }
}





