import { buildUrl, fetchData } from "./utils";
import { IProject } from "../types";

const PROJECTS = "projects";

interface GetProjectsOptions {
  archived?: boolean;
  all?: boolean;
}

export const getProjects = async (
  backLogUrl: string,
  apiKey: string,
  options: GetProjectsOptions
): Promise<IProject[]> => {
  const url = buildUrl(backLogUrl, apiKey, "projects", options);
  return fetchData(url);
};

export const addProject = async (
  backLogUrl: "",
  apiKey: "",
  project: Partial<IProject>
): Promise<IProject> => {
  const url = buildUrl(backLogUrl, apiKey, PROJECTS);
  const options: RequestInit = {
    method: "POST",
    body: JSON.stringify(project),
  };
  return fetchData(url, options);
};

export const updateProject = async (
  backLogUrl: "",
  apiKey: "",
  projectIdOrKey: string | number,
  project: Partial<IProject>
): Promise<IProject> => {
  const url = buildUrl(backLogUrl, apiKey, `${PROJECTS}/${projectIdOrKey}`);
  const options: RequestInit = {
    method: "PATCH",
    body: JSON.stringify(project),
  };
  return fetchData(url, options);
};

export const deleteProject = async (
  backLogUrl: "",
  apiKey: "",
  projectIdOrKey: number | string
): Promise<void> => {
  const url = buildUrl(backLogUrl, apiKey, `${PROJECTS}/${projectIdOrKey}`);
  const options: RequestInit = {
    method: "DELETE",
  };
  return fetchData(url, options);
};
