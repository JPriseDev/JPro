# JPro – Responsive Projektmanagement-Anwendung

## Einleitung

**JPro** ist eine intuitive, webbasierte und responsive Anwendung zur effizienten Planung, Verfolgung und Verwaltung von Projekten. Sie wurde entwickelt, um die Zusammenarbeit zwischen internen Teams und externen Kunden zu verbessern, die Projekttransparenz zu erhöhen und Prozesse wie Zeiterfassung und Ressourcenplanung zu optimieren.

## Zielgruppe

- **Interne Mitarbeitende**: Projektmanager:innen, Teammitglieder
- **Externe Kunden**: Projektbeteiligte, Ansprechpartner:innen auf Kundenseite

## Problemstellung

- Ineffiziente Koordination
- Mangelnde Transparenz
- Umständliche Dokumentenverwaltung
- Eingeschränkte mobile Nutzung
- Sicherheits- und Datenschutzanforderungen (DSGVO, ISO 27001, DORA)
- Fehlende Integration von Zeiterfassung & Ressourcenplanung

## Lösung

- Zentrale Projekt- und Aufgabenverwaltung
- Rollenbasierter Kundenzugang
- Integrierte Kommunikation & Dokumentation
- Responsive Design & Dark Mode
- Datenschutz & Compliance by Design
- Intuitive Benutzerführung
- Dashboards & Reporting
- Zeiterfassung mit Kundenfreigabe
- Ressourcenplanung

## Kernfunktionen (MVP)

- Benutzerverwaltung & Auth (Supabase)
- Projektstruktur (Projekte, Teilprojekte, Arbeitspakete, Aktivitäten)
- Aktivitätenmanagement (Status, Kommentare, Anhänge)
- Zeiterfassung & Tätigkeitsnachweise mit Freigabe
- Reporting-Dashboards
- Responsive Design mit Dark Mode

## Technologie-Stack

- **Frontend**: TypeScript, React, Tailwind CSS, shadcn/ui  
- **Backend**: Supabase (PostgreSQL, Auth, Edge Functions)  
- **Build**: Vite  
- **Tests**: Jest, React Testing Library, Cypress  
- **CI/CD**: GitHub Actions  
- **Versionierung**: Git + GitHub  
- **Dokumentation**: JSDoc, Markdown

## Persönliche Regeln für die Trae-KI

### Allgemein

- Deutschsprachige, sachliche Ausdrucksweise
- Aktive Formulierungen
- Automatische Ergänzung von Docstrings, Kommentaren, Markdown-Dokumentation
- Immer vollständiger Code – keine Beispiele oder Codefragmente

### Code-Stil

- camelCase (Variablen/Funktionen)
- PascalCase (Komponenten/Klassen)
- UPPER_SNAKE_CASE (Konstanten)
- Einrückung: 2 Leerzeichen
- `app/` = Komponenten, `docs/` = Doku für Entwickler:innen, Nutzer:innen, Auditor:innen

### Dokumentation

- JSDoc-Dokumentation jeder Funktion
- Markdown-Dokumentation aller Module, Prozesse, Seiten im `docs/`-Verzeichnis

### Testing

- Unit-Tests für jede Kernfunktion
- Jest & React Testing Library
- Cypress für E2E

### Architektur

- Modulare, wiederverwendbare Komponenten
- Trennung von Logik (Hooks, Services) und UI

### Sicherheit

- Keine Secrets im Code
- MFA und RBAC berücksichtigen
- DSGVO, ISO 27001, DORA einhalten
- Schutz vor XSS, CSRF, SQLi
- Audit-Logging
- Datenschutzstandards der Sparkassen-Finanzgruppe

## Projektregeln für die Trae-KI

### Allgemein

- Alle Artefakte auf Deutsch dokumentiert
- Aktive Sprache, vollständiger Code
- Commit-Qualität: konform mit Style- und Sicherheitsvorgaben

### Code-Stil

- camelCase (Variablen/Funktionen)
- PascalCase (Klassen/Komponenten)
- UPPER_SNAKE_CASE (Konstanten)
- Einrückung: 2 Leerzeichen
- JSX/TSX im `app/`, Markdown im `docs/`

### Architektur

- Modularer Aufbau
- Trennung von UI und Business-Logik
- Supabase als Backend-as-a-Service

### Dokumentation

- JSDoc für Code
- Strukturierte Markdown-Dokumentation im `docs/`

### Testing

- Unit-Tests mit Jest
- Komponententests mit Testing Library
- E2E mit Cypress

### Sicherheit

- Authentifizierung & Autorisierung (RBAC)
- Datenschutz nach DSGVO, ISO 27001, DORA
- Verschlüsselung & Schwachstellenvermeidung
- Audit-Logging
- Keine sensiblen Daten im Code

### Design

- Responsiv (Desktop, Tablet, Mobile)
- Dark Mode
- UX: Klarheit, Konsistenz, Feedback

### Entwicklungsprozess

- Git-Workflows: Feature-Branches, Pull Requests, Reviews
- CI/CD mit GitHub Actions (Test, Build, Deploy)

## Erste Schritte (Entwicklungsumgebung)

### 1. Repository klonen

```bash
git clone [REPO_URL]
cd [Projektverzeichnis]
```

### 2. Abhängigkeiten installieren

```bash
npm install
# oder yarn install
# oder pnpm install
```

### 3. Supabase konfigurieren

`.env` im Projekt-Root anlegen:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 4. Entwicklungsserver starten

```bash
npm run dev
```

→ Anwendung unter http://localhost:5173

## Testing

- Unit:  
  `npm test`

- E2E mit Cypress (separate Konfiguration erforderlich)

## Mitwirken

1. Forken
2. Branch erstellen: `git checkout -b feature/IhrFeatureName`
3. Änderungen implementieren & testen
4. Commit: `git commit -m 'feat: ...'`
5. Push: `git push origin ...`
6. Pull Request auf GitHub stellen

## Lizenz

**Proprietär** – © JPrise Unternehmensberatung GmbH  
Nutzung, Weitergabe und Vervielfältigung nur gemäß interner oder vertraglicher Vereinbarungen

## Hinweis

Dieses Dokument basiert auf dem initialen Projektkonzept.  
Weiterführende Inhalte befinden sich im `docs/`-Verzeichnis.
