import { useRef, useState } from "react";
import { ClipboardIcon, CheckIcon } from "@radix-ui/react-icons";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

interface UnshortenUrlResultProps {
  data: any;
}

export const UnshortenUrlResult = ({ data }: UnshortenUrlResultProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="final-url">Final URL</Label>
      <div className="flex w-full items-center space-x-2">
        <Input
          id="final-url"
          type="url"
          value={data.attributes.last_final_url}
          readOnly
          ref={inputRef}
        />
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <Button
                type="button"
                variant="default"
                className="size-9"
                onClick={handleCopy}
              >
                {copied ? <CheckIcon /> : <ClipboardIcon />}
              </Button>
            </TooltipTrigger>
            <TooltipContent
              onPointerDownOutside={(event) => {
                event.preventDefault();
              }}
            >
              <p className="max-w-48 text-xs">{copied ? "Copied!" : "Copy"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};
