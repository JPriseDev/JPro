import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * @file supabaseClient.ts
 * @description Initialisiert und exportiert den Supabase-Client.
 * Dieser Client wird für alle Interaktionen mit der Supabase-Datenbank,
 * Authentifizierung und anderen Supabase-Diensten verwendet.
 */

/**
 * Die URL des Supabase-Projekts.
 * Diese Variable wird aus den Umgebungsvariablen geladen.
 * @type {string}
 * @example VITE_SUPABASE_URL="https://your-project-id.supabase.co"
 */
const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL as string;

/**
 * Der anonyme Public Key für das Supabase-Projekt.
 * Diese Variable wird aus den Umgebungsvariablen geladen.
 * @type {string}
 * @example VITE_SUPABASE_ANON_KEY="your-anon-public-key"
 */
const supabaseAnonKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

/**
 * Überprüft, ob die Supabase URL und der Anon Key in den Umgebungsvariablen gesetzt sind.
 * Wirft einen Fehler, wenn eine der Variablen fehlt, um Fehlkonfigurationen frühzeitig zu erkennen.
 */
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase URL oder Anon Key nicht in den Umgebungsvariablen gefunden. ' +
    'Stellen Sie sicher, dass VITE_SUPABASE_URL und VITE_SUPABASE_ANON_KEY in Ihrer .env.local Datei gesetzt sind.'
  );
}

/**
 * Die initialisierte Supabase-Client-Instanz.
 * Diese Instanz wird in der gesamten Anwendung verwendet, um mit Supabase zu interagieren.
 * @type {SupabaseClient}
 */
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);