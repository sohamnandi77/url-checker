import { CheckCircle2, CircleAlert } from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { RadialProgress } from "@/components/radial-progress";
import { DetailsContent } from "@/components/details-content";
import { DetectionContent } from "@/components/detection-content";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface UrlReportProps {
  data: any;
}

export const UrlReport = ({ data }: UrlReportProps) => {
  const progress = data.attributes.last_analysis_stats.malicious;
  const total =
    data.attributes.last_analysis_stats.malicious +
    data.attributes.last_analysis_stats.suspicious +
    data.attributes.last_analysis_stats.undetected +
    data.attributes.last_analysis_stats.harmless +
    data.attributes.last_analysis_stats.timeout;

  const last_analysis_results = data.attributes.last_analysis_results;

  const categories = data.attributes.categories;
  const final_url = data.attributes.last_final_url;
  const status_code = data.attributes.last_http_response_code;
  const redirection_chain = data.attributes.redirection_chain;

  return (
    <>
      <div className="flex w-full items-center gap-3">
        <div className="w-24">
          <RadialProgress progress={progress} total={total} />
        </div>
        <div className="w-full flex-1 flex-col space-y-3">
          <div className="flex items-center justify-start space-x-2 rounded-md bg-gray-200 px-3 py-2 dark:bg-neutral-700">
            {progress > 0 ? (
              <CircleAlert size={16} className="text-red-500" />
            ) : (
              <CheckCircle2 size={16} className="text-green-600" />
            )}
            <p
              className={cn(
                "text-xs font-medium",
                progress > 0 ? "text-red-500" : "text-green-600",
              )}
            >
              {progress > 0
                ? `${progress}/${total} flagged this URL as malicious`
                : "None flagged this URL as malicious"}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-muted-foreground">
              {data.attributes.url}
            </p>
            <p className="text-xs text-muted-foreground">
              {data.attributes.url.split("/")[2]}
            </p>
          </div>
        </div>
      </div>

      <Separator className="mb-2 mt-6" />

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="!border-none" value="view-detail">
          <AccordionTrigger className="justify-center space-x-2 py-2 text-center text-xs">
            <p>View Details</p>
          </AccordionTrigger>
          <AccordionContent className="pb-0 pt-1.5">
            <Tabs defaultValue="detection" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="detection">Detection</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>
              <TabsContent value="detection">
                <DetectionContent analysis={last_analysis_results} />
              </TabsContent>
              <TabsContent value="details">
                <DetailsContent
                  categories={categories}
                  final_url={final_url}
                  status_code={status_code}
                  redirection_chain={redirection_chain}
                />
              </TabsContent>
            </Tabs>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
