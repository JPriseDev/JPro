# PRD: Responsive Projektmanagement-Anwendung "JPro"

**Version:** 1.0
**Datum:** 25. Oktober 2023
**Autor:** JPrise Unternehmensberatung GmbH, Roland Alscher
**Status:** Entwurf

---

## Inhaltsverzeichnis

1.  [Einleitung & Zusammenfassung](#1-einleitung--zusammenfassung)
2.  [Zielgruppe](#2-zielgruppe)
3.  [Problemstellung](#3-problemstellung)
4.  [Lösungsvorschlag](#4-lösungsvorschlag)
5.  [Ziele & Erfolgsmetriken](#5-ziele--erfolgsmetriken)
6.  [Funktionsanforderungen (User Stories)](#6-funktionsanforderungen-user-stories)
    *   [6.1. Benutzerverwaltung & Rollenmanagement (Supabase-basiert)](#61-benutzerverwaltung--rollenmanagement-supabase-basiert)
    *   [6.2. Projektmanagement](#62-projektmanagement)
    *   [6.3. Aktivitäten- & Ergebnismanagement (inkl. Aufgaben)](#63-aktivitäten--ergebnismanagement-inkl-aufgaben)
    *   [6.4. Zeiterfassung & Tätigkeitsnachweise (inkl. Kundenfreigabe)](#64-zeiterfassung--tätigkeitsnachweise-inkl-kundenfreigabe)
    *   [6.5. Ressourcenplanung & -management](#65-ressourcenplanung--management)
    *   [6.6. Reporting & Auswertungen](#66-reporting--auswertungen)
7.  [Nicht-funktionale Anforderungen](#7-nicht-funktionale-anforderungen)
8.  [Design-Anforderungen (Responsive Design & Dark Mode)](#8-design-anforderungen-responsive-design--dark-mode)
    *   [8.1. Responsive Design](#81-responsive-design)
    *   [8.2. Dark Mode (Dunkelmodus)](#82-dark-mode-dunkelmodus)
    *   [8.3. Allgemeine UI/UX-Prinzipien](#83-allgemeine-uiux-prinzipien)
9.  [Technologie-Stack](#9-technologie-stack)
10. [Release-Kriterien (MVP - Minimum Viable Product)](#10-release-kriterien-mvp---minimum-viable-product)
11. [Zukünftige Überlegungen (Post-MVP)](#11-zukünftige-überlegungen-post-mvp)
12. [Offene Fragen](#12-offene-fragen)

---

## 1. Einleitung & Zusammenfassung

"JPro" ist eine intuitive, webbasierte und responsive Projektmanagement-Anwendung, die darauf abzielt, Mitarbeitende der JPrise Unternehmensberatung GmbH und deren Kunden (Mitarbeitende von Instituten der Sparkassen Finanzgruppe) dabei zu unterstützen, ihre Projekte effizienter zu planen, zu verfolgen und abzuschließen. Der Fokus liegt auf einer klaren Benutzerführung, Kollaboration, der nahtlosen Nutzbarkeit auf verschiedenen Endgeräten (Desktop, Tablet, Smartphone) **sowie auf integrierten Prozessen für die Zeiterfassung mit Kundenfreigabe und einer effektiven Ressourcenplanung.**

---

## 2. Zielgruppe

*   **Primäre Zielgruppe:**
    *   **Mitarbeitende der JPrise Unternehmensberatung GmbH:** Interne Teams und Projektmanager, die Projekte für und mit Kunden planen, durchführen und überwachen.
    *   **Mitarbeitende von Kundeninstituten (Sparkassen Finanzgruppe):** Projektbeteiligte und Ansprechpartner auf Kundenseite, die in gemeinsame Projekte mit der JPrise Unternehmensberatung GmbH involviert sind und Einblick in den Projektfortschritt benötigen oder aktiv mitarbeiten.

Diese Zielgruppen benötigen eine klare, effiziente und sichere Plattform zur gemeinsamen Projektarbeit und zum Informationsaustausch.

---

## 3. Problemstellung

*   **Ineffiziente Projektkoordination:** Die Abstimmung zwischen internen JPrise-Teams und den Kundeninstituten über Projektfortschritte, Aufgaben und Termine erfolgt oft über verstreute Kanäle (E-Mails, Telefonate, separate Dokumente), was zu Informationsverlust und Missverständnissen führen kann.
*   **Mangelnde Transparenz für Kunden:** Kunden haben oft keinen direkten, aktuellen Einblick in den Projektstatus, was zu Unsicherheit und erhöhtem Nachfrageaufkommen bei den JPrise-Beratern führen kann.
*   **Schwierigkeiten bei der gemeinsamen Dokumentenverwaltung:** Der Austausch und die Versionierung von projektbezogenen Dokumenten zwischen JPrise und den Kunden ist umständlich und fehleranfällig.
*   **Herausforderungen bei der mobilen Nutzung:** Projektbeteiligte (sowohl JPrise-Mitarbeiter als auch Kunden) sind oft unterwegs oder nicht am festen Arbeitsplatz und benötigen einen einfachen, mobilen Zugriff auf Projektinformationen und die Möglichkeit, Aufgaben zu aktualisieren.
*   **Sicherheits- und Compliance-Anforderungen:** Insbesondere im Umfeld der Sparkassen Finanzgruppe müssen Datenschutz und Informationssicherheit höchsten Standards genügen, was bei der Auswahl und Nutzung von Projektmanagement-Tools eine zentrale Rolle spielt. Bestehende generische Tools erfüllen diese spezifischen Anforderungen möglicherweise nicht ausreichend.
*   **Hoher Einarbeitungsaufwand für externe Tools:** Die Einführung komplexer, externer Projektmanagement-Tools bei Kunden kann auf Widerstand stoßen und einen hohen Schulungsaufwand bedeuten. Eine intuitive, auf die wesentlichen Bedürfnisse zugeschnittene Lösung wäre vorteilhafter.
*   **Fehlende zentrale Anlaufstelle:** Es fehlt eine einheitliche Plattform, die allen Projektbeteiligten (intern und extern) als "Single Source of Truth" für alle projektbezogenen Informationen dient.
*   **Umständliche Zeiterfassung und Freigabeprozesse:** Die Erfassung von Arbeitszeiten durch JPrise-Mitarbeitende und die anschließende Freigabe der Tätigkeitsnachweise durch die Kunden ist oft ein manueller, zeitaufwendiger Prozess, der fehleranfällig ist und zu Verzögerungen in der Abrechnung führen kann.
*   **Mangelnde Übersicht über Ressourcenauslastung:** Für JPrise ist es schwierig, einen klaren und aktuellen Überblick über die Verfügbarkeit und Auslastung der eigenen Mitarbeitenden über verschiedene Projekte hinweg zu erhalten, was die Planung neuer Projekte und die optimale Allokation von Ressourcen erschwert.

---

## 4. Lösungsvorschlag

"JPro" wird als zentrale, webbasierte und responsive Projektmanagement-Plattform entwickelt, um die oben genannten Problemstellungen gezielt zu adressieren. Die Lösung bietet:

*   **Zentralisierte Projekt- und Aufgabenverwaltung:** JPrise-Mitarbeitende und Kunden können gemeinsam auf einer Plattform Projekte anlegen, Aufgaben definieren, Verantwortlichkeiten zuweisen, Fristen setzen und den Fortschritt verfolgen.
*   **Transparente Kundenkollaboration:** Kunden erhalten einen direkten (ggf. rollenbasierten) Zugang zu relevanten Projektinformationen, Dashboards und Status-Updates, was die Transparenz erhöht und die Kommunikation vereinfacht.
*   **Integrierte Kommunikations- und Dokumentationsfunktionen:** Aufgabenbezogene Kommentare, Diskussionen und das zentrale Ablegen von projektbezogenen Dateien (mit Versionierung, falls im MVP oder später) reduzieren die Notwendigkeit, auf externe Kanäle auszuweichen.
*   **Optimierte mobile Nutzbarkeit:** Durch ein responsives Design wird sichergestellt, dass alle Nutzer – ob JPrise-Mitarbeiter oder Kunde – auch von mobilen Endgeräten (Smartphones, Tablets) komfortabel auf JPro zugreifen und wesentliche Aktionen durchführen können.
*   **Fokus auf Sicherheit und Datenschutz:** Die Entwicklung von JPro berücksichtigt von Beginn an die hohen Sicherheits- und Compliance-Anforderungen der Sparkassen Finanzgruppe. Dies umfasst Aspekte wie sichere Authentifizierung, Datenverschlüsselung und rollenbasierte Zugriffskontrollen.
*   **Intuitive Benutzerführung:** Eine klare, aufgeräumte Oberfläche und ein an die Arbeitsweise der Zielgruppe angepasster Funktionsumfang sorgen für eine geringe Einarbeitungszeit und hohe Akzeptanz bei allen Nutzern.
*   **Effizientes Reporting:** Integrierte Dashboards und Berichtsfunktionen ermöglichen es JPrise-Mitarbeitern und Kunden (je nach Berechtigung), den Projektfortschritt, Engpässe und wichtige Kennzahlen schnell zu erfassen und fundierte Entscheidungen zu treffen.
*   **Integrierte Zeiterfassung und Kundenfreigabe:** JPrise-Mitarbeitende können ihre Arbeitszeiten direkt auf Projekte und Aufgaben buchen. Die Kunden erhalten eine transparente Übersicht dieser Tätigkeitsnachweise und können diese direkt in JPro prüfen und freigeben, was den Abrechnungsprozess beschleunigt und vereinfacht.
*   **Funktionen zur Ressourcenplanung:** JPro bietet Werkzeuge zur Visualisierung der Auslastung von JPrise-Mitarbeitenden, zur Planung von Ressourcen für aktuelle und zukünftige Projekte und zur Identifizierung von Kapazitätsengpässen oder -überschüssen.

"JPro" soll somit als Brücke zwischen der JPrise Unternehmensberatung GmbH und ihren Kunden dienen, die Projektarbeit vereinfachen, die Zusammenarbeit verbessern, **Prozesse rund um Zeiterfassung und Abrechnung optimieren, eine fundierte Ressourcenplanung ermöglichen** und zu erfolgreicheren Projektabschlüssen führen.

---

## 5. Ziele & Erfolgsmetriken

Mit der Einführung von "JPro" verfolgen wir folgende Ziele und werden den Erfolg anhand folgender Metriken messen:

*   **Ziele:**
    *   **Steigerung der Projekteffizienz:** Reduzierung des Zeitaufwands für administrative Projektaufgaben und schnellere Projektdurchlaufzeiten.
    *   **Verbesserung der Kundenzufriedenheit:** Erhöhte Transparenz und einfachere Kollaboration für Kunden der JPrise Unternehmensberatung GmbH, **insbesondere durch transparente und effiziente Freigabeprozesse für Tätigkeitsnachweise.**
    *   **Optimierung der internen Zusammenarbeit:** Effizienterer Informationsaustausch und Koordination innerhalb der JPrise-Projektteams.
    *   **Erhöhung der Datenqualität und -sicherheit:** Zentrale, sichere Ablage aller projektbezogenen Informationen gemäß den Anforderungen der Sparkassen Finanzgruppe.
    *   **Hohe Nutzerakzeptanz:** Sowohl interne Mitarbeitende als auch Kunden nutzen "JPro" regelmäßig und gerne.
    *   **Verbesserte Projektübersicht und -steuerung:** JPrise Projektleiter haben jederzeit einen klaren Überblick über Status, Risiken und Fortschritt ihrer Projekte.
    *   **Effizientere Abrechnungsprozesse:** Beschleunigung der Rechnungsstellung durch integrierte Zeiterfassung und schnelle Kundenfreigaben.
    *   **Optimierte Ressourcenallokation:** Bessere Planbarkeit und Auslastung der JPrise-Mitarbeiterressourcen durch dedizierte Planungsfunktionen.

*   **Erfolgsmetriken (Beispiele für nach dem Launch):**
    *   **Aktive Nutzer (MAU/DAU):** Anzahl der monatlich/täglich aktiven JPrise-Mitarbeiter und Kunden-Nutzer.
    *   **Projektdurchlaufzeit:** Durchschnittliche Zeit von Projektstart bis -abschluss (im Vergleich zu Projekten vor JPro-Einführung).
    *   **Kunden-Feedback/NPS (Net Promoter Score):** Regelmäßige Umfragen zur Zufriedenheit der Kunden mit der Projektkollaboration **und den Freigabeprozessen** über JPro.
    *   **Aufgabenabschlussrate:** Prozentsatz der pünktlich abgeschlossenen Aufgaben.
    *   **Nutzungsintensität der Reporting-Funktionen:** Wie häufig werden Dashboards und Berichte von Projektleitern und Kunden aufgerufen?
    *   **Reduktion von projektbezogenen E-Mails/Anrufen:** Qualitative und ggf. quantitative Messung einer Verlagerung der Kommunikation in JPro.
    *   **Anzahl der in JPro verwalteten Projekte und Dokumente.**
    *   **Support-Anfragen:** Anzahl und Art der Support-Anfragen bezüglich JPro (als Indikator für Benutzerfreundlichkeit).
    *   **Durchlaufzeit für Freigaben von Tätigkeitsnachweisen:** Durchschnittliche Zeit von der Einreichung eines Tätigkeitsnachweises bis zur Freigabe durch den Kunden.
    *   **Auslastungsgrad der Mitarbeiter:** Transparenz über die geplante vs. tatsächliche Auslastung der JPrise-Ressourcen.
    *   **Genauigkeit der Ressourcenplanung:** Abweichung zwischen geplanter und tatsächlicher Ressourcennutzung.

---

## 6. Funktionsanforderungen (User Stories)

### 6.1. Benutzerverwaltung & Rollenmanagement (Supabase-basiert)

*   **Allgemein (Jeder Nutzer):**
    *   Als neuer Nutzer möchte ich mich einfach und sicher per E-Mail und Passwort registrieren können, um einen Account für JPro zu erstellen. (Supabase Auth)
    *   Als neuer Nutzer möchte ich nach der Registrierung eine Bestätigungs-E-Mail erhalten, um meine E-Mail-Adresse zu verifizieren.
    *   Als registrierter Nutzer möchte ich mich sicher mit meiner E-Mail und meinem Passwort in JPro ein- und ausloggen können. (Supabase Auth)
    *   Als Nutzer möchte ich die Option "Angemeldet bleiben" wählen können, um nicht bei jeder Sitzung meine Zugangsdaten erneut eingeben zu müssen.
    *   Als Nutzer möchte ich mein Passwort sicher zurücksetzen können, falls ich es vergessen habe (über einen E-Mail-Link).
    *   Als Nutzer möchte ich meine Profildaten (mindestens Name, E-Mail; optional: Telefonnummer, Avatar, Position/Abteilung) einsehen und bearbeiten können.
    *   Als Nutzer möchte ich meine Account-Einstellungen (z.B. Benachrichtigungspräferenzen) verwalten können.
    *   Als Nutzer möchte ich meinen Account löschen können (unter Berücksichtigung von Datenschutzrichtlinien und ggf. notwendiger Datenaufbewahrung).
*   **JPrise Administrator:**
    *   Als JPrise-Administrator möchte ich eine Übersicht aller registrierten Nutzer (JPrise-Mitarbeiter und Kunden) sehen und filtern können (z.B. nach Rolle, Unternehmen).
    *   Als JPrise-Administrator möchte ich manuell Benutzerkonten für JPrise-Mitarbeiter anlegen können und ihnen die Rolle "JPrise-Mitarbeiter" oder "JPrise-Projektleiter" zuweisen.
    *   Als JPrise-Administrator möchte ich manuell Benutzerkonten für Kunden-Ansprechpartner anlegen können, sie einem Kundeninstitut (Sparkassen Finanzgruppe) zuordnen und ihnen die Rolle "Kunde" oder "Kunden-Freigeber" zuweisen.
    *   Als JPrise-Administrator möchte ich die Rollen und Berechtigungen von Nutzern ändern können.
    *   Als JPrise-Administrator möchte ich Benutzerkonten bei Bedarf temporär sperren/entsperren oder endgültig deaktivieren/löschen können.
    *   Als JPrise-Administrator möchte ich die Liste der Kundeninstitute (Sparkassen Finanzgruppe) verwalten können, denen Nutzer zugeordnet werden können.
    *   Als JPrise-Administrator möchte ich Audit-Logs für wichtige administrative Aktionen (z.B. Nutzeranlage, Rollenänderung) einsehen können.

### 6.2. Projektmanagement

*   **JPrise-Projektleiter:**
    *   Als JPrise-Projektleiter möchte ich ein neues Projekt erstellen können mit Details wie:
        *   Projekttitel (eindeutig)
        *   Projektnummer (ggf. automatisch generiert oder manuell)
        *   Detaillierte Projektbeschreibung
        *   Zugeordneter Kunde (Auswahl aus verwalteter Kundeninstitutsliste)
        *   Hauptansprechpartner beim Kunden (Auswahl aus den Nutzern des Kundeninstituts)
        *   Intern verantwortlicher JPrise-Projektleiter (automatisch der Ersteller, aber änderbar)
        *   Geplantes Start- und Enddatum
        *   Projektbudget (optional, falls für MVP relevant)
        *   Projektstatus (z.B. Angebot, Planung, Aktiv, Abgeschlossen, On Hold, Abgebrochen)
        *   Projekttyp/Kategorie (z.B. Beratung, Implementierung, Schulung – konfigurierbar)
    *   Als JPrise-Projektleiter möchte ich eine Projektstruktur mit Teilprojekten, Arbeitspaketen und darunterliegenden Aktivitäten definieren können, um komplexe Vorhaben übersichtlich zu gliedern.
    *   Als JPrise-Projektleiter möchte ich für jede Aktivität ein oder mehrere konkrete (lieferbare) Ergebnisse definieren können.
    *   Als JPrise-Projektleiter möchte ich eine Projektübersicht (Dashboard/Liste) mit allen meinen Projekten sehen, filterbar nach Status, Kunde, etc. und sortierbar nach Name, Datum, etc.
    *   Als JPrise-Projektleiter möchte ich eine Gantt-Diagramm-Ansicht für meine Projekte sehen können, die die Projektstruktur (Teilprojekte, Arbeitspakete, Aktivitäten), deren Zeitpläne und Abhängigkeiten visualisiert. Diese Ansicht soll auf wöchentlicher, monatlicher und jährlicher Ebene zoombar sein.
    *   Als JPrise-Projektleiter möchte ich die Details eines bestehenden Projekts (inkl. seiner Struktur) bearbeiten und den Projektstatus aktualisieren können.
    *   Als JPrise-Projektleiter möchte ich JPrise-Teammitglieder (mit Rolle "JPrise-Mitarbeiter" oder "JPrise-Projektleiter") zu einem Projektteam hinzufügen und ihnen spezifische Projektrollen (z.B. Teammitglied, Teilprojektleiter – falls feingranularer nötig) zuweisen können.
    *   Als JPrise-Projektleiter möchte ich Kundenansprechpartner (mit Rolle "Kunde" oder "Kunden-Freigeber") zu einem Projekt einladen/zuweisen, damit diese Zugriff auf die für sie relevanten Projektinformationen erhalten. Die Sichtbarkeit für Kunden sollte konfigurierbar sein.
    *   Als JPrise-Projektleiter möchte ich Projekte archivieren können, wenn sie abgeschlossen sind.
    *   Als JPrise-Projektleiter möchte ich eine Vorlage aus einem bestehenden Projekt erstellen können, um schnell neue, ähnliche Projekte anzulegen.
    *   Als JPrise-Projektleiter möchte ich Meilensteine für ein Projekt definieren und deren Erreichung verfolgen können (Meilensteine können mit dem Abschluss von Arbeitspaketen oder spezifischen Ergebnissen verknüpft sein).
    *   **(Fortgeschritten/Innovativ) Als JPrise-Projektleiter möchte ich ein oder mehrere Dokumente (z.B. Angebote, Konzepte) hochladen können, woraufhin JPro diese analysiert und mir eine vorstrukturierte Projekthierarchie (Teilprojekte, Arbeitspakete, Aktivitäten mit Ergebnisvorschlägen) vorschlägt, die ich dann anpassen und übernehmen kann.**
*   **JPrise-Mitarbeiter:**
    *   Als JPrise-Mitarbeiter möchte ich die Projekte sehen, denen ich zugeordnet bin.
    *   Als JPrise-Mitarbeiter möchte ich die Projektstruktur (Teilprojekte, Arbeitspakete) und die mir zugewiesenen Aktivitäten und erwarteten Ergebnisse einsehen können.
    *   Als JPrise-Mitarbeiter möchte ich die Gantt-Ansicht für Projekte, an denen ich beteiligt bin, einsehen können, um Zeitpläne und Abhängigkeiten zu verstehen.
*   **Kunde:**
    *   Als Kunde möchte ich eine übersichtliche Darstellung der Projekte erhalten, an denen mein Institut beteiligt ist und für die ich freigeschaltet wurde.
    *   Als Kunde möchte ich die (für mich freigegebene) Projektstruktur, wichtige Meilensteine und den Gesamtzeitplan (ggf. vereinfachte Gantt-Ansicht) einsehen können.
    *   Als Kunde möchte ich die wichtigsten Projektinformationen (Status, Zeitplan, Hauptansprechpartner JPrise, vereinbarte Ziele/Ergebnisse) einsehen können.

### 6.3. Aktivitäten- & Ergebnismanagement (inkl. Aufgaben)

*   **JPrise-Mitarbeiter (Projektleiter & Teammitglieder):**
    *   Als JPrise-Mitarbeiter möchte ich Aktivitäten innerhalb eines Arbeitspakets erstellen können mit Details wie:
        *   Aktivitätstitel (klar und prägnant)
        *   Zugehöriges Ergebnis (Was wird konkret geliefert? z.B. "Konzeptdokument V1.0", "Implementiertes Modul X")
        *   Detaillierte Aktivitätsbeschreibung (Was ist zu tun, um das Ergebnis zu erreichen?)
        *   **Hauptverantwortliche Person (genau eine Person aus dem Projektteam)**
        *   **Mitwirkende Personen (optional, eine oder mehrere Personen aus dem Projektteam)**
        *   Geplantes Start- und Fälligkeitsdatum (für die Aktivität und das Ergebnis)
        *   **Geplanter Aufwand (z.B. in Stunden oder Personentagen – entweder hier direkt oder aggregiert vom darüberliegenden Arbeitspaket)**
        *   Priorität (z.B. Niedrig, Mittel, Hoch, Kritisch)
        *   Status (z.B. Offen, In Arbeit, Zur internen Prüfung, Zur Kundenfreigabe, Erledigt, Blockiert, Abgelehnt – konfigurierbar)
        *   Zuordnung zu einem Projekt-Meilenstein (optional)
        *   Tags/Kategorien zur besseren Organisation
    *   Als JPrise-Mitarbeiter möchte ich Unter-Aktivitäten (oder Tasks) zu einer Aktivität erstellen können, falls eine weitere Detaillierung nötig ist (ggf. ohne eigene Ergebnisdefinition, sondern beitragend zum Ergebnis der Hauptaktivität).
    *   Als JPrise-Mitarbeiter möchte ich den Status einer mir zugewiesenen Aktivität ändern können.
    *   Als JPrise-Mitarbeiter möchte ich Dateien (Entwürfe, finale Ergebnisse) an eine Aktivität/ein Ergebnis anhängen können.
    *   Als JPrise-Mitarbeiter möchte ich Kommentare zu einer Aktivität hinzufügen können.
    *   Als JPrise-Mitarbeiter möchte ich andere Projektmitglieder in Kommentaren erwähnen (@mention).
    *   Als JPrise-Mitarbeiter möchte ich meine Aktivitäten projektübergreifend in einer "Meine Aktivitäten/Aufgaben"-Übersicht sehen können.
    *   Als JPrise-Mitarbeiter möchte ich Benachrichtigungen für meine Aktivitäten erhalten.
    *   Als JPrise-Mitarbeiter möchte ich eine Aktivität/ein Ergebnis als "bereit zur Freigabe" markieren, um es einem Kunden oder internen Stakeholder vorzulegen.
    *   Als JPrise-Mitarbeiter möchte ich sehen können, ob ein zur Freigabe eingereichtes Ergebnis akzeptiert oder abgelehnt wurde.
*   **JPrise-Projektleiter:**
    *   Als JPrise-Projektleiter möchte ich alle Aktivitäten und deren Ergebnisse innerhalb meiner Projekte sehen, filtern und sortieren können.
    *   Als JPrise-Projektleiter möchte ich Aktivitäten/Ergebnisse an Teammitglieder delegieren (Hauptverantwortung) und Mitwirkende zuordnen können.
    *   **Als JPrise-Projektleiter möchte ich entweder den Aufwand direkt auf Aktivitätsebene planen oder einen Gesamtaufwand für ein Arbeitspaket festlegen, der dann ggf. auf die Aktivitäten heruntergebrochen oder als Budgetrahmen dient.**
    *   **Als JPrise-Projektleiter möchte ich, dass Aufwände, die auf Aktivitätsebene geplant/erfasst werden, automatisch auf Arbeitspaket- und Teilprojektebene aggregiert werden, um Plan/Ist-Vergleiche zu ermöglichen.**
    *   Als JPrise-Projektleiter möchte ich Abhängigkeiten zwischen Aktivitäten definieren können.
    *   Als JPrise-Projektleiter möchte ich den Fortschritt von Aktivitäten, die Erstellung von Ergebnissen und die Auslastung meiner Teammitglieder überwachen können.
    *   Als JPrise-Projektleiter möchte ich definieren können, welche Ergebnisse durch welche Kundenansprechpartner (Rolle "Kunden-Freigeber") freigegeben werden müssen.
    *   Als JPrise-Projektleiter möchte ich den Status von Freigabeprozessen für Projektergebnisse verfolgen können.
*   **Kunde (insbesondere Rolle "Kunden-Freigeber"):**
    *   Als Kunde möchte ich die (für mich freigegebenen) Aktivitäten und die damit verbundenen erwarteten Ergebnisse einsehen können.
    *   Als Kunde (mit Freigaberolle) möchte ich Benachrichtigungen erhalten, wenn ein Ergebnis zur Freigabe durch mich bereitsteht.
    *   Als Kunde (mit Freigaberolle) möchte ich die Details der Aktivität und die dazugehörigen Ergebnisse/Dateien einsehen können.
    *   Als Kunde (mit Freigaberolle) möchte ich ein eingereichtes Projektergebnis explizit freigeben oder mit einer Begründung ablehnen können.
    *   Als Kunde möchte ich eine Historie meiner Freigabeentscheidungen einsehen können.

### 6.4. Zeiterfassung & Tätigkeitsnachweise (inkl. Kundenfreigabe)

*   **JPrise-Mitarbeiter:**
    *   Als JPrise-Mitarbeiter möchte ich meine geleisteten Arbeitszeiten einfach und schnell auf spezifische Projekte, Teilprojekte, Arbeitspakete oder Aktivitäten/Ergebnisse buchen können.
    *   Als JPrise-Mitarbeiter möchte ich bei jeder Zeitbuchung das Datum, die Dauer (z.B. in Stunden mit 0,25h-Schritten), eine kurze Beschreibung der Tätigkeit und optional die Zuordnung zu einer spezifischen Aktivität/einem Ergebnis vornehmen können.
    *   Als JPrise-Mitarbeiter möchte ich eine Wochen- oder Tagesansicht meiner gebuchten Zeiten sehen, um einen Überblick zu behalten und ggf. Korrekturen vorzunehmen, solange die Zeiten noch nicht übermittelt/freigegeben sind.
    *   Als JPrise-Mitarbeiter möchte ich meine erfassten Zeiten für einen bestimmten Zeitraum (z.B. wöchentlich, monatlich) als Tätigkeitsnachweis "zur Freigabe einreichen" können.
    *   Als JPrise-Mitarbeiter möchte ich sehen können, welche meiner Tätigkeitsnachweise bereits vom Kunden freigegeben, abgelehnt oder noch in Prüfung sind.
    *   Als JPrise-Mitarbeiter möchte ich bei einer Ablehnung eines Tätigkeitsnachweises eine Begründung vom Kunden sehen und den Nachweis korrigieren und erneut einreichen können.
    *   Als JPrise-Mitarbeiter möchte ich eine Erinnerung erhalten, wenn ich meine Zeiten für einen abgeschlossenen Zeitraum noch nicht erfasst oder eingereicht habe.
    *   Als JPrise-Mitarbeiter möchte ich ggf. Standardtätigkeiten oder Favoriten definieren können, um die Zeiterfassung zu beschleunigen.
*   **JPrise-Projektleiter:**
    *   Als JPrise-Projektleiter möchte ich eine Übersicht über alle erfassten Zeiten der Teammitglieder für meine Projekte sehen können (Ist-Aufwände).
    *   Als JPrise-Projektleiter möchte ich die eingereichten Tätigkeitsnachweise meiner Teammitglieder intern prüfen und ggf. kommentieren oder zur Korrektur zurückgeben können, bevor sie an den Kunden zur Freigabe gehen (optionaler interner Prüfschritt).
    *   Als JPrise-Projektleiter möchte ich den Status der Kundenfreigabe für Tätigkeitsnachweise in meinen Projekten verfolgen können.
    *   Als JPrise-Projektleiter möchte ich Berichte über die gebuchten Zeiten pro Projekt, Arbeitspaket oder Aktivität generieren können, um Plan-Ist-Vergleiche der Aufwände durchzuführen (Basis für AC in EVA).
*   **Kunde (Rolle "Kunden-Freigeber"):**
    *   Als Kunde (mit Freigaberolle) möchte ich Benachrichtigungen erhalten, wenn neue Tätigkeitsnachweise für Projekte, für die ich freigabeberechtigt bin, zur Prüfung vorliegen.
    *   Als Kunde (mit Freigaberolle) möchte ich eine klare und transparente Übersicht der eingereichten Tätigkeitsnachweise (Zeitbuchungen mit Datum, Mitarbeiter, Tätigkeit, Dauer, zugehöriges Projekt/Aktivität) einsehen können.
    *   Als Kunde (mit Freigaberolle) möchte ich die Möglichkeit haben, Tätigkeitsnachweise gesammelt (z.B. für einen Zeitraum/Mitarbeiter) oder einzeln zu prüfen.
    *   **Als Kunde (mit Freigaberolle) möchte ich einen Tätigkeitsnachweis explizit freigeben oder mit einer klaren Begründung ablehnen können.**
    *   Als Kunde (mit Freigaberolle) möchte ich eine Historie der von mir freigegebenen oder abgelehnten Tätigkeitsnachweise einsehen können.
    *   Als Kunde (mit Freigaberolle) möchte ich bei Bedarf einen Bericht über die freigegebenen Zeiten für ein Projekt oder einen Zeitraum exportieren können (z.B. als PDF oder CSV).
*   **JPrise-Administrator:**
    *   Als JPrise-Administrator möchte ich globale Einstellungen für die Zeiterfassung konfigurieren können (z.B. Zeiteinheiten, Standard-Freigabezyklen).
    *   Als JPrise-Administrator möchte ich definieren können, welche Projekte/Kunden eine explizite Freigabe von Tätigkeitsnachweisen erfordern.

### 6.5. Ressourcenplanung & -management

*   **JPrise-Mitarbeiter:**
    *   Als JPrise-Mitarbeiter möchte ich meine geplanten Abwesenheiten (Urlaub, Krankheit, Fortbildung etc.) in einem persönlichen Kalender innerhalb von JPro eintragen und verwalten können.
    *   Als JPrise-Mitarbeiter möchte ich sehen, für welche Projekte und Aktivitäten ich mit welchem geplanten Aufwand und in welchem Zeitraum eingeplant bin (meine persönliche Auslastung).
    *   Als JPrise-Mitarbeiter möchte ich meine grundlegenden Skills und Verfügbarkeiten (z.B. Teilzeitmodell, Kernarbeitszeiten – falls relevant für die Planung) in meinem Profil hinterlegen können, damit Projektleiter dies bei der Planung berücksichtigen können.
*   **JPrise-Projektleiter:**
    *   Als JPrise-Projektleiter möchte ich bei der Projektplanung sehen, welche Mitarbeiter mit den benötigten Skills potenziell verfügbar sind.
    *   Als JPrise-Projektleiter möchte ich JPrise-Mitarbeiter für bestimmte Zeiträume auf Projekte, Teilprojekte oder Arbeitspakete mit einem geplanten Aufwand (z.B. in PT oder %) einplanen können.
    *   Als JPrise-Projektleiter möchte ich eine Übersicht über die geplante Auslastung der Mitglieder meines Projektteams sehen, um Über- oder Unterlastungen frühzeitig zu erkennen.
    *   Als JPrise-Projektleiter möchte ich die An- und Abwesenheitskalender meiner Projektteam-Mitglieder einsehen können (unter Berücksichtigung von Datenschutz), um dies bei der Zeitplanung von Aktivitäten zu berücksichtigen.
    *   Als JPrise-Projektleiter möchte ich Warnungen erhalten, wenn ich versuche, einen Mitarbeiter einzuplanen, der bereits voll ausgelastet ist oder im geplanten Zeitraum abwesend ist.
*   **JPrise-Ressourcenmanager/Abteilungsleiter (falls separate Rolle, sonst Projektleiter mit erweiterten Rechten oder Admin):**
    *   Als JPrise-Ressourcenmanager möchte ich eine projektübergreifende Sicht auf die geplante Auslastung aller oder ausgewählter Gruppen von JPrise-Mitarbeitern (z.B. nach Abteilung, Skill) über einen bestimmten Zeitraum (z.B. nächste 3 Monate) erhalten.
    *   Als JPrise-Ressourcenmanager möchte ich die Verfügbarkeit von Mitarbeitern basierend auf ihren eingetragenen Abwesenheiten und ihrer bereits bestehenden Projektverplanung sehen können.
    *   Als JPrise-Ressourcenmanager möchte ich nach Mitarbeitern mit spezifischen Skills suchen können, um geeignete Ressourcen für neue Projektanfragen zu identifizieren.
    *   Als JPrise-Ressourcenmanager möchte ich Berichte zur Kapazitätsplanung erstellen können (z.B. geplante Auslastung vs. verfügbare Kapazität nach Abteilung/Skill).
    *   Als JPrise-Ressourcenmanager möchte ich Szenarien durchspielen können ("Was-wäre-wenn"-Analysen für die Ressourcenallokation bei neuen Projekten – fortgeschritten).
*   **JPrise-Administrator:**
    *   Als JPrise-Administrator möchte ich globale Einstellungen für die Ressourcenplanung definieren können (z.B. Standardarbeitszeiten, Feiertagskalender).
    *   Als JPrise-Administrator möchte ich Skill-Kataloge verwalten können, die Mitarbeitern und Projekten zugeordnet werden können.
    *   Als JPrise-Administrator möchte ich ggf. die Rolle des "Ressourcenmanagers" mit entsprechenden Berechtigungen konfigurieren und zuweisen können.

### 6.6. Reporting & Auswertungen

Dieser Bereich ist entscheidend, um Transparenz zu schaffen, fundierte Entscheidungen zu treffen und den Projekt- und Unternehmenserfolg zu steuern. Die Berichte sollten exportierbar sein (z.B. PDF, CSV, Excel).

*   **Dashboards (Rollenbasiert):**
    *   **Für JPrise-Projektleiter:**
        *   Als JPrise-Projektleiter möchte ich ein Projekt-Dashboard sehen, das mir auf einen Blick den Gesamtstatus meiner Projekte anzeigt:
            *   Übersicht über Projektphasen/Status (z.B. Ampelsystem für Zeit, Budget, Umfang).
            *   Anstehende Fristen und Meilensteine.
            *   Kürzlich abgeschlossene Aktivitäten/Ergebnisse.
            *   Offene Freigaben (sowohl Projektergebnisse als auch Tätigkeitsnachweise).
            *   **Kern-EVA-Kennzahlen (CPI, SPI) auf Projektebene.**
            *   Budgetverbrauch (Plan vs. Ist).
    *   **Für JPrise-Mitarbeiter:**
        *   Als JPrise-Mitarbeiter möchte ich ein persönliches Dashboard mit meinen aktuellen Aufgaben, anstehenden Fälligkeiten und dem Status meiner eingereichten Zeitnachweise sehen.
    *   **Für Kunden:**
        *   Als Kunde möchte ich ein Projekt-Dashboard sehen, das mir den Fortschritt der für mich relevanten Projekte visualisiert (freigegebene Informationen wie Gesamtfortschritt, nächste wichtige Meilensteine, Status von Freigaben, die mich betreffen).
    *   **Für JPrise-Management/Ressourcenmanager:**
        *   Als JPrise-Management/Ressourcenmanager möchte ich ein globales Dashboard mit unternehmensweiten Kennzahlen sehen:
            *   Anzahl aktiver Projekte, Projekte nach Status.
            *   Gesamtauslastung der Mitarbeiter.
            *   Performance-Indikatoren über alle Projekte hinweg (z.B. durchschnittlicher CPI/SPI).
*   **Projektspezifische Berichte:**
    *   **JPrise-Projektleiter & Management:**
        *   **Earned Value Analyse (EVA) Bericht:**
            *   Als Nutzer möchte ich für ein ausgewähltes Projekt (und optional für Teilprojekte/Arbeitspakete) eine detaillierte EVA über die Zeitachse generieren können, die PV, EV, AC grafisch und tabellarisch darstellt.
            *   Als Nutzer möchte ich die abgeleiteten Kennzahlen CV, SV, CPI, SPI sowie die Prognosekennzahlen EAC, ETC, VAC im Bericht sehen.
            *   Als Nutzer möchte ich die Datengrundlage für die EVA-Berechnung nachvollziehen können (z.B. wie der Fortschrittsgrad ermittelt wurde – 0/100, %-completed, Meilensteinbasiert etc.).
        *   **Projektfortschrittsbericht:**
            *   Als Nutzer möchte ich einen Bericht über den Fortschritt von Aktivitäten, Ergebnissen und Meilensteinen (Plan vs. Ist Termine, Fertigstellungsgrad) erhalten.
        *   **Aufwandsbericht (Plan/Ist/Forecast):**
            *   Als Nutzer möchte ich einen Bericht sehen, der geplante Aufwände, erfasste Ist-Aufwände und ggf. einen Forecast für den Restaufwand pro Projekt, Teilprojekt, Arbeitspaket und Aktivität gegenüberstellt.
        *   **Kostenbericht (falls Kosten direkt erfasst oder aus Stundensätzen ableitbar):**
            *   Als Nutzer möchte ich einen Bericht über geplante Kosten, Ist-Kosten (basierend auf erfassten Zeiten und Stundensätzen) und die Kostenabweichung sehen.
            *   Als Nutzer möchte ich eine Auswertung erhalten, die die Kosten für die Erstellung spezifischer Ergebnisse oder die Durchführung von Arbeitspaketen aufzeigt ("Was kostet die Erstellung von Ergebnis X?").
        *   **Bericht über Freigabestatus:**
            *   Als Nutzer möchte ich einen Bericht über den Status aller Freigaben (Projektergebnisse und Tätigkeitsnachweise) für ein Projekt sehen (wer muss was freigeben, was ist überfällig?).
*   **Ressourcenbezogene Berichte:**
    *   **JPrise-Projektleiter & Management/Ressourcenmanager:**
        *   **Mitarbeiterauslastungsbericht:**
            *   Als Nutzer möchte ich einen Bericht über die geplante und tatsächliche Auslastung einzelner Mitarbeiter oder Teams über einen wählbaren Zeitraum sehen (z.B. in PT, %, Stunden).
            *   Als Nutzer möchte ich sehen, welche Mitarbeiter in welchem Zeitraum mit wie vielen PT/Stunden Aufwand für welche Projekte verplant sind.
            *   Als Nutzer möchte ich Über- und Unterkapazitäten identifizieren können.
        *   **Bericht zu erfassten Zeiten:**
            *   Als Nutzer möchte ich detaillierte Berichte über die von Mitarbeitern erfassten Zeiten generieren können, filterbar nach Mitarbeiter, Projekt, Zeitraum, Aktivität. (Nützlich für interne Kontrollen und Abrechnungsgrundlagen).
*   **Kundenbezogene Berichte:**
    *   **JPrise-Projektleiter & Kunde (mit Berechtigung):**
        *   **Tätigkeitsnachweis-Bericht (für Abrechnung):**
            *   Als Nutzer möchte ich einen zusammenfassenden Bericht aller vom Kunden freigegebenen Tätigkeitsnachweise für einen bestimmten Zeitraum und ein bestimmtes Projekt generieren können, der als Grundlage für die Rechnungsstellung dient.
        *   **Kunden-Projektstatusbericht (vereinfacht):**
            *   Als JPrise-Projektleiter möchte ich einen für den Kunden aufbereiteten Statusbericht generieren können, der die wichtigsten Fortschritte, erreichte Meilensteine und nächste Schritte zusammenfasst.
*   **Administrator-Berichte:**
    *   **JPrise-Administrator:**
        *   **Audit-Log Bericht:**
            *   Als Administrator möchte ich Berichte aus den Audit-Logs ziehen können (z.B. Nutzeraktivitäten, Änderungen an kritischen Daten).
        *   **Systemnutzungsbericht:**
            *   Als Administrator möchte ich Berichte über die allgemeine Systemnutzung erhalten (z.B. Anzahl aktiver Nutzer, erstellte Projekte/Aufgaben im Zeitverlauf).

---

## 7. Nicht-funktionale Anforderungen

Diese Anforderungen beschreiben, *wie gut* das System seine Funktionen ausführt, im Gegensatz zu *was* es tut. Sie sind entscheidend für die Benutzererfahrung und die langfristige Wartbarkeit.

*   **Performance:**
    *   Die Anwendung muss schnell reagieren. Kernansichten und Interaktionen (z.B. Laden von Projektdashboards, Öffnen von Aufgabendetails) sollten idealerweise innerhalb von 2-3 Sekunden abgeschlossen sein.
    *   Die Zeiterfassung und das Speichern von Daten müssen ohne spürbare Verzögerung erfolgen.
    *   Berichte, insbesondere komplexe wie die EVA oder Auslastungsanalysen, müssen innerhalb einer akzeptablen Zeit generiert werden (ggf. mit Hinweis, wenn die Generierung länger dauert).
*   **Sicherheit:**
    *   **Authentifizierung & Autorisierung:** Sichere Benutzerauthentifizierung über Supabase (Passwortrichtlinien, Schutz vor Brute-Force). Strikte rollenbasierte Zugriffskontrolle (RBAC) auf alle Daten und Funktionen, sodass Nutzer nur sehen und bearbeiten können, was ihrer Rolle und Projektzugehörigkeit entspricht.
    *   **Datenschutz (DSGVO-Konformität):** Alle personenbezogenen Daten müssen gemäß DSGVO und den spezifischen Anforderungen der Sparkassen Finanzgruppe behandelt werden (Datenminimierung, Zweckbindung, Löschkonzepte).
    *   **Datenverschlüsselung:** Verschlüsselung von Daten bei der Übertragung (HTTPS/TLS) und im Ruhezustand (at-rest encryption in Supabase/Datenbank).
    *   **Schutz vor gängigen Web-Schwachstellen:** Maßnahmen gegen XSS, CSRF, SQL-Injection, unsichere direkte Objektreferenzen etc. Regelmäßige Sicherheitstests (Penetrationstests) sollten in Betracht gezogen werden.
    *   **Audit-Logging:** Wichtige sicherheitsrelevante Ereignisse (Logins, fehlgeschlagene Logins, administrative Änderungen, Freigaben) müssen protokolliert werden.
*   **Skalierbarkeit:**
    *   Die Architektur (insbesondere mit Supabase als Backend-as-a-Service) sollte so gewählt werden, dass sie mit einer steigenden Anzahl von Nutzern, Projekten und Datenmengen wachsen kann, ohne signifikante Performanceeinbußen.
    *   Die Anwendung muss in der Lage sein, eine erwartete Anzahl gleichzeitiger Nutzer (z.B. [X] JPrise-Mitarbeiter und [Y] Kunden-Nutzer während der Spitzenzeiten) zu bewältigen.
*   **Benutzerfreundlichkeit (Usability) & Barrierefreiheit (Accessibility):**
    *   **Intuitive Navigation:** Klare, konsistente und leicht verständliche Menüführung und Interaktionsmuster.
    *   **Geringe Einarbeitungszeit:** Neue Nutzer sollten sich schnell zurechtfinden und die Kernfunktionen ohne umfangreiche Schulung nutzen können.
    *   **Fehlertoleranz:** Aussagekräftige Fehlermeldungen und die Möglichkeit, Fehleingaben einfach zu korrigieren.
    *   **Barrierefreiheit:** Die Anwendung sollte grundlegende WCAG 2.1 Richtlinien (Level AA) anstreben, um die Nutzbarkeit für Menschen mit Behinderungen zu gewährleisten (z.B. Tastaturbedienbarkeit, ausreichende Kontraste, semantisches HTML).
*   **Zuverlässigkeit & Verfügbarkeit:**
    *   Hohe Verfügbarkeit der Anwendung (z.B. Ziel > 99,8% Uptime). Supabase bietet hier bereits eine gute Grundlage.
    *   Regelmäßige Backups der Datenbank und ein Notfallwiederherstellungsplan.
*   **Wartbarkeit & Erweiterbarkeit:**
    *   Gut strukturierter, dokumentierter und testbarer Code.
    *   **Modularer Aufbau:** Insbesondere die Komponenten für Benutzerverwaltung, Login und Berechtigungen sollen so konzipiert sein, dass sie potenziell in einem zukünftigen Unternehmensportal der JPrise Unternehmensberatung GmbH wiederverwendet oder als separate Services angebunden werden können.
    *   Einfache Möglichkeit, neue Funktionen hinzuzufügen oder bestehende anzupassen.
*   **Browser-Kompatibilität:**
    *   Unterstützung der jeweils aktuellen und vorherigen Hauptversionen der gängigen Desktop-Browser (Chrome, Firefox, Safari, Edge).
    *   Gute Darstellung und Funktionalität auf mobilen Browsern (siehe Kapitel 8: Design-Anforderungen).
*   **Datenintegrität:**
    *   Sicherstellung, dass Daten korrekt und konsistent gespeichert und verarbeitet werden (z.B. bei Berechnungen für EVA, Aggregation von Aufwänden).

---

## 8. Design-Anforderungen (Responsive Design & Dark Mode)

Das Design von "JPro" soll modern, professionell, benutzerfreundlich und auf die Bedürfnisse der Zielgruppe (JPrise Unternehmensberatung GmbH und deren Kunden aus der Sparkassen Finanzgruppe) zugeschnitten sein.

### 8.1. Responsive Design

*   **Responsive Design mit Fokus auf Desktop-Nutzung:** Obwohl die Hauptnutzung auf Desktop-Systemen erwartet wird und hier eine optimale User Experience im Vordergrund steht, muss das Design von Grund auf responsiv konzipiert sein, um eine gute Bedienbarkeit auf verschiedenen Bildschirmgrößen (Desktop, Tablet, Smartphone) sicherzustellen. Ein "Mobile-First"-Denkansatz kann dabei helfen, Kernfunktionen auch mobil schlank und effizient zu gestalten.
*   **Flüssiges Layout (Fluid Grid):** Inhalte und Layout-Elemente passen sich dynamisch an die verfügbare Bildschirmbreite an.
*   **Definierte Breakpoints:** Klare Breakpoints für gängige Geräteklassen (Smartphone, Tablet – Hoch- und Querformat, Desktop – verschiedene Breiten) müssen definiert werden, um das Layout entsprechend anzupassen.
*   **Anpassbare Navigation:** Hauptnavigation und kontextbezogene Menüs müssen auf kleinen Bildschirmen touch-freundlich und platzsparend gestaltet sein (z.B. Burger-Menü, Off-Canvas-Navigation).
*   **Optimierte Bilder und Medien:** Bilder und andere Medieninhalte werden in passenden Größen und Formaten ausgeliefert, um Ladezeiten zu minimieren und die Darstellung auf verschiedenen Geräten zu optimieren.
*   **Lesbarkeit:** Schriftgrößen, Zeilenabstände und Kontraste sind auf allen Geräten und in beiden Modi (Hell/Dunkel) gut lesbar und erfüllen Barrierefreiheitsstandards.
*   **Touch-Freundlichkeit:** Interaktive Elemente (Buttons, Links, Formularfelder) haben eine ausreichende Größe und genügend Abstand für eine komfortable Touch-Bedienung auf mobilen Geräten.
*   **Konsistente User Experience (UX):** Das grundlegende Erscheinungsbild, die Interaktionsmuster und die User Experience sind über alle Geräteklassen und Farbschemata hinweg konsistent.

### 8.2. Dark Mode (Dunkelmodus)

JPro muss einen optionalen Dark Mode anbieten, der folgende Anforderungen erfüllt:

*   **System-/Technische Anforderungen:**
    *   **Theme-Switching:** Der Nutzer muss manuell zwischen einem hellen und einem dunklen Theme wechseln können (z.B. über einen Schalter in den Benutzereinstellungen oder im Hauptmenü).
    *   **Persistenz der Nutzerpräferenz:** Die gewählte Theme-Einstellung (hell/dunkel) muss für den Nutzer gespeichert werden (z.B. über `localStorage` oder in den User-Settings in der Datenbank via Supabase), sodass sie bei erneuten Besuchen erhalten bleibt.
    *   **OS-abhängige Einstellung (Optional, aber empfohlen):** Die Anwendung sollte idealerweise die Systemeinstellung des Nutzers für den Dark Mode erkennen und initial übernehmen können (CSS `prefers-color-scheme`). Der Nutzer sollte dies jedoch manuell überschreiben können.
*   **Design- und Usability-Anforderungen (basierend auf HCI, Barrierefreiheit, UI/UX):**
    *   **Barrierefreiheit & Lesbarkeit:**
        *   **Ausreichende Kontraste:** Die Farbpalette des Dark Mode muss die WCAG-Kontrastrichtlinien (mindestens AA) für Text und UI-Elemente auf dunklem Hintergrund erfüllen.
        *   **Vermeidung von Augenermüdung:** Helle Texte auf sehr dunklen (nahezu schwarzen) Hintergründen können bei längerer Nutzung anstrengend sein. Es sollten gedämpfte Dunkelgrautöne anstelle von reinem Schwarz (`#000000`) für Hintergründe bevorzugt werden, um den Kontrast abzumildern und Blendung zu reduzieren.
        *   **Optimale Lesbarkeit:** Schriftstärken und -farben sind so zu wählen, dass sie auch bei schwachem Umgebungslicht gut lesbar sind.
    *   **Visuelles Design & Konsistenz:**
        *   **Dedizierte Farbpalette:** Es muss eine spezifische Farbpalette für den Dark Mode entwickelt werden, die nicht einfach nur eine Invertierung des hellen Themes ist. Dies beinhaltet Akzentfarben, Statusfarben (für z.B. Warnungen, Erfolgsmeldungen) und Farben für UI-Komponenten.
        *   **Harmonisierung:** Text-, Icon-, Rahmen- und Hintergrundfarben müssen im Dark Mode harmonisch aufeinander abgestimmt sein.
        *   **Konsistenz zum Light Mode:** Wichtige UI-Elemente und die Informationshierarchie sollten im Dark Mode ähnlich wahrgenommen werden wie im Light Mode, um die Wiedererkennbarkeit zu gewährleisten.
        *   **Zustände von Elementen:** Fokus-, Hover-, aktive und deaktivierte Zustände von interaktiven Elementen müssen auch im Dark Mode klar erkennbar und unterscheidbar sein.
    *   **Visuelle Ergonomie & Nutzererfahrung:**
        *   **Reduktion von Blendung:** Der Dark Mode soll die allgemeine Lichtemission des Bildschirms reduzieren.
        *   **Kein reines Weiß für Text:** Vermeidung von reinem Weiß (`#FFFFFF`) für längere Textblöcke auf dunklem Hintergrund; stattdessen leicht abgetönte Weiß- oder Hellgrautöne verwenden, um Überstrahlung zu minimieren.
        *   **Einsatz weicher Farbverläufe (optional):** Wo Farbverläufe eingesetzt werden, sollten sie auch im Dark Mode stimmig wirken und nicht zu harten Übergängen führen.
        *   **Nutzerzentriert:** Der Dark Mode ist eine Option, die der Nutzer wählen kann, und wird nicht aufgezwungen.

### 8.3. Allgemeine UI/UX-Prinzipien

*   **Klarheit und Einfachheit:** Vermeidung von überladenen Oberflächen. Wichtige Informationen und Aktionen sind leicht auffindbar.
*   **Feedback:** Das System gibt dem Nutzer angemessenes Feedback auf seine Aktionen (z.B. Ladeindikatoren, Erfolgs-/Fehlermeldungen).
*   **Konsistenz:** Einheitliche Verwendung von Farben, Typografie, Icons und Interaktionsmustern über die gesamte Anwendung hinweg.
*   **Effizienz:** Nutzer sollen ihre Ziele mit möglichst wenig Aufwand erreichen können.

---

## 9. Technologie-Stack

Die Auswahl des Technologie-Stacks zielt auf eine moderne, performante und wartbare Anwendung ab, die den Anforderungen an Skalierbarkeit und eine gute Developer Experience gerecht wird.

*   **Frontend:**
    *   **JavaScript-Framework:** **React**
    *   **Styling:** **Tailwind CSS**
    *   **UI-Komponentenbibliothek:** **shadcn/ui**
    *   **State Management (optional, je nach Komplexität):** Zustand, Redux Toolkit oder React Context/useReducer für globales und komplexes State Management.
    *   **Routing:** React Router für client-seitiges Routing.
    *   **Build-Tool:** Vite (für eine schnelle und schlanke SPA-Entwicklung).
*   **Backend & Datenbank:**
    *   **Backend-as-a-Service (BaaS) & Datenbank:** **Supabase**
        *   **Datenbank:** PostgreSQL (als Teil von Supabase)
        *   **Authentifizierung:** Supabase Auth (für E-Mail/Passwort)
        *   **Serverseitige Logik:** Supabase Edge Functions (Deno-basiert) für benötigte benutzerdefinierte Logik.
*   **API-Kommunikation:**
    *   Primär über die von Supabase bereitgestellten Client-Bibliotheken für den Datenzugriff.
    *   Für benutzerdefinierte serverseitige Logik über Supabase Edge Functions werden RESTful APIs genutzt.
*   **Hosting/Deployment:**
    *   **Frontend:** Vercel (ideal für React/Vite-Anwendungen, bietet hervorragende CI/CD-Integration mit GitHub).
    *   **Backend (Supabase):** Supabase Cloud Hosting.
*   **Entwicklungstools & Sonstiges:**
    *   **Versionierung:** **Git** mit **GitHub**.
    *   **Package Manager:** **npm** (Node Package Manager).
    *   **Testing:** Jest, React Testing Library, Cypress (für Unit-, Integrations- und End-to-End-Tests).
    *   **CI/CD:** **GitHub Actions**.
    *   **Dokumentation (Code):** **JSDoc**.

---

## 10. Release-Kriterien (MVP - Minimum Viable Product)

Das MVP von "JPro" muss stabil laufen und folgende Kernfunktionalitäten umfassen, um einen ersten Mehrwert für JPrise-Mitarbeiter und deren Kunden zu bieten und erste Erfahrungen im produktiven Einsatz zu sammeln:

*   **10.1. Benutzerverwaltung & Authentifizierung (via Supabase):**
    *   Sichere Registrierung für JPrise-Mitarbeiter und Kunden-Ansprechpartner (E-Mail/Passwort).
    *   Sicherer Login und Logout.
    *   Passwort-Reset-Funktion.
    *   Grundlegende Profilverwaltung (Name).
    *   Admin-Interface (ggf. direkt in Supabase oder minimales UI) zur Verwaltung von Benutzern und Zuweisung von grundlegenden Rollen (z.B. "JPrise-Mitarbeiter", "JPrise-Projektleiter", "Kunde", "Kunden-Freigeber").
*   **10.2. Kern-Projektmanagement (mit detaillierter Hierarchie):**
    *   Erstellung von Projekten durch JPrise-Projektleiter (mit Titel, Kunde, Beschreibung, Start-/Enddatum).
    *   **Möglichkeit, innerhalb von Projekten eine Struktur aus Teilprojekten, darunter Arbeitspaketen und darunter Aktivitäten anzulegen und zu verwalten.**
    *   Projektübersicht (inkl. der hierarchischen Struktur) für JPrise-Mitarbeiter und (eingeschränkt, je nach Freigabe) für zugewiesene Kunden.
    *   Zuweisung von JPrise-Mitarbeitern und Kunden-Ansprechpartnern zu Projekten.
*   **10.3. Kern-Aktivitätenmanagement (als Teil der Hierarchie):**
    *   Erstellung von Aktivitäten innerhalb von Arbeitspaketen (Titel, Beschreibung, verantwortliche Person, Fälligkeitsdatum, Status).
    *   Definition von erwarteten Ergebnissen pro Aktivität.
    *   Änderung des Aktivitätsstatus (z.B. Offen, In Arbeit, Erledigt).
    *   Kommentarfunktion zu Aktivitäten für die Kollaboration.
    *   Dateianhänge zu Aktivitäten/Ergebnissen.
*   **10.4. Kern-Zeiterfassung & Tätigkeitsnachweise (inkl. Kundenfreigabe):**
    *   Möglichkeit für JPrise-Mitarbeiter, Arbeitszeiten auf Projekte, Arbeitspakete oder Aktivitäten zu buchen (Datum, Dauer, Beschreibung).
    *   Einreichen von Tätigkeitsnachweisen (gesammelte Zeitbuchungen für einen Zeitraum).
    *   Möglichkeit für Kunden (Rolle "Kunden-Freigeber"), eingereichte Tätigkeitsnachweise einzusehen, freizugeben oder abzulehnen (mit Begründung).
    *   Sichtbarkeit des Freigabestatus für JPrise-Mitarbeiter und Projektleiter.
*   **10.5. Grundlegendes Reporting/Übersichten:**
    *   Dashboard für JPrise-Mitarbeiter mit ihren Aktivitäten und dem Status ihrer Zeitnachweise.
    *   Projektübersicht mit grundlegenden Statusinformationen (die detaillierte Hierarchie darstellend).
    *   Übersicht der erfassten Zeiten für Projektleiter (pro Projekt/Arbeitspaket/Aktivität).
    *   Übersicht der zur Freigabe stehenden und freigegebenen/abgelehnten Tätigkeitsnachweise für Kunden.
*   **10.6. Responsive Design & Dark Mode:**
    *   Die Anwendung muss auf Desktop-Geräten voll funktionsfähig und gut bedienbar sein (Fokus auf Desktop-Nutzung für komplexe Aufgaben).
    *   Die Kernfunktionen (z.B. Aktivitäten einsehen/Status ändern, Zeiten freigeben) müssen auch auf Tablets und Smartphones nutzbar sein (responsive Darstellung).
    *   Ein funktionierender Dark Mode (manuell umschaltbar und Präferenz gespeichert) muss vorhanden sein.
*   **10.7. Sicherheit & Stabilität:**
    *   Grundlegende Sicherheitsmaßnahmen (wie in Kapitel 7 beschrieben) sind implementiert.
    *   Die MVP-Funktionen laufen stabil und zuverlässig.

---

## 11. Zukünftige Überlegungen (Post-MVP)

Nach dem erfolgreichen Launch des MVP von "JPro" und basierend auf Nutzerfeedback sowie strategischen Überlegungen könnten folgende Funktionen und Erweiterungen in zukünftigen Releases entwickelt werden:

*   **11.1. Erweitertes Reporting & Analyse:**
    *   **Implementierung der vollständigen Earned Value Analyse (EVA):** Mit allen Kennzahlen (PV, EV, AC, CV, SV, CPI, SPI, EAC, ETC, VAC) und grafischen Darstellungen auf Projekt-, Teilprojekt- und Arbeitspaketebene.
    *   **Detaillierte Kostenberichte:** Erfassung oder Ableitung von Kosten (z.B. über Stundensätze pro Mitarbeiter/Rolle), Budgetverfolgung, Kosten für Ergebnisse.
    *   **Konfigurierbare Dashboards:** Möglichkeit für Nutzer, ihre Dashboards stärker zu personalisieren.
    *   **Exportfunktionen für alle Berichte** (PDF, CSV, Excel), falls im MVP noch nicht vollumfänglich.
*   **11.2. Erweiterte Ressourcenplanung & -management:**
    *   **Detaillierter An-/Abwesenheitskalender für Mitarbeiter** (Urlaub, Krankheit, Fortbildung).
    *   **Projektübergreifende Auslastungsansichten für Ressourcenmanager** (grafisch und tabellarisch).
    *   **Skill-Management:** Erfassung von Mitarbeiter-Skills und Suche nach verfügbaren Mitarbeitern mit spezifischen Skills.
    *   **Kapazitätsplanung und "Was-wäre-wenn"-Szenarien.**
*   **11.3. Erweiterte Projektmanagement-Funktionen:**
    *   **Gantt-Diagramm-Ansicht:** Vollständige Gantt-Ansicht mit Abhängigkeiten, kritischem Pfad, Baseline-Vergleich.
    *   **Risikomanagement-Modul:** Erfassung, Bewertung und Verfolgung von Projektrisiken.
    *   **Issue-Tracking:** Separate Erfassung und Verfolgung von Problemen/Issues im Projekt.
    *   **Projektvorlagen:** Erstellung und Nutzung von detaillierten Projektvorlagen (inkl. Struktur, Standardaktivitäten, Rollen).
    *   **KI-gestützte Projektstruktur-Erkennung aus Dokumenten:** Das innovative Feature, eine Projektstruktur aus hochgeladenen Dokumenten vorzuschlagen.
    *   **Budgetplanung und -verfolgung im Detail** innerhalb der Projekte.
    *   **Abhängigkeiten zwischen Aufgaben/Aktivitäten** (falls im MVP noch nicht vollumfänglich).
*   **11.4. Erweiterte Kollaboration & Kommunikation:**
    *   **Dedizierte Diskussionsforen pro Projekt oder Thema.**
    *   **Verbesserte Benachrichtigungszentrale** mit feingranularer Konfiguration.
    *   **Integrationen mit Drittanbieter-Tools:**
        *   Kalender-Integrationen (z.B. Outlook, Google Calendar).
        *   Kommunikationstools (z.B. Microsoft Teams, Slack).
        *   Dokumentenmanagement-Systeme (z.B. SharePoint, Google Drive – falls über Supabase Storage hinausgehend benötigt).
*   **11.5. Benutzerverwaltung & Administration:**
    *   **Erweiterte Rollen- und Rechteverwaltung:** Noch feingranularere Einstellungsmöglichkeiten für Zugriffsrechte.
    *   **Self-Service für Kunden-Admins:** Möglichkeit für Kunden, eigene Nutzer innerhalb ihres Instituts zu verwalten (bis zu einem gewissen Grad).
    *   **OAuth-Integrationen für Login:** (z.B. Login mit Microsoft- oder Google-Konto).
*   **11.6. Mobile Optimierung & Native Apps:**
    *   **Weitergehende Optimierung der mobilen Web-Experience.**
    *   **Entwicklung nativer Mobile Apps (iOS/Android)** für eine noch bessere mobile User Experience, falls die Nachfrage besteht.
*   **11.7. Weitere mögliche Funktionen:**
    *   **Kundenportal-Erweiterungen:** Zusätzliche für Kunden relevante Informationen oder Self-Service-Funktionen.
    *   **Gamification-Elemente** (optional, zur Steigerung der Nutzerinteraktion).
    *   **Mehrsprachigkeit.**

Die Priorisierung dieser Post-MVP-Features sollte auf Basis von Nutzerfeedback, Geschäftszielen der JPrise Unternehmensberatung GmbH und dem Aufwand für die Implementierung erfolgen.

---

## 12. Offene Fragen

Dieses Dokument dient als Grundlage für die Entwicklung von "JPro". Während des Prozesses und auch für die weitere Planung gibt es jedoch noch einige Punkte, die geklärt oder zu einem späteren Zeitpunkt entschieden werden müssen:

*   **Spezifische SLAs (Service Level Agreements):** Gibt es konkrete, messbare SLAs (z.B. für Antwortzeiten des Supports, Verfügbarkeit über die allgemeinen Ziele hinaus), die mit Kunden der Sparkassen Finanzgruppe vereinbart werden oder intern gelten sollen?
*   **Detaillierungsgrad der initialen Kunden-Schulung/Onboarding:** Welcher Umfang an Schulungsmaterialien oder direkten Onboarding-Sessions ist für JPrise-Mitarbeiter und insbesondere für die Kunden-Nutzer (v.a. Freigeber) für das MVP geplant?
*   **Monetarisierungsmodell (falls relevant über die reine interne Nutzung/Kundenbindung hinaus):** Gibt es Überlegungen zu Lizenzmodellen oder Kosten, die (zukünftig) für die Nutzung von JPro durch Kundeninstitute anfallen könnten?
*   **Prozess für Feature-Requests und Bug-Reporting nach dem Launch:** Wie sollen Nutzerfeedback, neue Feature-Wünsche und Fehlerberichte nach dem MVP-Launch gesammelt, priorisiert und bearbeitet werden?
*   **Datenmigration von Altsystemen:** Gibt es bestehende Projektmanagement-Tools oder Datenquellen (z.B. Excel-Listen für Projekte, Zeiterfassungen), aus denen Daten in das neue JPro-System migriert werden müssen? Wenn ja, welcher Umfang und welche Komplexität ist zu erwarten?
*   **Definition "Fertigstellungsgrad" für EVA:** Wie genau soll der Fortschrittsgrad für Projekte/Arbeitspakete/Aktivitäten für die (spätere) Earned Value Analyse ermittelt werden (z.B. 0/100-Methode, feste Prozentsätze bei Meilensteinerreichung, Schätzung durch Projektleiter)? Dies muss für eine konsistente EVA definiert werden.
*   **Stundensätze für Kostenkalkulation (Post-MVP):** Wenn detaillierte Kostenberichte (Post-MVP) gewünscht sind, müssen Mechanismen zur Hinterlegung und Verwaltung von internen und externen Stundensätzen (pro Mitarbeiter, Rolle etc.) konzipiert werden.
*   **Umgang mit "Gast-Nutzern" oder temporären Projektbeteiligten:** Gibt es Szenarien, in denen externe Dritte (die nicht direkt Mitarbeiter der Kundeninstitute sind) temporär Zugriff auf bestimmte Projektbereiche benötigen? Wie würde deren Authentifizierung und Berechtigungssteuerung aussehen?
*   **Marketing- und Kommunikationsplan für den Rollout:** Wie wird JPro intern bei JPrise und extern bei den Kundeninstituten vorgestellt und eingeführt?