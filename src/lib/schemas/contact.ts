import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "İsim alanı boş bırakılamaz" }),
  surname: z.string().min(2, { message: "Soyisim alanı boş bırakılamaz" }),
  email: z.string().email({ message: "Lütfen geçerli bir email giriniz" }),
  message: z.string().min(10, {
    message: "Mesaj uzunluğu minimum 10 karakter olamak zorunda",
  }),
});

export type ContactFormState =
  | {
      errors?: {
        name?: string[];
        surname?: string[];
        email?: string[];
        message?: string[];
      };
      message?: string;
    }
  | undefined;
