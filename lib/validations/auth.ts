import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember_me: z.boolean().default(false),
});

export const registerSchema = z.object({
  first_name: z.string().min(2),
  last_name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  confirm_password: z.string().min(8),
  terms: z.boolean().refine((val) => val === true, "You must accept terms"),
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"],
});

export const emailSchema = z.object({ email: z.string().email() });
export const otpSchema = z.object({ 
  email: z.string().email(), 
  otp: z.string().length(6, "OTP must be 6 digits") 
});
export const resetPasswordSchema = z.object({
  password: z.string().min(8),
  confirm_password: z.string().min(8),
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"],
});