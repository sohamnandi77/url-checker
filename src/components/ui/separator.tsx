import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = (
  props: React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
) => {
  const {
    className,
    orientation = "horizontal",
    decorative = true,
    ...rest
  } = props;
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...rest}
    />
  );
};
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
