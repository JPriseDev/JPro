import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import LoginPage from '@/features/authentication/pages/LoginPage';
// import { Button } from "@/components/core/Button"; // Placeholder for shadcn/ui Button

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
      <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
          // Temporarily using HTML button, will be replaced with shadcn/ui Button
          <button onClick={signOut} style={{ padding: '8px 12px', cursor: 'pointer' }}>
            Abmelden
          </button>
          // <Button onClick={signOut} variant="outline" size="sm">
          //   Abmelden
          // </Button>
        )}
      </nav>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
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