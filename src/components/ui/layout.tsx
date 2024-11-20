import * as React from "react";

import { cn } from "@/lib/utils";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full max-h-[34rem] overflow-y-auto", className)}>
      {/* TODO: Header */}
      {children}
      {/* TODO: Footer */}
    </div>
  );
};

export { Layout };
