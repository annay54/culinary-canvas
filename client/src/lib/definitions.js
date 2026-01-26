import { z } from 'zod'

export const SigninFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z.string().regex(/^[A-Za-z0-9@#*$%&]+$/i, { message: 'Must contain only alphanumeric characters and the special characters: @, #, *, $, %, &' }).trim(),
})

export const SignupFormSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters long.' }).regex(/^[A-Za-z]+$/i, { message: 'Must contain only alphabetical characters.' }).trim(),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters long.' }).regex(/^[A-Za-z]+$/i, { message: 'Must contain only alphabetical characters.' }).trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z.string().min(8, { message: 'At least 8 characters long' }).regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' }).regex(/^[A-Za-z0-9@#*$%&]+$/i, { message: 'Must contain only alphanumeric characters and the special characters: @, #, *, $, %, &' })
    .trim(),
})
