import { useState } from "react";

import { UrlReport } from "@/components/url-report";
import { ScanUrlForm } from "@/components/scan-url-form";
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
    <Card>
      {!data && (
        <CardHeader>
          <CardTitle>Scan URL</CardTitle>
          <CardDescription>
            Enter the URL you want to scan here.
          </CardDescription>
        </CardHeader>
      )}
      <CardContent className="p-0">
        {!data && (
          <div className="space-y-2 p-6 pt-0">
            <ScanUrlForm
              loading={loading}
              setLoading={setLoading}
              setData={setData}
            />
          </div>
        )}
        {data && (
          <div className="w-full p-4 pb-2">
            <UrlReport data={data} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};
