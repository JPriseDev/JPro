import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Input } from '@/components/core/Input';
import { Button } from '@/components/core/Button';
// import { useAuth } from '@/contexts/AuthContext'; // Falls benötigt für Weiterleitung o.Ä. nach Login

/**
 * @component LoginForm
 * @description Stellt ein Formular für die Benutzeranmeldung bereit.
 * Verwendet E-Mail und Passwort für die Authentifizierung über Supabase.
 * @returns {JSX.Element} Das gerenderte Login-Formular.
 */
const LoginForm: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  // const { session } = useAuth(); // Beispiel: Umleiten, wenn bereits eingeloggt

  /**
   * @function handleLogin
   * @description Verarbeitet die Benutzeranmeldung mit E-Mail und Passwort.
   * @param {React.FormEvent<HTMLFormElement>} e - Das Formular-Event.
   * @async
   */
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      console.error("Fehler beim Anmelden:", signInError.message);
    } else {
      setMessage('Anmeldung erfolgreich. Sie werden weitergeleitet...');
      // Hier könnte eine Weiterleitung implementiert werden, z.B. mit react-router-dom useNavigate()
      // Die Aktualisierung des AuthContext geschieht automatisch durch den onAuthStateChange Listener.
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label htmlFor="email-login" className="block text-sm font-medium text-gray-700">
          E-Mail-Adresse
        </label>
        <Input
          id="email-login"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="ihre.email@beispiel.de"
          className="mt-1"
        />
      </div>
      <div>
        <label htmlFor="password-login" className="block text-sm font-medium text-gray-700">
          Passwort
        </label>
        <Input
          id="password-login"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Ihr Passwort"
          className="mt-1"
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {message && <p className="text-sm text-green-600">{message}</p>}
      <div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Anmelden...' : 'Anmelden'}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;