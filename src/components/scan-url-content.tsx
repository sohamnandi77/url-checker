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

export const ScanUrlContent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scan URL</CardTitle>
        <CardDescription>Enter the URL you want to scan here.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="scanurl">URL</Label>
          <Input
            type="url"
            id="scanurl"
            name="scanurl"
            placeholder="https://example.com"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Scan</Button>
      </CardFooter>
    </Card>
  );
};
