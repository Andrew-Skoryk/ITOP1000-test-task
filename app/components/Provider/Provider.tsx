"use client";

import { NextUIProvider } from "@nextui-org/react";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="flex flex-col w-full grow">{children}</NextUIProvider>
  );
}

export default Providers;
