"use client";

import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "@/lib/validations/auth";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Page() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      remember_me: false,
    },
  });

  async function onSubmit(data: {
    email: string;
    password: string;
    remember_me: boolean;
  }) {
    console.log(data);
    // Add your login logic here
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Login</h2>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Field */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent>
                <FieldLabel htmlFor="email">Email</FieldLabel>
              </FieldContent>
              <Input
                {...field}
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-black border-zinc-800"
                aria-invalid={fieldState.invalid}
                disabled={form.formState.isSubmitting}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Password Field */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent>
                <FieldLabel htmlFor="password">Password</FieldLabel>
              </FieldContent>
              <Input
                {...field}
                id="password"
                type="password"
                placeholder="Enter your password"
                className="bg-black border-zinc-800"
                aria-invalid={fieldState.invalid}
                disabled={form.formState.isSubmitting}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between gap-4">
          <Controller
            name="remember_me"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                orientation="horizontal"
                data-invalid={fieldState.invalid}
                className="flex-none"
              >
                <Checkbox
                  id="remember_me"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  aria-invalid={fieldState.invalid}
                  disabled={form.formState.isSubmitting}
                />
                <FieldContent>
                  <FieldLabel htmlFor="remember_me" className="text-sm">
                    Remember me
                  </FieldLabel>
                </FieldContent>
              </Field>
            )}
          />
          <Link href="/register" className="text-xs text-[#84cc16] hover:underline">
            Create an account
          </Link>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full bg-[#84cc16] hover:bg-[#6fb313] text-black font-bold uppercase py-6"
        >
          {form.formState.isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
