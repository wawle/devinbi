"use client";

import { useActionState, useEffect } from "react";
import { ContactFormState } from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";
import { sendContact } from "@/lib/actions/contact";
import FormInput from "@/components/form/form-input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/form/submit-button";
import { useParams } from "next/navigation";
import { Locale } from "@/lib/locales";
import { toast } from "sonner";

interface Props {
  dict: Record<string, string> | null;
  className?: string;
}

export default function ContactForm({ className, dict }: Props) {
  const { locale } = useParams();
  const [state, action] = useActionState<ContactFormState, FormData>(
    (state: ContactFormState, formData: FormData) => {
      return sendContact(formData, locale as Locale);
    },
    undefined
  );

  useEffect(() => {
    if (state?.message == "success") {
      toast.success(dict?.success || "Message sent successfully");
    }
    if (state?.message == "error") {
      toast.error(
        dict?.error || "An error occurred while sending the message"
      );
    }
  }, [state, dict]);

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
            defaultValue={state?.data?.name || ""}
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
            defaultValue={state?.data?.surname || ""}
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
            defaultValue={state?.data?.email || ""}
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
                defaultValue={state?.data?.message || ""}
                className="min-h-32 w-full font-semibold border-slate-100/20 focus:border-input"
              />
            )}
          />

          <div className="col-span-3 flex w-full justify-center">
            <SubmitButton
              className="w-full max-w-xs rounded-full py-6 hover:animate-pulse"
              title={dict?.send || "Send"}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
