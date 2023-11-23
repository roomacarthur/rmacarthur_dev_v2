"use client";
import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

export default function App({ children }) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background min-h-screen">
        {children}
      </main>
    </NextUIProvider>
  );
}
