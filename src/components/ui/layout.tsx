import * as React from "react";

import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
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
        <ScrollArea className="w-full">
          <div className="p-5">{children}</div>
          <Toaster
            richColors
            position="bottom-center"
            theme="light"
            toastOptions={{}}
          />
        </ScrollArea>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
