import { useState } from "react";
import { Undo2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScanUrlForm } from "@/components/scan-url-form";
import { ScanUrlReport } from "@/components/scan-url-report";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

export const ScanUrlContent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  return (
    <>
      {!data && (
        <Card>
          <CardHeader>
            <CardTitle>Scan URL</CardTitle>
            <CardDescription>
              Enter the URL you want to scan here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 p-6 pt-0">
            <ScanUrlForm
              loading={loading}
              setLoading={setLoading}
              setData={setData}
            />
          </CardContent>
        </Card>
      )}

      {data && (
        <Card className="relative dark:bg-muted/30">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-6 w-6"
                  onClick={() => setData(null)}
                >
                  <Undo2 />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-48 text-xs">Reset the URL scan report.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <CardHeader className="p-4 pb-0">
            <CardTitle>URL Scan Report</CardTitle>
          </CardHeader>
          <CardContent className="w-full p-4 pb-2">
            <ScanUrlReport data={data} />
          </CardContent>
        </Card>
      )}
    </>
  );
};
