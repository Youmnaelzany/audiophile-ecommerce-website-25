import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-[17.5rem] md:w-[19.3125rem] rounded-lg border border-gray active:border-orange bg-white px-3 py-1 text-sm placeholder:text-black/40 font-bold leading-normal tracking-[-0.01563rem] text-black shadow-md transition-colors hover:border-orange outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
