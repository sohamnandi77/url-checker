import * as React from "react";

import { cn } from "@/lib/utils";
import { Header } from "@/components/header";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full max-h-[34rem] overflow-y-auto", className)}>
      <Header />
      {children}
      {/* TODO: Footer */}
    </div>
  );
};

export { Layout };
