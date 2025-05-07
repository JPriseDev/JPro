import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * @constant labelVariants
 * @description Definiert die Stilvarianten für die Label-Komponente.
 * (Momentan nur Basis-Styling, kann bei Bedarf erweitert werden).
 */
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

/**
 * @component Label
 * @description Eine anpassbare Label-Komponente, die auf `shadcn/ui` und `@radix-ui/react-label` basiert.
 * @param {React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>} props - Die Eigenschaften der Komponente.
 * @param {React.Ref<React.ElementRef<typeof LabelPrimitive.Root>>} ref - Eine Referenz auf das Label-Element.
 * @returns {JSX.Element} Die gerenderte Label-Komponente.
 * @example <Label htmlFor="email">E-Mail</Label>
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }