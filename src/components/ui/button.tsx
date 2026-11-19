import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-full text-sm font-semibold tracking-tight transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-rose disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-rose text-white shadow-[0_14px_35px_-18px_rgba(150,74,84,0.9)] hover:bg-rose-deep hover:shadow-[0_18px_45px_-18px_rgba(150,74,84,0.95)]",
        dark:
          "bg-forest text-cream shadow-[0_14px_35px_-20px_rgba(31,42,36,0.85)] hover:bg-pine",
        outline:
          "border border-forest/20 bg-transparent text-forest hover:border-forest/45 hover:bg-forest/[0.04]",
        light:
          "border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
        cream:
          "bg-cream text-forest shadow-[0_14px_35px_-20px_rgba(0,0,0,0.4)] hover:bg-white",
        ghost: "text-forest hover:bg-forest/[0.06]",
      },
      size: {
        sm: "h-10 px-4 text-[0.8125rem]",
        md: "h-12 px-6",
        lg: "h-14 px-7 text-[0.9375rem]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
