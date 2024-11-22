import { Layout } from "@/components/ui/layout";
import { ScanUrlContent } from "@/components/scan-url-content";
import { UnshortenUrlContent } from "@/components/unshorten-url-content";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

export default function App() {
  return (
    <Layout>
      <Tabs defaultValue="scanurl" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="scanurl">Scan URL</TabsTrigger>
          <TabsTrigger value="unshortenurl">Unshorten URL</TabsTrigger>
        </TabsList>
        <TabsContent value="scanurl">
          <ScanUrlContent />
        </TabsContent>
        <TabsContent value="unshortenurl">
          <UnshortenUrlContent />
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
