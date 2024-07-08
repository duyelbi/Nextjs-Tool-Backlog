import React from "react";
import { cookies } from "next/headers";

import IIssuesTable from "@/components/Issues/IssuesTable";
import { API_KEY, BACK_LOG_URL } from "@/lib/constants";
import { getIssues } from "@/lib/api";
import { IIssue } from "@/lib/types";

const fetchIssues = async (
  projectId: string
): Promise<{
  issues: IIssue[];
  error: string | null;
}> => {
  try {
    const backLogUrl = cookies().get(BACK_LOG_URL)?.value || "";
    const apiKey = cookies().get(API_KEY)?.value || "";
    const options = { "projectId[]": projectId };

    const data = await getIssues(backLogUrl, apiKey, options);
    return {
      issues: data ?? [],
      error: null,
    };
  } catch (error) {
    console.error("Failed to fetch issues:", error);
    return {
      issues: [],
      error: "Get issues error",
    };
  }
};

export default async function ProjectDetailPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { issues, error } = await fetchIssues(params.projectId);

  return (
    <div className="flex flex-col gap-4">
      <IIssuesTable issues={issues} error={error} />
    </div>
  );
}
