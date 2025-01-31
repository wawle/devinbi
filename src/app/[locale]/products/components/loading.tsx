import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="overflow-hidden px-4 md:px-6">
      <div className="h-screen w-full">
        <div className="flex gap-8 h-screen items-center will-change-transform">
          {Array(5)
            .fill(1)
            .map((item, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[80vw] max-w-lg h-[70vh] max-h-[750px] bg-transparent border-white/20"
              >
                <CardContent className="flex flex-col h-full">
                  <Skeleton className="w-full h-2/3" />
                  <div className="p-6 text-white">
                    <Skeleton className="w-full h-8" />
                    <Skeleton className="w-full h-64" />
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
