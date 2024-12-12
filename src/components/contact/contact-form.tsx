"use client";

import { SubmitButton } from "../form/submit-button";
import FormInput from "../form/form-input";
import { useActionState } from "react";
import { ContactFormState } from "@/lib/schemas/contact";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { sendContact } from "@/lib/actions/contact";

export default function ContactForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [state, action] = useActionState<ContactFormState>(
    sendContact as any,
    undefined,
  );

  return (
    <div className="h-fit w-full" {...props}>
      <form
        action={action}
        className={cn("w-full max-w-3xl items-center", className)}
      >
        <div className="flex w-full flex-col items-center justify-center gap-y-4 lg:gap-y-6">
          <FormInput
            label="name"
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            autoCapitalize="none"
            autoComplete="name"
            error={state?.errors?.name?.[0]}
            className="w-full py-6 placeholder:font-semibold"
          />
          <FormInput
            label="surname"
            id="surname"
            name="surname"
            placeholder="Surname"
            type="text"
            autoCapitalize="none"
            autoComplete="surname"
            error={state?.errors?.surname?.[0]}
            className="w-full py-6 placeholder:font-semibold"
          />
          <FormInput
            label="email"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            error={state?.errors?.email?.[0]}
            className="w-full py-6 placeholder:font-semibold"
          />
          <FormInput
            label="message"
            id="message"
            name="message"
            type="text"
            autoCapitalize="none"
            autoComplete="off"
            error={state?.errors?.message?.[0]}
            RenderInput={() => (
              <Textarea
                name="message"
                placeholder="Message"
                className="min-h-32 w-full font-semibold"
              />
            )}
          />

          <div className="col-span-3 flex w-full justify-center">
            <SubmitButton
              className="w-full max-w-xs rounded-full bg-black py-6 hover:animate-pulse"
              title="Gönder"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
