"use client";

import { useActionState } from "react";
import { ContactFormState } from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";
import { sendContact } from "@/lib/actions/contact";
import FormInput from "@/components/form/form-input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/form/submit-button";

interface Props {
  dict: Record<string, string> | null;
  className?: string;
}

export default function ContactForm({ className, dict }: Props) {
  const [state, action] = useActionState<ContactFormState>(
    sendContact as any,
    undefined
  );

  return (
    <div className="flex h-fit w-full justify-center z-10 bg-black/70">
      <form
        action={action}
        className={cn("w-full max-w-3xl items-center", className)}
      >
        <div className="flex w-full flex-col items-center justify-center gap-y-4 lg:gap-y-6">
          <FormInput
            label="name"
            id="name"
            name="name"
            placeholder={dict?.name || "Name"}
            type="text"
            autoCapitalize="none"
            autoComplete="name"
            error={state?.errors?.name?.[0]}
            className="w-full py-6 placeholder:font-semibold border-slate-100/20 focus:border-input"
          />
          <FormInput
            label="surname"
            id="surname"
            name="surname"
            placeholder={dict?.surname || "Surname"}
            type="text"
            autoCapitalize="none"
            autoComplete="surname"
            error={state?.errors?.surname?.[0]}
            className="w-full py-6 placeholder:font-semibold border-slate-100/20 focus:border-input"
          />
          <FormInput
            label="email"
            id="email"
            name="email"
            placeholder={dict?.email || "Email"}
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            error={state?.errors?.email?.[0]}
            className="w-full py-6 placeholder:font-semibold border-slate-100/20 focus:border-input"
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
                placeholder={dict?.message || "Message"}
                className="min-h-32 w-full font-semibold border-slate-100/20 focus:border-input"
              />
            )}
          />

          <div className="col-span-3 flex w-full justify-center">
            <SubmitButton
              className="w-full max-w-xs rounded-full py-6 hover:animate-pulse"
              title="Gönder"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
