import { SigninFormSchema } from "@/lib/definitions";
import { signIn } from "next-auth/react";

export const signInAction = async (formData) => {
  // Validate form fields
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get('email'),
  })

  // If one or more of the form fields are invalid, return early to prevent unnecessary calls to auth api or database
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

};
