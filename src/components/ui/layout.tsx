import * as React from "react";

import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className={cn("max-h-[34rem] w-full overflow-y-auto", className)}>
        <Header />
        {children}
        {/* TODO: Footer */}
      </div>
    </ThemeProvider>
  );
};

export { Layout };
