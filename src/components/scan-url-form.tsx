import * as z from "zod";
import { toast } from "sonner";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getRequest, postRequest } from "@/lib/api-helper";
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

interface ScanUrlFormProps {
  url?: string;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setData: (data: any) => void;
}

const formSchema = z.object({
  url: z.string().min(1, "URL is required").url(),
});

export const ScanUrlForm = ({
  url: linkURL,
  loading,
  setLoading,
  setData,
}: ScanUrlFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: linkURL || "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      // scan url
      const scanResponse = await postRequest("/urls", values);
      const analysisId = scanResponse.data.id;

      // analyse url
      const analyseResponse = await getRequest(`/analyses/${analysisId}`);
      const id = analyseResponse.meta.url_info.id;

      // delay for 3 second
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // get url report
      const reportResponse = await getRequest(`/urls/${id}`);
      const data = reportResponse.data;

      if (
        data.attributes &&
        data.attributes.last_analysis_results &&
        Object.keys(data.attributes.last_analysis_results).length > 0
      ) {
        setData(reportResponse.data);
      } else {
        // scan url again
        const scanResponseAgain = await postRequest("/urls", values);
        const analysisIdAgain = scanResponseAgain.data.id;

        // analyse url again
        const analyseResponseAgain = await getRequest(
          `/analyses/${analysisIdAgain}`,
        );
        const idAgain = analyseResponseAgain.meta.url_info.id;

        // delay for 10 seconds
        await new Promise((resolve) => setTimeout(resolve, 10000));

        // get url report again
        const reportResponseAgain = await getRequest(`/urls/${idAgain}`);
        setData(reportResponseAgain.data);
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Uh oh! Something went wrong. Please try again.",
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (linkURL) {
      handleSubmit({ url: linkURL });
    }
  }, [linkURL]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full items-start justify-between gap-2"
      >
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  type="url"
                  placeholder="https://example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={loading}
          type="submit"
          variant="default"
          className="min-w-[66px]"
        >
          {loading && <LoaderCircle className="animate-spin" size={18} />}
          {!loading && `Scan`}
        </Button>
      </form>
    </Form>
  );
};
