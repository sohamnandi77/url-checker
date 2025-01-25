import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Footer = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-zinc-200 px-5 dark:bg-zinc-300"
    >
      <AccordionItem className="border-none!" value="item-1">
        <AccordionTrigger className="hover:no-underline">
          <h2 className="text-sm font-semibold text-primary dark:text-secondary">
            Check URL for free
          </h2>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-muted-foreground dark:text-muted/70">
            URL Checker is an extension that allows you to check URLs for
            malicious content. Use it for your own safety.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
