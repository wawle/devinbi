import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Icons } from "@/lib/icons";

interface Props {
  title: string;
  className?: string;
}

export function SubmitButton({ title, className }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className={className}>
      {pending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
      {title}
    </Button>
  );
}
