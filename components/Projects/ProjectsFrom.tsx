import React from "react";
import { cookies } from "next/headers";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import { API_KEY, BACK_LOG_URL } from "@/lib/constants";

export default function ProjectsForm() {
  async function createKeyCookie(formData: FormData) {
    "use server";

    const apiBaseUrl = formData.get(BACK_LOG_URL) as string;
    const apiKey = formData.get(API_KEY) as string;

    if (!apiBaseUrl || !apiKey) {
      return;
    }

    cookies().set(BACK_LOG_URL, apiBaseUrl);
    cookies().set(API_KEY, apiKey);
  }

  return (
    <form action={createKeyCookie} className="flex flex-col gap-3">
      <div className="flex justify-end gap-3 max-w-2xl">
        <Input
          id={BACK_LOG_URL}
          name={BACK_LOG_URL}
          isRequired
          label="BackLog Url"
          placeholder="https://example.backlog.com"
          variant="underlined"
          labelPlacement="outside"
          size="sm"
          className="max-w-xs"
        />

        <Input
          id={API_KEY}
          name={API_KEY}
          isRequired
          label="API Key"
          placeholder="Your API Key"
          variant="underlined"
          labelPlacement="outside"
          size="sm"
          className="max-w-xs"
        />
      </div>

      <div className="flex justify-end max-w-2xl">
        <Button type="submit" size="sm" color="secondary" variant="ghost">
          Create Cookie
        </Button>
      </div>
    </form>
  );
}
