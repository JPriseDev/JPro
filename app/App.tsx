import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import LoginPage from '@/features/authentication/pages/LoginPage';
import RegistrationPage from '@/features/authentication/pages/RegistrationPage'; // Diese Zeile verursacht den Fehler
import { Button } from "@/components/ui/button"; // shadcn/ui Button importieren

/**
 * @interface ProtectedRouteProps
 * @description Eigenschaften für die ProtectedRoute Komponente.
 * @property {JSX.Element} children - Die zu rendernde Komponente, wenn der Benutzer authentifiziert ist.
 */
interface ProtectedRouteProps {
  children: JSX.Element;
}

/**
 * @component ProtectedRoute
 * @description Eine Wrapper-Komponente, die den Zugriff auf eine Route nur für authentifizierte Benutzer erlaubt.
 * Leitet nicht authentifizierte Benutzer zur Login-Seite weiter.
 * @param {ProtectedRouteProps} props - Die Eigenschaften der Komponente.
 * @returns {JSX.Element} Entweder die Kind-Komponente oder eine Weiterleitung zur Login-Seite.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { session, loading } = useAuth();

  if (loading) {
    return <div>Laden...</div>; // Zeigt eine Ladeanzeige, während die Session geprüft wird
  }

  if (!session) {
    return <Navigate to="/login" replace />; // Leitet zur Login-Seite weiter, wenn keine Session vorhanden ist
  }

  return children; // Rendert die Kind-Komponente, wenn eine Session vorhanden ist
};

/**
 * @function AppContent
 * @description Die Hauptinhaltskomponente der Anwendung, die das Routing und das grundlegende Layout verwaltet.
 * Diese Komponente wird innerhalb des AuthProviders gerendert, um Zugriff auf den Auth-Kontext zu haben.
 * @returns {JSX.Element} Die gerenderte App-Inhaltskomponente.
 */
function AppContent(): JSX.Element {
  const { session, signOut, loading } = useAuth();

  return (
    <div>
      <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', gap: '15px' }}>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/projects">Projekte</Link>
          </li>
          {!session && !loading && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
        {session && !loading && (
          <Button onClick={signOut} variant="outline" size="sm">
            Abmelden
          </Button>
        )}
      </nav>

      <div className="p-4"> {/* Container für den Seiteninhalt hinzugefügt */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} /> {/* Route einkommentiert und ggf. Import hinzufügen */}
          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <ProjectsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

// Platzhalter-Komponenten für das Routing
/**
 * @function DashboardPage
 * @description Platzhalterkomponente für die Dashboard-Seite.
 * @returns {JSX.Element}
 */
const DashboardPage = (): JSX.Element => <h2>Dashboard</h2>;

/**
 * @function ProjectsPage
 * @description Platzhalterkomponente für die Projektübersichtsseite.
 * @returns {JSX.Element}
 */
const ProjectsPage = (): JSX.Element => <h2>Projekte</h2>;

/**
 * @function App
 * @description Die Hauptkomponente der Anwendung, die den AuthProvider und Router einrichtet.
 * @returns {JSX.Element} Die gerenderte App-Komponente.
 */
function App(): JSX.Element {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;