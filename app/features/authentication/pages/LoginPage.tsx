import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

/**
 * @page LoginPage
 * @description Seite für die Benutzeranmeldung.
 * Ermöglicht es Benutzern, sich mit ihrer E-Mail-Adresse und ihrem Passwort anzumelden.
 * @returns {JSX.Element} Die gerenderte Login-Seitenkomponente.
 */
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { signInWithPassword } = useAuth();
  const navigate = useNavigate();

  /**
   * @function handleSubmit
   * @description Verarbeitet die Formularübermittlung für den Login.
   * @param {React.FormEvent<HTMLFormElement>} e - Das Formularereignis.
   * @returns {Promise<void>}
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { error: signInError } = await signInWithPassword({ email, password });
      if (signInError) {
        setError(signInError.message);
      } else {
        navigate('/'); // Weiterleitung zum Dashboard nach erfolgreichem Login
      }
    } catch (submissionError) {
      setError('Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
      console.error('Login Submission Error:', submissionError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>E-Mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Passwort</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading} style={{ padding: '10px 15px', cursor: 'pointer', width: '100%' }}>
          {loading ? 'Anmelden...' : 'Anmelden'}
        </button>
      </form>
      {/* Hier könnte später ein Link zur Registrierungsseite oder "Passwort vergessen" hinzugefügt werden */}
    </div>
  );
};

export default LoginPage;