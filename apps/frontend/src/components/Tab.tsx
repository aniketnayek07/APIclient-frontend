import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Taable from "./Taable";
function Tab() {
  return (
    <div className="flex justify-center content-center mt-9">
      <Tabs defaultValue="account" className="w-fit ">
        <TabsList>
          <TabsTrigger value="Params">Params</TabsTrigger>
          <TabsTrigger value="Header">Header</TabsTrigger>
          <TabsTrigger value="Body">Body</TabsTrigger>
        </TabsList>
        <TabsContent value="Params">
          <Taable />
        </TabsContent>
        <TabsContent value="Header">
          <Taable />
        </TabsContent>
        <TabsContent value="Body">
          <Taable />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Tab;
