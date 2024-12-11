"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function ContactForm() {
  const contactFormSchema = z.object({
    name: z.string().min(2, { message: "nameRequired" }),
    surname: z.string().min(2, { message: "surnameRequired" }),
    email: z.string().email({ message: "emailInvalid" }),
    message: z.string().min(10, {
      message: "messageMinLength",
    }),
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
  });

  // const isLoading = form.formState.isSubmitting;
  // const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
  //   const mailText = `Name: ${values.name}\nSurname: ${values.surname}\nEmail: ${values.email}\nMessage: ${values.message}`;
  //   const response = await sendMail({
  //     email: values.email,
  //     subject: "İletişim Formu",
  //     text: mailText,
  //   });
  //   if (response?.messageId) {
  //     toast.success(t("messageSuccess"));
  //   } else {
  //     toast.error(t("messageFail"));
  //   }
  // };

  return (
    <Form {...form}>
      <form
        className="w-full max-w-3xl items-center"
        // onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center justify-center gap-y-4 lg:gap-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full max-w-lg lg:col-span-2">
                <FormControl>
                  <Input
                    className="py-6 placeholder:font-semibold"
                    placeholder="Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem className="w-full max-w-lg lg:col-span-2">
                <FormControl>
                  <Input
                    className="py-6 placeholder:font-semibold"
                    placeholder="Surname"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full max-w-lg lg:col-span-2">
                <FormControl>
                  <Input
                    className="py-6 placeholder:font-semibold"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full max-w-lg lg:col-span-2">
                <FormControl>
                  <Textarea
                    className="min-h-32 font-semibold"
                    {...field}
                    placeholder="Message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-3 flex justify-center">
            {/* <Button variant="outline" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending....." : "Send"}
            </Button> */}
            <Button
              className="text-cente8 px-10 py-5 hover:text-white"
              variant="pulseGreen"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
