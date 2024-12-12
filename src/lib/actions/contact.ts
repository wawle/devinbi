import { toast } from "sonner";
import { contactFormSchema, ContactFormState } from "../schemas/contact";
import { sendMail } from "./mail";

export async function sendContact(
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // get form data
  const formBody = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  console.log({ formBody });

  // Validate form fields
  const validatedFields = contactFormSchema.safeParse(formBody);

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const mailText = `Name: ${formBody.name}\nSurname: ${formBody.surname}\nEmail: ${formBody.email}\nMessage: ${formBody.message}`;

  const response = await sendMail({
    email: validatedFields.data.email,
    subject: "İletişim Formu",
    text: mailText,
  });

  if (response?.messageId) {
    toast.success("Mesaj gönderildi");
  } else {
    toast.error("Mesaj gönderilirken bir hata oluştu.");
  }
}
