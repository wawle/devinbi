import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-12">
      <Skeleton className="h-8 w-1/3" />
      <Skeleton className="h-24 w-4/5" />

      <div className="flex w-full flex-col items-center justify-center gap-y-4 lg:gap-y-6">
        <Skeleton className="w-full h-[50px]" />
        <Skeleton className="w-full h-[50px]" />
        <Skeleton className="w-full h-[50px]" />
        <Skeleton className="w-full h-32" />
        <Skeleton className="w-1/2 h-[50px] rounded-full" />
      </div>
    </div>
  );
};

export default Loading;
