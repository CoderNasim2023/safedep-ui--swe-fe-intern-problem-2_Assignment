"use client";

import React from "react";

export default function GlobalError({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
        <p className="text-sm text-muted-foreground mb-4">An unexpected error occurred while rendering the page.</p>
        <details className="text-left whitespace-pre-wrap text-xs bg-gray-50 p-3 rounded border">
          {error.message}
        </details>
      </div>
    </div>
  );
}
