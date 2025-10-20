import { IProject } from "@/models/Projects";

export async function fetchProjects(): Promise<IProject[]> {
  try {
    const response = await fetch('/api/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store' // To ensure we always get fresh data
    });
 
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const projects: IProject[] = await response.json();
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function fetchProjectById(id: string): Promise<IProject | null> {
  try {
    const response = await fetch(`/api/projects/${id}`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const project: IProject = await response.json();
    return project;
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error);
    return null;
  }
}
