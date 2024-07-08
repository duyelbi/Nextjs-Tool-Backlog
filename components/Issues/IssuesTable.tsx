"use client";

import React from "react";

import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableCell,
  TableRow,
} from "@nextui-org/table";

import { DeleteIcon, EditIcon, EyeIcon } from "@/lib/assets/icons";
import { IIssue } from "@/lib/types";

interface IIIssuesTable {
  issues: IIssue[];
  error: React.ReactNode;
}

export default function IIssuesTable({ issues, error }: IIIssuesTable) {
  console.log("issues", issues);
  console.log("error", error);

  return <div>Issue</div>;
}
