"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  title: string;
  className?: string;
}

export function SubmitButton({ title, className }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      className={className}
      disabled={pending}
    >
      {pending ? "Sending..." : title}
    </Button>
  );
}
