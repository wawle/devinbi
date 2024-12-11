"use client";

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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "@/lib/mail";
import { toast } from "sonner";

export default function ContactForm() {
  const contactFormSchema = z.object({
    name: z.string().min(2, { message: "İsim alanı boş bırakılamaz" }),
    surname: z.string().min(2, { message: "Soyisim alanı boş bırakılamaz" }),
    email: z.string().email({ message: "Lütfen geçerli bir email giriniz" }),
    message: z.string().min(10, {
      message: "Mesaj uzunluğu minimum 10 karakter olamak zorunda",
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

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Name: ${values.name}\nSurname: ${values.surname}\nEmail: ${values.email}\nMessage: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "İletişim Formu",
      text: mailText,
    });
    if (response?.messageId) {
      toast.success("Mesaj gönderildi");
      form.reset();
    } else {
      toast.error("Mesaj gönderilirken bir hata oluştu.");
    }
  };

  return (
    <Form {...form}>
      <form
        className="w-full max-w-3xl items-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center justify-center gap-y-4 lg:gap-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full max-w-xl lg:col-span-2">
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
              <FormItem className="w-full max-w-xl lg:col-span-2">
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
              <FormItem className="w-full max-w-xl lg:col-span-2">
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
              <FormItem className="w-full max-w-xl lg:col-span-2">
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
          <div className="col-span-3 flex w-full justify-center">
            <Button
              variant="secondary"
              className="w-full max-w-xs rounded-full py-6"
              disabled={isLoading}
            >
              {isLoading ? "Gönderiliyor....." : "Gönder"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
