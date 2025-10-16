"use server";

import { contactFormSchema, ContactFormState } from "../schemas/contact";
import { sendMail } from "./mail";
import { getDictionary } from "../dictionary";
import { Locale } from "../locales";

interface ContactDictionary {
  getInTouch: string;
  nameRequired: string;
  emailInvalid: string;
  messageMin: string;
  serviceRequired: string;
  success: string;
  error: string;
}

export async function sendContact(
  formData: FormData,
  locale: Locale = "tr"
): Promise<ContactFormState> {
  // get form data
  const formBody = {
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    message: formData.get("message")?.toString() || "",
    service: formData.get("service")?.toString() || "", // Now using "service" to match the form field
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

  const mailText = `Name: ${formBody.name}
Email: ${formBody.email}
Service: ${formBody.service}
Message: ${formBody.message}`;

  const response = await sendMail({
    email: validatedFields.data.email,
    subject: dict.getInTouch,
    text: mailText,
  });

  return {
    data: response?.messageId
      ? { name: "", email: "", message: "", service: "" }
      : formBody,
    message: response?.messageId ? "success" : "error",
  };
}
