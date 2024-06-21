"use client";
import React from "react";
import * as z from "zod";
import useStore from "../../../store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, { message: "Username can't be less than 3 characters" })
    .max(100, { message: "Username must be at most 100 characters long" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone: z
    .string()
    .max(10, {
      message: "Phone number is invalid.",
    })
    .refine((val) => /^\d{10}$/.test(val), {
      message: "Phone is required",
    }),
});

type ValidationSchema = z.infer<typeof formSchema>;

export const PersonalInfo = () => {
  const { personalInfo, setPersonalInfo, increaseStep } = useStore(
    (state) => state
  );
  const router = useRouter();
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...personalInfo },
  });
  const {
    control,
    formState: { errors },
  } = form;
  console.log("errors", errors);
  const onSubmitHandler = (values: ValidationSchema) => {
    setPersonalInfo({ ...personalInfo, ...values });
    increaseStep(1);
    router.push("/subscriptionPlan");
    localStorage.setItem("step", "2");
  };
  return (
    <Container onNext={form.handleSubmit(onSubmitHandler)}>
      <SectionHeader
        title="Personal Information"
        description="Please provide your name, email address, and phone number."
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitHandler)}
          className="space-y-6 pb-3 lg:pb-0"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter username"
                    className={cn(
                      "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue",
                      {
                        "border-c-primary-strawberry-red":
                          errors.username?.message,
                      }
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage>{errors.username?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className={cn(
                      "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue mb-0",
                      {
                        "border-c-primary-strawberry-red":
                          errors.email?.message,
                      }
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage>{errors.email?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="numeric"
                    placeholder="Enter your phone number"
                    className={cn(
                      "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue",
                      {
                        "border-c-primary-strawberry-red":
                          errors.phone?.message,
                      }
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage>{errors.phone?.message}</FormMessage>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </Container>
  );
};
