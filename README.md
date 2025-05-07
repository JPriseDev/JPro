# JPro - Projektmanagement Anwendung

Willkommen bei JPro, einer responsiven Projektmanagement-Anwendung.

## Projektübersicht

"JPro" ist eine intuitive, webbasierte und responsive Projektmanagement-Anwendung, die darauf abzielt, Mitarbeitende der JPrise Unternehmensberatung GmbH und deren Kunden (Mitarbeitende von Instituten der Sparkassen Finanzgruppe) dabei zu unterstützen, ihre Projekte effizienter zu planen, zu verfolgen und abzuschließen.

Weitere Details finden Sie im [Produktanforderungsdokument (PRD)](./docs/JPro_PRD_V1.md).

## Technologie-Stack

- **Frontend**: TypeScript, React, Tailwind CSS, shadcn/ui
- **Backend & Datenbank**: Supabase (PostgreSQL, Auth, Edge Functions)
- **Build-Tool**: Vite
- **Testing**: Jest, React Testing Library, Cypress
- **Versionierung**: Git mit GitHub
- **CI/CD**: GitHub Actions
- **Code-Dokumentation**: JSDoc

## Verzeichnisstruktur

- `app/`: Enthält `.jsx`/`.tsx`-Komponenten und Anwendungslogik.
- `docs/`: Beinhaltet Markdown-Dokumente für Nutzer:innen, Entwickler:innen und Auditor:innen.
- `public/`: Statische Assets.

## Erste Schritte

1.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    # oder
    yarn install
    # oder
    pnpm install
    ```

2.  **Entwicklungsserver starten:**
    ```bash
    npm run dev
    # oder
    yarn dev
    # oder
    pnpm dev
    ```

3.  **Build erstellen:**
    ```bash
    npm run build
    ```

4.  **Tests ausführen:**
    ```bash
    npm run test
    ```

## Dokumentation

Die Projektdokumentation wird fortlaufend im `docs/`-Verzeichnis aktualisiert.

- [Benutzerhandbuch](./docs/user_guide/getting_started.md)
- [Entwicklerhandbuch](./docs/developer_guide/setup.md)
- [Architekturübersicht](./docs/architecture/overview.md)

## Lizenz

Dieses Projekt ist proprietär.
