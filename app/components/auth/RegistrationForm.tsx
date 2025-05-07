import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Input } from '@/components/core/Input';
import { Button } from '@/components/core/Button';

/**
 * @component RegistrationForm
 * @description Stellt ein Formular für die Benutzerregistrierung bereit.
 * Verwendet E-Mail und Passwort für die Registrierung über Supabase.
 * @returns {JSX.Element} Das gerenderte Registrierungsformular.
 */
const RegistrationForm: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  /**
   * @function handleRegister
   * @description Verarbeitet die Benutzerregistrierung mit E-Mail und Passwort.
   * @param {React.FormEvent<HTMLFormElement>} e - Das Formular-Event.
   * @async
   */
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (password !== confirmPassword) {
      setError('Die Passwörter stimmen nicht überein.');
      return;
    }
    setLoading(true);

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      // Optionen können hier hinzugefügt werden, z.B. für E-Mail-Bestätigung:
      // options: {
      //   emailRedirectTo: window.location.origin, // URL, zu der nach Bestätigung weitergeleitet wird
      // },
    });

    if (signUpError) {
      setError(signUpError.message);
      console.error("Fehler bei der Registrierung:", signUpError.message);
    } else if (data.user && data.user.identities && data.user.identities.length === 0) {
      // Dies kann passieren, wenn "Confirm email" in Supabase aktiviert ist, aber der Benutzer bereits existiert,
      // aber noch nicht bestätigt hat. Supabase gibt dann keinen Fehler, aber auch keine Session zurück.
      setMessage('Benutzer existiert bereits und wartet auf Bestätigung oder ein anderer Fehler ist aufgetreten. Bitte prüfen Sie Ihr Postfach oder versuchen Sie es später erneut.');
    } else if (data.session) {
      setMessage('Registrierung erfolgreich! Sie sind nun angemeldet.');
      // Die Aktualisierung des AuthContext geschieht automatisch.
    } else if (data.user) {
        setMessage('Registrierung erfolgreich! Bitte bestätigen Sie Ihre E-Mail-Adresse. Überprüfen Sie Ihr Postfach.');
    } else {
        setError('Ein unbekannter Fehler ist bei der Registrierung aufgetreten.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <div>
        <label htmlFor="email-register" className="block text-sm font-medium text-gray-700">
          E-Mail-Adresse
        </label>
        <Input
          id="email-register"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="ihre.email@beispiel.de"
          className="mt-1"
        />
      </div>
      <div>
        <label htmlFor="password-register" className="block text-sm font-medium text-gray-700">
          Passwort
        </label>
        <Input
          id="password-register"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Mindestens 6 Zeichen"
          className="mt-1"
        />
      </div>
      <div>
        <label htmlFor="confirm-password-register" className="block text-sm font-medium text-gray-700">
          Passwort bestätigen
        </label>
        <Input
          id="confirm-password-register"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="Passwort erneut eingeben"
          className="mt-1"
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {message && <p className="text-sm text-green-600">{message}</p>}
      <div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Registrieren...' : 'Registrieren'}
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;