"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { practice } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  firstName: z.string().trim().min(2, "Please enter your first name."),
  lastName: z.string().trim().min(2, "Please enter your last name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number our team can reach you on.")
    .max(24, "Please enter a valid phone number."),
  appointmentType: z.enum(practice.appointmentTypes, {
    message: "Please choose the reason for your visit.",
  }),
  message: z
    .string()
    .trim()
    .max(1200, "Please keep your message under 1,200 characters.")
    .optional(),
});

type FormValues = z.infer<typeof schema>;

const steps = [
  { id: "details", label: "Your details" },
  { id: "visit", label: "Your visit" },
  { id: "review", label: "Review" },
];

function fieldId(name: keyof FormValues) {
  return `appointment-${name}`;
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-rose">
      {message}
    </p>
  );
}

export function AppointmentForm({
  variant = "full",
  className,
}: {
  variant?: "full" | "compact";
  className?: string;
}) {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [submittedName, setSubmittedName] = React.useState("");
  const [submittedType, setSubmittedType] = React.useState("");
  const reduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    control,
    trigger,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      appointmentType: practice.appointmentTypes[0],
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    setSubmittedName(`${values.firstName} ${values.lastName}`.trim());
    setSubmittedType(values.appointmentType);
    setSubmitted(true);
  };

  const submitForm = handleSubmit(async (values) => {
    // The review step must be shown before the full form can be submitted.
    if (variant === "full" && step !== 2) return;
    await onSubmit(values);
  });

  const goNext = async () => {
    if (step === 0) {
      const valid = await trigger(["firstName", "lastName", "email", "phone"]);
      if (valid) setStep(1);
      return;
    }
    if (step === 1) {
      const valid = await trigger(["appointmentType", "message"]);
      if (valid) setStep(2);
    }
  };

  const appointmentType = watch("appointmentType");
  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const email = watch("email");
  const phone = watch("phone");

  const restart = () => {
    reset();
    setStep(0);
    setSubmitted(false);
    setSubmittedName("");
    setSubmittedType("");
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border border-forest/10 bg-white/70 p-7 shadow-soft sm:p-10",
          className,
        )}
        aria-live="polite"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-sage/25 blur-3xl"
        />
        <div className="relative">
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-sage/25 text-forest">
            <CheckCircle2 className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-6 font-display text-3xl tracking-tight text-forest">
            Appointment request received.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-forest/70">
            Thank you{submittedName ? `, ${submittedName}` : ""}. A member of our
            team will reach out to confirm your appointment time
            {submittedType ? ` for your ${submittedType.toLowerCase()}` : ""}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="dark">
              <a href={practice.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Call {practice.phone}
              </a>
            </Button>
            <Button type="button" variant="outline" onClick={restart}>
              Submit another request
            </Button>
          </div>
          <p className="mt-5 text-xs text-forest/70">
            Prefer to talk now? Call{" "}
            <a className="font-semibold text-rose" href={practice.phoneHref}>
              {practice.phone}
            </a>
            . We&apos;re here Monday to Friday, 8:00am-4:00pm.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={submitForm}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-forest/10 bg-white/70 p-6 shadow-soft sm:p-8",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-rose/[0.08] blur-3xl"
      />

      <div className="relative">
        {variant === "full" ? (
          <>
            <div className="mb-7 flex items-center gap-2">
              {steps.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex size-7 items-center justify-center rounded-full text-[0.65rem] font-bold transition",
                        index < step
                          ? "bg-forest text-cream"
                          : index === step
                            ? "bg-rose text-white"
                            : "bg-forest/[0.06] text-forest/70",
                      )}
                      aria-hidden="true"
                    >
                      {index < step ? <Check className="size-3.5" /> : index + 1}
                    </span>
                    <span
                      className={cn(
                        "text-[0.65rem] font-bold uppercase tracking-[0.12em]",
                        index === step ? "text-forest" : "text-forest/70",
                      )}
                    >
                      {item.label}
                    </span>
                  </div>
                  {index < steps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="h-px flex-1 bg-forest/10"
                    />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            <p className="sr-only" aria-live="polite">
              Step {step + 1} of {steps.length}: {steps[step]?.label}
            </p>
          </>
        ) : null}

        <AnimatePresence mode="wait" initial={false}>
          {variant === "compact" || step === 0 ? (
            <motion.div
              key="step-details"
              initial={reduceMotion ? false : { x: 12 }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor={fieldId("firstName")}>First name</Label>
                  <Input
                    id={fieldId("firstName")}
                    autoComplete="given-name"
                    placeholder="First name"
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={
                      errors.firstName ? "error-firstName" : undefined
                    }
                    {...register("firstName")}
                  />
                  <ErrorText id="error-firstName" message={errors.firstName?.message} />
                </div>
                <div>
                  <Label htmlFor={fieldId("lastName")}>Last name</Label>
                  <Input
                    id={fieldId("lastName")}
                    autoComplete="family-name"
                    placeholder="Last name"
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={errors.lastName ? "error-lastName" : undefined}
                    {...register("lastName")}
                  />
                  <ErrorText id="error-lastName" message={errors.lastName?.message} />
                </div>
                <div>
                  <Label htmlFor={fieldId("email")}>Email</Label>
                  <Input
                    id={fieldId("email")}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "error-email" : undefined}
                    {...register("email")}
                  />
                  <ErrorText id="error-email" message={errors.email?.message} />
                </div>
                <div>
                  <Label htmlFor={fieldId("phone")}>Phone</Label>
                  <Input
                    id={fieldId("phone")}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(701) 555-0123"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "error-phone" : undefined}
                    {...register("phone")}
                  />
                  <ErrorText id="error-phone" message={errors.phone?.message} />
                </div>
              </div>
            </motion.div>
          ) : null}

          {variant === "compact" || step === 1 ? (
            <motion.div
              key="step-visit"
              initial={reduceMotion ? false : { x: 12 }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={variant === "compact" ? "mt-5" : undefined}
            >
              <fieldset>
                <legend className="mb-3 text-[0.78rem] font-semibold tracking-wide text-forest/80">
                  I am making an appointment for:
                </legend>
                <Controller
                  control={control}
                  name="appointmentType"
                  render={({ field }) => (
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="grid gap-2 sm:grid-cols-2"
                      aria-describedby={
                        errors.appointmentType ? "error-appointmentType" : undefined
                      }
                    >
                      {practice.appointmentTypes.map((type, index) => {
                        const id = `appointment-type-${index}`;
                        return (
                          <div key={type} className="relative">
                            <RadioGroupItem
                              value={type}
                              id={id}
                              className="peer absolute right-4 top-4 z-10 size-4"
                            />
                            <Label
                              htmlFor={id}
                              className="mb-0 flex min-h-14 cursor-pointer items-center rounded-xl border border-forest/10 bg-white/55 py-3 pl-4 pr-12 text-[0.78rem] font-medium leading-snug text-forest/70 transition hover:border-forest/20 hover:bg-white peer-data-[state=checked]:border-rose/45 peer-data-[state=checked]:bg-rose/[0.05] peer-data-[state=checked]:text-forest peer-focus-visible:ring-2 peer-focus-visible:ring-rose/40"
                            >
                              {type}
                            </Label>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  )}
                />
                <ErrorText
                  id="error-appointmentType"
                  message={errors.appointmentType?.message}
                />
              </fieldset>

              <div className="mt-5">
                <Label htmlFor={fieldId("message")}>
                  How can we help you?{" "}
                  <span className="font-normal text-forest/70">(optional)</span>
                </Label>
                <Textarea
                  id={fieldId("message")}
                  placeholder="Anything our team should know before we call?"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "error-message" : undefined}
                  {...register("message")}
                />
                <ErrorText id="error-message" message={errors.message?.message} />
              </div>
            </motion.div>
          ) : null}

          {variant === "full" && step === 2 ? (
            <motion.div
              key="step-review"
              initial={reduceMotion ? false : { x: 12 }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-2xl border border-forest/10 bg-cream/60 p-5">
                <p className="eyebrow text-rose">Almost there</p>
                <h2 className="mt-3 font-display text-2xl tracking-tight text-forest">
                  Review your request
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-forest/70">
                  Please review your request below. Our team will reach out to
                  confirm your appointment time.
                </p>
                <dl className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                  <div className="rounded-xl border border-forest/10 bg-white/60 px-3 py-2">
                    <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-forest/70">
                      Patient
                    </dt>
                    <dd className="mt-0.5 font-semibold text-forest">
                      {[firstName, lastName].filter(Boolean).join(" ") || "—"}
                    </dd>
                  </div>
                  <div className="rounded-xl border border-forest/10 bg-white/60 px-3 py-2">
                    <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-forest/70">
                      Appointment
                    </dt>
                    <dd className="mt-0.5 font-semibold text-forest">
                      {appointmentType}
                    </dd>
                  </div>
                  <div className="rounded-xl border border-forest/10 bg-white/60 px-3 py-2">
                    <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-forest/70">
                      Phone
                    </dt>
                    <dd className="mt-0.5 font-semibold text-forest">
                      {phone || "—"}
                    </dd>
                  </div>
                  <div className="rounded-xl border border-forest/10 bg-white/60 px-3 py-2">
                    <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-forest/70">
                      Email
                    </dt>
                    <dd className="mt-0.5 truncate font-semibold text-forest">
                      {email || "—"}
                    </dd>
                  </div>
                </dl>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-forest/70">
                Submitting this form is a request, not a confirmed appointment.
                Our team will reach out to confirm the date and time with you.
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {variant === "full" && step > 0 ? (
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep((value) => value - 1)}
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back
            </Button>
          ) : null}

          {variant === "full" && step < 2 ? (
            <Button key="continue" type="button" onClick={goNext}>
              Continue
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          ) : (
            <Button key="submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="size-4" aria-hidden="true" />
              )}
              Submit form
            </Button>
          )}
        </div>

        <p className="mt-4 text-[0.68rem] leading-relaxed text-forest/70">
          By submitting this form, you agree that our team may contact you about
          this appointment request.
        </p>
      </div>
    </form>
  );
}
