# Projektregeln für die Trae-KI
*Basierend auf Projektkonzept*

---

## Allgemein

- Alle Projektartefakte (Code, Dokumentation) müssen in **deutscher Sprache** kommentiert und dokumentiert werden.
- Die **Kommunikation und Dokumentation** im Projekt folgt einer **sachlichen, professionellen Ausdrucksweise**.
- **Docstrings**, **Kommentare** und **Markdown-Dokumentationen** sind für alle relevanten Code- und Projektdateien **obligatorisch**.
- **Aktive Formulierungen** in der Projektdokumentation sind verpflichtend.
- Bei der Codegenerierung ist **immer vollständiger Code** bereitzustellen – **keine Beispiele oder Auszüge**.

---

## Technologie-Stack

- **Frontend**: TypeScript, React, Tailwind CSS, shadcn/ui
- **Backend & Datenbank**: Supabase (PostgreSQL, Auth, Edge Functions)
- **Build-Tool**: Vite
- **Testing**: Jest, React Testing Library, Cypress
- **Versionierung**: Git mit GitHub
- **CI/CD**: GitHub Actions
- **Code-Dokumentation**: JSDoc

---

## Code-Stil

- Namenskonventionen:
  - Variablen/Funktionen: `camelCase`
  - Klassen/Komponenten: `PascalCase`
  - Konstanten: `UPPER_SNAKE_CASE`
- Einrückung: **2 Leerzeichen**
- **JSX/TSX-Komponenten** gehören in das `app/`-Verzeichnis.
- **Markdown-Dokumente** (für Nutzer:innen, Entwickler:innen, Auditor:innen) gehören in das `docs/`-Verzeichnis.

---

## Architektur

- Das Projekt ist **modular** aufgebaut mit Fokus auf **wiederverwendbare Komponenten**.
- **Logik** (Hooks, Services) ist **klar von UI-Komponenten getrennt**.
- **Supabase** wird als primäres Backend-as-a-Service für Datenbank, Authentifizierung und Edge Functions verwendet.

---

## Dokumentation

- **Code-Dokumentation** erfolgt mittels **JSDoc** für alle Funktionen, Klassen und Komponenten.
- Die **Markdown-Dokumentation** im `docs/`-Verzeichnis beschreibt alle Seiten, Module und Prozesse für:
  - Entwickler:innen
  - Auditor:innen
  - Endnutzer:innen

---

## Testing

- Für **jede Kernfunktion** sind **Unit-Tests** zu erstellen.
- **React-Komponenten** werden mit **Jest** und **Testing Library** getestet.
- **End-to-End-Tests** erfolgen mit **Cypress**.

---

## Sicherheit

- **Sicherheit** hat **höchste Priorität**. Alle Entwicklungsaktivitäten müssen folgende Punkte umsetzen:
  - Sichere Authentifizierung und Autorisierung (**RBAC**)
  - **Datenschutzkonformität** nach DSGVO, ISO 27001, DORA
  - **Datenverschlüsselung**
  - **Schutz vor Web-Schwachstellen** (XSS, CSRF, SQL-Injection etc.)
  - **Audit-Logging**
  - Keine Speicherung von **sensiblen Daten oder Secrets** im Code

---

## Design

- Die Implementierung muss folgende **Design-Anforderungen** erfüllen:
  - **Responsive Design**
  - Unterstützung eines **Dark Mode**
  - Verwendung der festgelegten Styling-Bibliotheken (**Tailwind CSS**, **shadcn/ui**)

---

## Entwicklungsprozess

- Entwicklung erfolgt über **Git und GitHub**.
  - Verwendung von **Feature-Branches**
  - Erstellung von **Pull Requests**
  - Durchführung von **Code Reviews**
- **GitHub Actions** werden für **CI/CD** genutzt, inklusive:
  - Automatischer **Tests**
  - Automatischer **Builds**
  - Automatischer **Deployments**

---
