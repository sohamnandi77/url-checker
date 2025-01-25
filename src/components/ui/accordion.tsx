import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = (
  props: React.ComponentProps<typeof AccordionPrimitive.Item>,
) => {
  const { className, ...rest } = props;
  return (
    <AccordionPrimitive.Item className={cn("border-b", className)} {...rest} />
  );
};
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = (
  props: React.ComponentProps<typeof AccordionPrimitive.Trigger>,
) => {
  const { className, children, ...rest } = props;

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...rest}
      >
        {children}
        <ChevronDown className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = (
  props: React.ComponentProps<typeof AccordionPrimitive.Content>,
) => {
  const { className, children, ...rest } = props;

  return (
    <AccordionPrimitive.Content
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...rest}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
};
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
