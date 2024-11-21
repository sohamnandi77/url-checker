import * as React from "react";

import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeProvider } from "@/components/theme-provider";

export const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className={cn("w-full", className)}>
        <Header />
        <ScrollArea className="h-96 w-full">
          <div className="h-[calc(384px-52px)]">{children}</div>
          <Footer />
        </ScrollArea>
      </div>
    </ThemeProvider>
  );
};
