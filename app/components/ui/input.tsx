import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * @interface InputProps
 * @description Definiert die Eigenschaften für die Input-Komponente.
 * Erbt von `React.InputHTMLAttributes<HTMLInputElement>`.
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * @component Input
 * @description Eine anpassbare Input-Komponente, die auf `shadcn/ui` basiert.
 * @param {InputProps} props - Die Eigenschaften der Komponente, einschließlich `className` und `type`.
 * @param {React.Ref<HTMLInputElement>} ref - Eine Referenz auf das Input-HTML-Element.
 * @returns {JSX.Element} Die gerenderte Input-Komponente.
 * @example <Input type="email" placeholder="E-Mail" />
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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