import { z } from "zod";

export const contactFormSchema = (dict: any) =>
  z.object({
    name: z.string().min(1, { message: dict.nameRequired }),
    surname: z.string().min(1, { message: dict.surnameRequired }),
    email: z.string().email({ message: dict.emailInvalid }),
    message: z.string().min(10, {
      message: dict.messageMin,
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
      data?: {
        name?: string;
        surname?: string;
        email?: string;
        message?: string;
      };
    }
  | undefined;
