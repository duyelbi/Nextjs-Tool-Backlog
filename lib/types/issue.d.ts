import { IUser } from "./user";

export interface INulabAccount {
  nulabId: string;
  name: string;
  uniqueId: string;
  iconUrl: string;
}

export interface IIssueType {
  id: number;
  projectId: number;
  name: string;
  color: string;
  displayOrder: number;
}

export interface IPriority {
  id: number;
  name: string;
}

export interface IStatus {
  id: number;
  projectId: number;
  name: string;
  color: string;
  displayOrder: number;
}

export interface IIssue {
  id: number;
  projectId: number;
  issueKey: string;
  keyId: number;
  issueType: IIssueType;
  summary: string;
  description: string;
  resolution: string | null;
  priority: IPriority;
  status: IStatus;
  assignee: IUser;
  category: any[]; // Define based on actual structure if available
  versions: any[]; // Define based on actual structure if available
  milestone: any[]; // Define based on actual structure if available
  startDate: string | null;
  dueDate: string | null;
  estimatedHours: number | null;
  actualHours: number | null;
  parentIssueId: number | null;
  createdUser: IUser;
  created: string;
  updatedUser: IUser;
  updated: string;
  customFields: any[]; // Define based on actual structure if available
  attachments: any[]; // Define based on actual structure if available
  sharedFiles: any[]; // Define based on actual structure if available
  externalFileLinks: any[]; // Define based on actual structure if available
  stars: any[]; // Define based on actual structure if available
}
