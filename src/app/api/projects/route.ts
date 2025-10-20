import { connectToDatabase } from "@/lib/db";
import Project from "@/models/Projects";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase();
        const projects = await Project.find({}).sort({ createdAt: -1 })
        if (!projects || projects.length === 0) { 
            return NextResponse.json([], { status: 200 })
        }

        return NextResponse.json(projects)
    } catch (error) {
        console.error("Error fetching projects", error);
        return NextResponse.json(
            { error: "Error fetching projects" },
            { status: 500 }
        )
    }
} 