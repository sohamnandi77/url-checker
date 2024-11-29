import { useState } from "react";

import { Layout } from "@/components/ui/layout";
import { ScanUrlContent } from "@/components/scan-url-content";
import { UnshortenUrlContent } from "@/components/unshorten-url-content";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

export default function App() {
  const [tab, setTab] = useState("scanurl");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const handleMessage = (message: { tab?: string; url?: string }) => {
      if (message.tab && message.url) {
        setTab(message.tab);
        setUrl(message.url);
      }
    };
    browser.runtime.onMessage.addListener(handleMessage);
    return () => browser.runtime.onMessage.removeListener(handleMessage);
  }, [tab]);

  return (
    <Layout>
      <Tabs
        value={tab}
        onValueChange={(value) => setTab(value)}
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="scanurl">Scan URL</TabsTrigger>
          <TabsTrigger value="unshortenurl">Unshorten URL</TabsTrigger>
        </TabsList>
        <TabsContent value="scanurl">
          <ScanUrlContent url={url} setUrl={setUrl} />
        </TabsContent>
        <TabsContent value="unshortenurl">
          <UnshortenUrlContent url={url} setUrl={setUrl} />
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
