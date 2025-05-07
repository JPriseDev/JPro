import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// Ggf. RegistrationForm importieren, falls vorhanden und benötigt
// import RegistrationForm from '@/components/auth/RegistrationForm';


/**
 * @page RegistrationPage
 * @description Seite für die Benutzerregistrierung.
 * Ermöglicht es neuen Benutzern, ein Konto zu erstellen.
 * @returns {JSX.Element} Die gerenderte Registrierungsseitenkomponente.
 */
const RegistrationPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>(''); // Hinzugefügt für Passwortbestätigung
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { signUpWithPassword } = useAuth(); // signUpWithPassword aus AuthContext verwenden
  const navigate = useNavigate();

  /**
   * @function handleSubmit
   * @description Verarbeitet die Formularübermittlung für die Registrierung.
   * @param {React.FormEvent<HTMLFormElement>} e - Das Formularereignis.
   * @returns {Promise<void>}
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Die Passwörter stimmen nicht überein.');
      return;
    }

    setLoading(true);
    try {
      const { error: signUpError, user } = await signUpWithPassword({ email, password });
      if (signUpError) {
        setError(signUpError.message);
      } else if (user) {
        // Ggf. eine Nachricht anzeigen oder direkt zum Login/Dashboard weiterleiten
        // In Supabase muss ggf. die E-Mail-Bestätigung abgewartet werden.
        navigate('/login'); // Beispiel: Weiterleitung zur Login-Seite nach erfolgreicher Registrierung
      }
    } catch (submissionError) {
      setError('Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
      console.error('Registration Submission Error:', submissionError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Registrieren</CardTitle>
          <CardDescription>
            Erstellen Sie ein neues Konto, um fortzufahren.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@beispiel.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <Input
                id="password"
                type="password"
                placeholder="Mindestens 6 Zeichen"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Passwort bestätigen</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Passwort erneut eingeben"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Registrieren...' : 'Konto erstellen'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Bereits ein Konto?{' '}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Anmelden
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegistrationPage;