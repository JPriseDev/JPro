# Anforderungscheckliste für JPro

## 6. Funktionsanforderungen

### 6.1 Benutzerverwaltung & Rollenmanagement
[x] Als Nutzer möchte ich mich per E-Mail/Passwort registrieren können (Supabase Auth)
[x] Als Nutzer möchte ich eine Bestätigungs-E-Mail zur Verifizierung erhalten
[x] Als Nutzer möchte ich mich ein-/ausloggen können (Supabase Auth)
[ ] Als Nutzer möchte ich die Option "Angemeldet bleiben" nutzen können
[ ] Als Nutzer möchte ich mein Passwort zurücksetzen können (per E-Mail-Link)
[ ] Als Nutzer möchte ich meine Profildaten (Name, E-Mail etc.) bearbeiten können
[ ] Als Nutzer möchte ich meine Account-Einstellungen verwalten können
[ ] Als Nutzer möchte ich meinen Account löschen können

[ ] Als Admin möchte ich Nutzerkonten für JPrise-Mitarbeiter anlegen können
[ ] Als Admin möchte ich Nutzerkonten für Kunden anlegen können
[ ] Als Admin möchte ich Rollen und Berechtigungen verwalten können
[ ] Als Admin möchte ich Nutzerkonten sperren/entsperren können
[ ] Als Admin möchte ich Kundeninstitute verwalten können
[ ] Als Admin möchte ich Audit-Logs einsehen können

### 6.2 Projektmanagement
[ ] Als Projektleiter möchte ich neue Projekte mit Details erstellen können
[ ] Als Projektleiter möchte ich Projektstrukturen mit Teilprojekten definieren
[ ] Als Projektleiter möchte ich Aktivitäten mit Ergebnissen verknüpfen
[ ] Als Projektleiter möchte ich eine Projektübersicht mit Filteroptionen sehen
[ ] Als Projektleiter möchte ich Gantt-Diagramme für Projekte sehen
[ ] Als Projektleiter möchte ich Projektteams zusammenstellen können
[ ] Als Projektleiter möchte ich Kundenansprechpartner zu Projekten einladen
[ ] Als Projektleiter möchte ich Projekte archivieren können
[ ] Als Projektleiter möchte ich Projektvorlagen erstellen können
[ ] Als Projektleiter möchte ich Meilensteine definieren und verfolgen

### 6.3 Aktivitäten- & Ergebnismanagement
[ ] Als Mitarbeiter möchte ich Aktivitäten mit Details erstellen können
[ ] Als Mitarbeiter möchte ich Unter-Aktivitäten anlegen können
[ ] Als Mitarbeiter möchte ich den Status von Aktivitäten ändern können
[ ] Als Mitarbeiter möchte ich Dateien an Aktivitäten anhängen können
[ ] Als Mitarbeiter möchte ich Kommentare zu Aktivitäten hinzufügen können

### 6.4 Zeiterfassung & Tätigkeitsnachweise
[ ] Als Mitarbeiter möchte ich Zeiten auf Projekte/Aktivitäten buchen können
[ ] Als Mitarbeiter möchte ich Tätigkeitsnachweise erstellen und einreichen
[ ] Als Projektleiter möchte ich eingereichte Zeiten prüfen können
[ ] Als Kunde möchte ich Tätigkeitsnachweise freigeben/ablehnen können
[ ] Als Kunde möchte ich eine Historie der Freigaben einsehen können
[ ] Als Admin möchte ich globale Zeiterfassungseinstellungen konfigurieren

### 6.5 Ressourcenplanung
[ ] Als Mitarbeiter möchte ich meine Abwesenheiten eintragen können
[ ] Als Mitarbeiter möchte ich meine Auslastung einsehen können
[ ] Als Projektleiter möchte ich verfügbare Mitarbeiter mit Skills sehen
[ ] Als Projektleiter möchte ich Ressourcenauslastung visualisieren

### 6.6 Reporting & Auswertungen
[ ] Als Nutzer möchte ich EVA-Berichte (Earned Value Analysis) generieren
[ ] Als Nutzer möchte ich Projektfortschrittsberichte erstellen
[ ] Als Nutzer möchte ich Aufwandsberichte (Plan/Ist) sehen
[ ] Als Nutzer möchte ich Kostenberichte generieren
[ ] Als Nutzer möchte ich Auslastungsberichte erstellen
[ ] Als Admin möchte ich Systemnutzungsberichte einsehen

## 7. Nicht-funktionale Anforderungen
[ ] Modularer Aufbau für Wiederverwendbarkeit
[ ] Browser-Kompatibilität (aktuelle Versionen Chrome, Firefox, Safari, Edge)
[ ] Datenintegrität sicherstellen
[ ] Performance: Antwortzeiten unter 2-3 Sekunden
[ ] Sicherheit: DSGVO, ISO 27001, DORA Compliance
[ ] Schutz vor XSS, CSRF, SQL-Injection
[ ] Rollenbasierte Zugriffskontrolle (RBAC)
[ ] Audit-Logging für kritische Aktionen
[ ] Datenverschlüsselung

## 8. Design-Anforderungen
[ ] Responsive Design für Desktop/Tablet/Smartphone
[ ] Dark Mode Unterstützung
[ ] Klare, intuitive Benutzerführung
[ ] Konsistente UI/UX gemäß shadcn/ui
[ ] Barrierefreiheit gemäß WCAG
[ ] Lokalisierung für deutsche Sprache