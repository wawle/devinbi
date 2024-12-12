import React, { forwardRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import FormError from "./form-error";
import { cn } from "@/lib/utils";

// Extract the props of Input and omit the 'ref' from the props because it's forwarded
type InputProps = React.ComponentPropsWithoutRef<typeof Input>;

// Define props for FormInput
interface Props extends InputProps {
  label: string;
  error?: string;
  RenderInput?: (...props: any) => JSX.Element;
}

const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ label, error, RenderInput, ...inputProps }: Props, ref) => {
    const CustomInput = () => {
      if (RenderInput) {
        return (
          <RenderInput
            className={cn(error && "border-red-500")}
            ref={ref} // forward the ref to the Input component
            {...inputProps}
          />
        );
      }
      return (
        <Input
          className={cn(error && "border-red-500")}
          ref={ref} // forward the ref to the Input component
          {...inputProps} // pass all inputProps (like placeholder, type, etc.) to the Input component
        />
      );
    };

    return (
      <div className="grid w-full gap-1">
        <Label className="sr-only" htmlFor={inputProps.name}>
          {label}
        </Label>
        <CustomInput />
        {error && <FormError message={error} />}
      </div>
    );
  },
);

FormInput.displayName = "FormInput"; // Set display name for debugging purposes

export default FormInput;
