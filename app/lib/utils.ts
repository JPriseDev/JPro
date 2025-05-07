import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @function cn
 * @description Eine Hilfsfunktion zum bedingten Zusammenführen von Tailwind CSS-Klassen.
 * Kombiniert `clsx` und `tailwind-merge` für eine robuste Klassenverwaltung.
 * @param {...ClassValue[]} inputs - Eine Liste von Klassenwerten (Strings, Objekte, Arrays).
 * @returns {string} Ein String mit den zusammengeführten und optimierten Klassennamen.
 * @example cn("p-4", "font-bold", { "bg-red-500": hasError })
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}