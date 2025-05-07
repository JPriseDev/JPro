import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @function cn
 * @description Kombiniert mehrere KlassenNamen-Strings oder -Objekte und löst Konflikte mit Tailwind Merge.
 * Nützlich für das bedingte Anwenden von Tailwind CSS Klassen.
 * @param {...ClassValue[]} inputs - Eine Sequenz von Klassenwerten, die kombiniert werden sollen.
 * @returns {string} Ein String, der die zusammengeführten und deduplizierten Klassennamen enthält.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}