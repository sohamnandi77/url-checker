import { format } from "date-fns";
import { Info } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

type Category = {
  [key: string]: string;
};

interface DetailsContentProps {
  categories: Category;
  first_submission_date: number;
  last_submission_date: number;
  last_analysis_date: number;
  final_url: string;
  status_code: number;
  content_type: string;
  redirection_chain: string[];
}

export const DetailsContent = ({
  categories,
  first_submission_date,
  last_submission_date,
  last_analysis_date,
  final_url,
  status_code,
  content_type,
  redirection_chain,
}: DetailsContentProps) => {
  return (
    <div className="grid gap-2">
      <div className="flex flex-col">
        <div className="my-1 flex items-center justify-center space-x-1.5 rounded-sm bg-muted px-2 py-1">
          <p className="text-center text-xs text-muted-foreground">
            Categories
          </p>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info
                  size={16}
                  className="cursor-pointer text-muted-foreground hover:text-primary/95"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-48 text-xs">
                  Category of the URL or domain content as provided by different
                  engines.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex w-full flex-col space-y-2">
          {Object.keys(categories).map((category, i) => (
            <div className="flex flex-col">
              <p className="text-start text-xs font-semibold text-muted-foreground">
                {category}
              </p>
              <p className="text-start text-xs text-muted-foreground">
                {categories[category]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="my-1 flex items-center justify-center space-x-1.5 rounded-sm bg-muted px-2 py-1">
          <p className="text-center text-xs text-muted-foreground">History</p>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info
                  size={16}
                  className="cursor-pointer text-muted-foreground hover:text-primary/95"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-48 text-xs">
                  Relevant dates related to the URL being studied.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex w-full flex-col space-y-2">
          <div className="flex flex-col">
            <p className="text-start text-xs font-semibold text-muted-foreground">
              First Submission
            </p>
            <p className="text-start text-xs text-muted-foreground">
              {format(
                new Date(first_submission_date * 1000),
                "dd MMM yyyy hh:mm:ss a",
              )}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-start text-xs font-semibold text-muted-foreground">
              Last Submission
            </p>
            <p className="text-start text-xs text-muted-foreground">
              {format(
                new Date(last_submission_date * 1000),
                "dd MMM yyyy hh:mm:ss a",
              )}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-start text-xs font-semibold text-muted-foreground">
              Last Analysis
            </p>
            <p className="text-start text-xs text-muted-foreground">
              {format(
                new Date(last_analysis_date * 1000),
                "dd MMM yyyy hh:mm:ss a",
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="my-1 flex items-center justify-center space-x-1.5 rounded-sm bg-muted px-2 py-1">
          <p className="text-center text-xs text-muted-foreground">
            HTTP Response
          </p>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info
                  size={16}
                  className="cursor-pointer text-muted-foreground hover:text-primary/95"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-48 text-xs">
                  Data gathered from standard HyperText Transfer Protocol
                  communication when asking for the URL being studied.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex w-full flex-col space-y-2">
          <div className="flex flex-col">
            <p className="text-start text-xs font-semibold text-muted-foreground">
              Final URL
            </p>
            <p className="text-start text-xs text-muted-foreground">
              {final_url}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-start text-xs font-semibold text-muted-foreground">
              Status Code
            </p>
            <p className="text-start text-xs text-muted-foreground">
              {status_code}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-start text-xs font-semibold text-muted-foreground">
              Content Type
            </p>
            <p className="text-start text-xs text-muted-foreground">
              {content_type}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="my-1 flex items-center justify-center space-x-1.5 rounded-sm bg-muted px-2 py-1">
          <p className="text-center text-xs text-muted-foreground">
            Redirection chain
          </p>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info
                  size={16}
                  className="cursor-pointer text-muted-foreground hover:text-primary/95"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-48 text-xs">
                  List of all redirections until the final URL under study is
                  reached (Limited to 5 redirections).
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex w-full flex-col space-y-2">
          <div className="flex flex-col">
            {redirection_chain.map((url, i) => (
              <p className="text-start text-xs text-muted-foreground" key={i}>
                {url}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
