import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/ui/layout";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

export default function App() {
  return (
    <Layout>
      <Tabs defaultValue="scanurl" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="scanurl">Scan URL</TabsTrigger>
          <TabsTrigger value="unshortenurl">Unshorten URL</TabsTrigger>
        </TabsList>
        <TabsContent value="scanurl">
          <Card>
            <CardHeader>
              <CardTitle>Scan URL</CardTitle>
              <CardDescription>
                Enter the URL you want to scan here.
              </CardDescription>
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
        </TabsContent>
        <TabsContent value="unshortenurl">
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
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
