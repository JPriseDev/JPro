# Architekturübersicht JPro

Dieses Dokument beschreibt die Gesamtarchitektur der JPro-Anwendung.

## Hauptkomponenten

- **Frontend**: Eine Single Page Application (SPA), entwickelt mit React, TypeScript und Vite. Das Styling erfolgt über Tailwind CSS, und für UI-Komponenten wird shadcn/ui genutzt.
- **Backend**: Supabase dient als Backend-as-a-Service (BaaS) und stellt die PostgreSQL-Datenbank, Authentifizierungsdienste (Supabase Auth) und serverseitige Logik mittels Edge Functions (Deno-basiert) bereit.
- **API**: Die Kommunikation zwischen Frontend und Backend erfolgt primär über den Supabase Client SDK, der RESTful-Endpunkte und Realtime-Funktionen für die Datenbankinteraktion und Authentifizierung zur Verfügung stellt. Edge Functions können für spezifische API-Endpunkte genutzt werden.

## Diagramm (Platzhalter)

(Hier könnte ein Architekturdiagramm eingefügt werden, z.B. mit Mermaid.js oder als Bild)

```mermaid
graph TD
    A[Benutzer (Browser)] -->|HTTPS| B(React Frontend - Vite);
    B -->|Supabase SDK| C(Supabase);
    C --> D[PostgreSQL Datenbank];
    C --> E[Supabase Auth];
    C --> F[Supabase Edge Functions];
    C --> G[Supabase Storage];