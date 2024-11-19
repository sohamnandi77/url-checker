import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function App() {
  return (
    <div className="min-w-[400px] min-h-[400px] flex items-center justify-center px-5">
      <Input type="text" placeholder="Type something..." />
      <Button className="ml-2">Submit</Button>
    </div>
  );
}
