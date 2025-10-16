import { z } from "zod";

export const contactFormSchema = (dict: any) =>
  z.object({
    name: z.string().min(1, { message: dict.nameRequired }),
    email: z.string().email({ message: dict.emailInvalid }),
    message: z.string().min(10, {
      message: dict.messageMin,
    }),
    service: z.string().min(1, {
      message: dict.serviceRequired || "Please select a service",
    }), // This will be mapped from "project" field in the action
  });

export type ContactFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
        service?: string[];
      };
      message?: string;
      data?: {
        name?: string;
        email?: string;
        message?: string;
        service?: string;
      };
    }
  | undefined;
