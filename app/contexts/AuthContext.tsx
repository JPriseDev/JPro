import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Session, User, AuthError, SignInWithPasswordCredentials } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient'; // Importiert den Supabase Client

/**
 * @file AuthContext.tsx
 * @description Definiert den Authentifizierungskontext und Provider für die JPro-Anwendung.
 * Dieser Kontext verwaltet den Benutzerstatus (Session, User-Objekt), Ladezustände
 * und stellt Funktionen für Login und Logout bereit.
 */

/**
 * @interface AuthContextType
 * @description Definiert die Struktur des Authentifizierungskontextes.
 * @property {Session | null} session - Die aktuelle Supabase-Session des Benutzers. Null, wenn nicht angemeldet.
 * @property {User | null} user - Das Supabase User-Objekt des angemeldeten Benutzers. Null, wenn nicht angemeldet.
 * @property {boolean} loading - Gibt an, ob der Authentifizierungsstatus gerade geladen wird (z.B. beim Initialisieren der App).
 * @property {() => Promise<void>} signOut - Funktion zum Abmelden des Benutzers.
 * @property {(credentials: SignInWithPasswordCredentials) => Promise<{ error: AuthError | null }>} signInWithPassword - Funktion zum Anmelden des Benutzers mit E-Mail und Passwort.
 * @property {(credentials: SignInWithPasswordCredentials) => Promise<{ user: User | null; session: Session | null; error: AuthError | null }>} signUpWithPassword - Funktion zur Registrierung eines neuen Benutzers mit E-Mail und Passwort.
 */
interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
  signInWithPassword: (credentials: SignInWithPasswordCredentials) => Promise<{ error: AuthError | null }>;
  signUpWithPassword: (credentials: SignInWithPasswordCredentials) => Promise<{ user: User | null; session: Session | null; error: AuthError | null }>;
}

/**
 * @constant AuthContext
 * @description Der React-Kontext für die Authentifizierung.
 * Initialisiert mit `undefined`, um sicherzustellen, dass ein Provider verwendet wird.
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * @interface AuthProviderProps
 * @description Eigenschaften für die AuthProvider Komponente.
 * @property {ReactNode} children - Die Kind-Komponenten, die Zugriff auf den AuthContext erhalten.
 */
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * @component AuthProvider
 * @description Stellt den Authentifizierungskontext für die Kind-Komponenten bereit.
 * Verwaltet den Authentifizierungsstatus und die Interaktion mit Supabase Auth.
 * @param {AuthProviderProps} props - Die Eigenschaften der Komponente.
 * @returns {JSX.Element} Der Provider, der den AuthContext Wert bereitstellt.
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    /**
     * Lädt die initiale Session des Benutzers.
     */
    const getInitialSession = async () => {
      const { data: { session: currentSession }, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Fehler beim Abrufen der initialen Session:', error);
      }
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
    };

    getInitialSession();

    /**
     * Abonniert Änderungen des Authentifizierungsstatus.
     * Aktualisiert den Session- und Benutzerstatus, wenn sich der Anmeldestatus ändert.
     */
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user ?? null);
        setLoading(false);
      }
    );

    // Cleanup-Funktion für den Listener
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  /**
   * @function signInWithPassword
   * @description Meldet einen Benutzer mit E-Mail und Passwort über Supabase an.
   * @param {SignInWithPasswordCredentials} credentials - Die Anmeldeinformationen (E-Mail und Passwort).
   * @returns {Promise<{ error: AuthError | null }>} Ein Promise, das im Erfolgsfall null oder im Fehlerfall ein AuthError-Objekt enthält.
   * @security Stellt sicher, dass die Kommunikation über HTTPS erfolgt (Supabase Standard).
   * @error Gibt ein AuthError-Objekt zurück, wenn die Anmeldung fehlschlägt (z.B. falsche Anmeldeinformationen).
   */
  const signInWithPassword = async (credentials: SignInWithPasswordCredentials) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword(credentials);
    if (error) {
      console.error('Fehler beim Anmelden:', error.message);
    }
    setLoading(false);
    return { error };
  };

  /**
   * @function signUpWithPassword
   * @description Registriert einen neuen Benutzer mit E-Mail und Passwort über Supabase.
   * @param {SignInWithPasswordCredentials} credentials - Die Registrierungsinformationen (E-Mail und Passwort).
   * @returns {Promise<{ user: User | null; session: Session | null; error: AuthError | null }>} Ein Promise, das den Benutzer, die Session und ein mögliches Fehlerobjekt enthält.
   * @security Stellt sicher, dass die Kommunikation über HTTPS erfolgt. Passwörter sollten clientseitig validiert und serverseitig sicher gehasht werden (Supabase Standard).
   * @error Gibt ein AuthError-Objekt zurück, wenn die Registrierung fehlschlägt (z.B. E-Mail bereits vergeben, unsicheres Passwort).
   */
  const signUpWithPassword = async (credentials: SignInWithPasswordCredentials) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp(credentials);
    if (error) {
      console.error('Fehler bei der Registrierung:', error.message);
    }
    setLoading(false);
    return { user: data.user, session: data.session, error };
  };


  /**
   * @function signOut
   * @description Meldet den aktuellen Benutzer von Supabase ab.
   * @returns {Promise<void>} Ein Promise, das abgeschlossen wird, wenn der Abmeldevorgang beendet ist.
   * @security Invalidiert die aktuelle Session des Benutzers.
   * @error Kann einen Fehler werfen, wenn die Abmeldung bei Supabase fehlschlägt.
   */
  const signOut = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Fehler beim Abmelden:', error.message);
    }
    // Session und User werden durch den onAuthStateChange Listener automatisch auf null gesetzt.
    setLoading(false);
  };

  const value: AuthContextType = {
    session,
    user,
    loading,
    signInWithPassword,
    signUpWithPassword,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * @function useAuth
 * @description Ein Custom Hook, um einfach auf den AuthContext zuzugreifen.
 * @returns {AuthContextType} Der Wert des AuthContext.
 * @throws Wirft einen Fehler, wenn der Hook außerhalb eines AuthProvider verwendet wird.
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth muss innerhalb eines AuthProvider verwendet werden.');
  }
  return context;
};