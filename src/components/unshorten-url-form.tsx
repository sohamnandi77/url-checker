import * as z from "zod";
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

interface UnshortenUrlFormProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setData: (data: any) => void;
}

const formSchema = z.object({
  url: z.string().min(1, "URL is required").url(),
});

export const UnshortenUrlForm = ({
  loading,
  setLoading,
  setData,
}: UnshortenUrlFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
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
      setData(reportResponse.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
                  placeholder="https://shorturl.at"
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
          {!loading && `Unshorten`}
        </Button>
      </form>
    </Form>
  );
};
