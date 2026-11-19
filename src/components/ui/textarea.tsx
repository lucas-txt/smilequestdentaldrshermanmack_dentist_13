import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full resize-y rounded-xl border border-forest/15 bg-white/70 px-4 py-3 text-[0.9375rem] text-forest shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] outline-none transition duration-300 placeholder:text-forest/70 focus:border-rose/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(150,74,84,0.10)] disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
