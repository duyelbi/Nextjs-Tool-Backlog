import React from "react";
import { cookies } from "next/headers";

import ProjectsTable from "@/components/Projects/ProjectsTable";
import ProjectsForm from "@/components/Projects/ProjectsFrom";
import { API_KEY, BACK_LOG_URL } from "@/lib/constants";
import { getProjects } from "@/lib/api";
import { IProject } from "@/lib/types";

const fetchProjects = async (): Promise<{
  projects: IProject[];
  error: string | null;
}> => {
  try {
    const backLogUrl = cookies().get(BACK_LOG_URL)?.value || "";
    const apiKey = cookies().get(API_KEY)?.value || "";

    const data = await getProjects(backLogUrl, apiKey, {
      archived: true,
      all: false,
    });
    return {
      projects: data ?? [],
      error: null,
    };
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return {
      projects: [],
      error: "Get Project error",
    };
  }
};

export default async function ProjectsPage() {
  const { projects, error } = await fetchProjects();

  return (
    <div className="flex flex-col gap-4">
      <ProjectsForm />
      <ProjectsTable projects={projects} error={error} />
    </div>
  );
}
