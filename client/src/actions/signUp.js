import { SignupFormSchema } from "@/lib/definitions";

export const signUpAction = async (formData) => {
    // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // If one or more of the form fields are invalid, return early to prevent unnecessary calls to auth api or database
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
}
