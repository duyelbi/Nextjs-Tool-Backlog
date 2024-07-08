import { buildUrl, fetchData } from "./utils";
import { IIssue } from "../types";

interface GetIssuesOptions {
  "projectId[]"?: string;
}

export const getIssues = async (
  backLogUrl: string,
  apiKey: string,
  options: GetIssuesOptions
): Promise<IIssue[]> => {
  const url = buildUrl(backLogUrl, apiKey, "issues", options);
  return fetchData(url);
};
