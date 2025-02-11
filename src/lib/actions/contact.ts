"use server";

import { toast } from "sonner";
import { contactFormSchema, ContactFormState } from "../schemas/contact";
import { sendMail } from "./mail";
import { getDictionary } from "../dictionary";
import { Locale } from "../locales";

interface ContactDictionary {
  getInTouch: string;
  nameRequired: string;
  surnameRequired: string;
  emailInvalid: string;
  messageMin: string;
  success: string;
  error: string;
}

export async function sendContact(
  previousState: ContactFormState,
  formData: FormData,
  locale: Locale = "tr"
): Promise<ContactFormState> {
  // get form data
  const formBody = {
    name: formData.get("name")?.toString() || "",
    surname: formData.get("surname")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    message: formData.get("message")?.toString() || "",
  };

  const dict = (await getDictionary(
    "contact",
    locale
  )) as unknown as ContactDictionary;
  const contactForm = contactFormSchema(dict);

  // Validate form fields
  const validatedFields = contactForm.safeParse(formBody);

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      data: formBody,
    };
  }

  const mailText = `Name: ${formBody.name}\nSurname: ${formBody.surname}\nEmail: ${formBody.email}\nMessage: ${formBody.message}`;

  const response = await sendMail({
    email: validatedFields.data.email,
    subject: dict.getInTouch,
    text: mailText,
  });

  if (response?.messageId) {
    toast.success(dict.success || "Message sent successfully");
  } else {
    toast.error(
      dict.error || "An error occurred while sending the message"
    );
  }

  return {
    data: formBody,
    message: response?.messageId ? "success" : "error",
  };
}
