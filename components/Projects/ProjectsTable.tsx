"use client";

import React from "react";

import { Tooltip } from "@nextui-org/tooltip";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableCell,
  TableRow,
} from "@nextui-org/table";

import { DeleteIcon, EditIcon, EyeIcon } from "@/lib/assets/icons";
import { IProject } from "@/lib/types";

const columns: {
  id: string;
  name: string;
  align?: "end" | "center" | "start";
}[] = [
  { name: "Project Key", id: "projectKey", align: "start" },
  { name: "Project Name", id: "name", align: "start" },
  { name: "ACTIONS", id: "actions", align: "end" },
];

interface IProjectsTable {
  projects: IProject[];
  error: React.ReactNode;
}

export default function ProjectsTable({ projects, error }: IProjectsTable) {
  const renderCell = (project: IProject, columnKey: React.Key) => {
    const cellValue = project[columnKey as keyof IProject];

    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.id}
            align={column.align ? column.align : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={projects} emptyContent={error ?? "projects empty"}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
