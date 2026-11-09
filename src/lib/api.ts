import { IProject } from "@/models/Projects";
import { MOCK_PROJECTS } from "./mock-projects";

/**
 * ============================================================================
 * DATA SOURCE TOGGLE (THE ONE FLAG)
 * ============================================================================
 * Set to `true` to render realistic sales-oriented mock projects instantly.
 * Set to `false` to fetch real project records from MongoDB Atlas via /api/projects.
 * Switching requires changing ONLY this flag; zero component modifications needed.
 * ============================================================================
 */
export const USE_MOCK = true;

export async function fetchProjects(): Promise<IProject[]> {
  if (USE_MOCK) {
    return Promise.resolve([...MOCK_PROJECTS]);
  }

  try {
    const response = await fetch('/api/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
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
  if (USE_MOCK) {
    const match = MOCK_PROJECTS.find((p) => p._id === id);
    return Promise.resolve(match ? { ...match } : null);
  }

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
