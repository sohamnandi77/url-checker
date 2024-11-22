import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

export const UnshortenUrlContent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Unshorten URL</CardTitle>
        <CardDescription>
          Enter the URL you want to unshorten here.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="unshortenurl">URL</Label>
          <Input
            type="url"
            id="unshortenurl"
            name="unshortenurl"
            placeholder="https://shorturl.at/"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Unshorten</Button>
      </CardFooter>
    </Card>
  );
};
