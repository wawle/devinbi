import { Button } from "../ui/button";
import { Icons } from "@/lib/icons";

interface Props {
  title: string;
  className?: string;
  disabled?: boolean;
}

export function SubmitButton({ title, className, disabled }: Props) {
  return (
    <Button
      variant="pulseGreen"
      disabled={disabled}
      type="submit"
      className={className}
    >
      {disabled && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
      {title}
    </Button>
  );
}
