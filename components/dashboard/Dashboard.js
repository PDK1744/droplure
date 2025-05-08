"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import SendFiles from "@/components/dashboard/SendFiles"
// import RequestFiles from "@/components/dashboard/RequestFiles"
// import FileHistory from "@/components/dashboard/FileHistory"
import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("send");

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="send" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="send">Send Files</TabsTrigger>
          <TabsTrigger value="request">Request Files</TabsTrigger>
          <TabsTrigger value="history">File History</TabsTrigger>
        </TabsList>

        <Card className="mt-6">
          <CardContent className="p-6">
            <TabsContent value="send">
              <SendFiles />
            </TabsContent>
            <TabsContent value="request">
              {/* <RequestFiles /> */}
            </TabsContent>
            <TabsContent value="history">
              {/* <FileHistory /> */}
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}
