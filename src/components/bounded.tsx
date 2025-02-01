import { cn } from "@/lib/utils";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={cn("px-4 py-14 md:px-6 md:py-12", className)}
      {...restProps}
    >
      <div className="mx-auto h-full flex w-full max-w-7xl flex-col items-center overflow-x-hidden">
        {children}
      </div>
    </Comp>
  );
}
