"use client";

import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "@/lib/validations/auth";
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
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      terms: false,
    },
  });

  async function onSubmit(data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
    terms: boolean;
  }) {
    console.log(data);
    // Add your registration logic here
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Register</h2>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Controller
            name="first_name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldContent>
                  <FieldLabel htmlFor="first_name">First Name</FieldLabel>
                </FieldContent>
                <Input
                  {...field}
                  id="first_name"
                  placeholder="Enter your first name"
                  className="bg-black border-zinc-800"
                  aria-invalid={fieldState.invalid}
                  disabled={form.formState.isSubmitting}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="last_name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldContent>
                  <FieldLabel htmlFor="last_name">Last Name</FieldLabel>
                </FieldContent>
                <Input
                  {...field}
                  id="last_name"
                  placeholder="Enter your last name"
                  className="bg-black border-zinc-800"
                  aria-invalid={fieldState.invalid}
                  disabled={form.formState.isSubmitting}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>

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
                placeholder="Create a password"
                className="bg-black border-zinc-800"
                aria-invalid={fieldState.invalid}
                disabled={form.formState.isSubmitting}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="confirm_password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent>
                <FieldLabel htmlFor="confirm_password">
                  Confirm Password
                </FieldLabel>
              </FieldContent>
              <Input
                {...field}
                id="confirm_password"
                type="password"
                placeholder="Confirm your password"
                className="bg-black border-zinc-800"
                aria-invalid={fieldState.invalid}
                disabled={form.formState.isSubmitting}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <div className="flex items-start justify-between gap-4">
          <Controller
            name="terms"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                orientation="horizontal"
                data-invalid={fieldState.invalid}
                className="items-start"
              >
                <Checkbox
                  id="terms"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  aria-invalid={fieldState.invalid}
                  disabled={form.formState.isSubmitting}
                  className="mt-1"
                />
                <FieldContent>
                  <FieldLabel htmlFor="terms" className="text-sm leading-6">
                    I agree to the Terms of Service and Privacy Policy
                  </FieldLabel>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldContent>
              </Field>
            )}
          />
          <Link href="/login" className="text-xs text-[#84cc16] hover:underline">
            Already have an account?
          </Link>
        </div>

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full bg-[#84cc16] hover:bg-[#6fb313] text-black font-bold uppercase py-6"
        >
          {form.formState.isSubmitting ? "Creating account..." : "Create Account"}
        </Button>
      </form>
    </div>
  );
}
