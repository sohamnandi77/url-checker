import { useState } from "react";
import { Undo2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UnshortenUrlForm } from "@/components/unshorten-url-form";
import { UnshortenUrlResult } from "@/components/unshorten-url-result";
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

interface UnshortenUrlContentProps {
  url?: string;
  setUrl?: (url: string) => void;
}

export const UnshortenUrlContent = ({
  url,
  setUrl,
}: UnshortenUrlContentProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  return (
    <>
      {!data && (
        <Card>
          <CardHeader>
            <CardTitle>Unshorten URL</CardTitle>
            <CardDescription>
              Enter the URL you want to unshorten here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 p-6 pt-0">
            <UnshortenUrlForm
              url={url}
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
                  onClick={() => {
                    setData(null);
                    setUrl && setUrl("");
                  }}
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
            <CardTitle>URL Unshorten Result</CardTitle>
          </CardHeader>
          <CardContent className="w-full p-4">
            <UnshortenUrlResult data={data} />
          </CardContent>
        </Card>
      )}
    </>
  );
};
