import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * @component Card
 * @description Eine Container-Komponente zur Strukturierung von Inhalten, ähnlich einer Karte.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Die Eigenschaften der Komponente.
 * @param {React.Ref<HTMLDivElement>} ref - Eine Referenz auf das Div-Element.
 * @returns {JSX.Element} Die gerenderte Card-Komponente.
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

/**
 * @component CardHeader
 * @description Der Header-Bereich einer Card-Komponente.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Die Eigenschaften der Komponente.
 * @param {React.Ref<HTMLDivElement>} ref - Eine Referenz auf das Div-Element.
 * @returns {JSX.Element} Der gerenderte CardHeader.
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

/**
 * @component CardTitle
 * @description Der Titel-Bereich innerhalb eines CardHeaders.
 * @param {React.HTMLAttributes<HTMLHeadingElement>} props - Die Eigenschaften der Komponente.
 * @param {React.Ref<HTMLHeadingElement>} ref - Eine Referenz auf das H3-Element.
 * @returns {JSX.Element} Der gerenderte CardTitle.
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

/**
 * @component CardDescription
 * @description Der Beschreibungsbereich innerhalb eines CardHeaders.
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - Die Eigenschaften der Komponente.
 * @param {React.Ref<HTMLParagraphElement>} ref - Eine Referenz auf das P-Element.
 * @returns {JSX.Element} Die gerenderte CardDescription.
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

/**
 * @component CardContent
 * @description Der Hauptinhaltsbereich einer Card-Komponente.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Die Eigenschaften der Komponente.
 * @param {React.Ref<HTMLDivElement>} ref - Eine Referenz auf das Div-Element.
 * @returns {JSX.Element} Der gerenderte CardContent.
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

/**
 * @component CardFooter
 * @description Der Footer-Bereich einer Card-Komponente.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Die Eigenschaften der Komponente.
 * @param {React.Ref<HTMLDivElement>} ref - Eine Referenz auf das Div-Element.
 * @returns {JSX.Element} Der gerenderte CardFooter.
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }