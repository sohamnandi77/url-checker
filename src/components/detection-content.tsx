import { CheckCircle2, CircleAlert, CircleHelp, Info } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

type AnalysisResult = {
  method: string;
  engine_name: string;
  category: string;
  result: string;
};

type LastAnalysisResults = {
  [engine_name: string]: AnalysisResult;
};

interface DetectionContentProps {
  analysis: LastAnalysisResults;
}

export const DetectionContent = ({ analysis }: DetectionContentProps) => {
  return (
    <>
      <div className="my-1 flex items-center justify-center space-x-1.5 rounded-sm bg-gray-200 px-2 py-1 dark:bg-neutral-700">
        <p className="text-center text-xs text-muted-foreground">
          Security vendors' analysis
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
                Security industry / community detections, or lack thereof, for
                the reported domain or URL.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="grid divide-y-[1px]">
        {Object.keys(analysis).map((engineName, i) => (
          <div
            className="flex justify-between space-x-2 py-1.5 font-medium"
            key={i}
          >
            <p className="text-xs text-muted-foreground">{engineName}</p>
            <div className="flex items-center space-x-1.5">
              {analysis[engineName].result === "clean" ? (
                <CheckCircle2 size={16} className="text-green-500" />
              ) : analysis[engineName].result === "malicious" ? (
                <CircleAlert size={16} className="text-red-500" />
              ) : analysis[engineName].result === "suspicious" ? (
                <CircleAlert size={16} className="text-yellow-500" />
              ) : (
                <CircleHelp size={16} className="text-gray-500" />
              )}
              <p className="text-xs text-muted-foreground">
                {analysis[engineName].result.charAt(0).toUpperCase() +
                  analysis[engineName].result.slice(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
