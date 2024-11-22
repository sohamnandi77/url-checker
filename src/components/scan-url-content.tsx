import { ScanUrlForm } from "@/components/scan-url-form";
import {
  Card,
  CardTitle,
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
        <ScanUrlForm />
      </CardContent>
    </Card>
  );
};
