import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Footer = () => {
  return (
    // <div className="flex w-full flex-col bg-primary/15 px-5 py-3 dark:bg-secondary-foreground/95">
    //   <h2 className="text-sm font-semibold text-primary dark:text-secondary">
    //     Check URL for free
    //   </h2>
    //   <p className="text-sm text-muted-foreground">
    //     URL Checker is an extension that allows you to check URLs for malicious
    //     content. Use it for your own safety.
    //   </p>
    //   <p className="mt-2 text-sm text-muted-foreground">
    //     Created by{" "}
    //     <a
    //       className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80 dark:text-secondary dark:hover:text-secondary/80"
    //       href="https://www.smarttechtank.com"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       Smart Tech Tank
    //     </a>
    //   </p>
    // </div>
    <Accordion
      type="single"
      collapsible
      className="w-full bg-primary/15 px-5 dark:bg-secondary-foreground/95"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">
          <p className="text-sm text-muted-foreground">
            Created by{" "}
            <a
              className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80 dark:text-secondary dark:hover:text-secondary/80"
              href="https://www.smarttechtank.com"
              target="_blank"
              rel="noreferrer"
            >
              Smart Tech Tank
            </a>
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <h2 className="text-sm font-semibold text-primary dark:text-secondary">
            Check URL for free
          </h2>
          <p className="text-sm text-muted-foreground">
            URL Checker is an extension that allows you to check URLs for
            malicious content. Use it for your own safety.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
