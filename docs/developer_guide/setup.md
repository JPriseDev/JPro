# Entwicklerhandbuch: JPro Setup

Dieses Dokument beschreibt die Schritte zur Einrichtung der Entwicklungsumgebung für das JPro-Projekt.

## Inhaltsverzeichnis

1.  [Voraussetzungen](#voraussetzungen)
2.  [Klonen des Repositories](#klonen-des-repositories)
3.  [Installation der Abhängigkeiten](#installation-der-abhängigkeiten)
4.  [Einrichtung der Umgebungsvariablen](#einrichtung-der-umgebungsvariablen)
5.  [Datenbank-Setup (Supabase)](#datenbank-setup-supabase)
6.  [Starten der Entwicklungsumgebung](#starten-der-entwicklungsumgebung)
7.  [Wichtige Projekt-Skripte](#wichtige-projekt-skripte)
8.  [Terminal-basierte Komponenteninstallationen](#terminal-basierte-komponenteninstallationen)

## 1. Voraussetzungen

Stellen Sie sicher, dass die folgenden Werkzeuge auf Ihrem System installiert sind:

-   **Node.js**: Version 18.x oder höher (inklusive npm)
    -   Zur Überprüfung: `node -v` und `npm -v`
-   **Git**: Zur Versionskontrolle
    -   Zur Überprüfung: `git --version`
-   **IDE/Texteditor**: Empfohlen wird VS Code mit den Erweiterungen ESLint, Prettier und Tailwind CSS IntelliSense.

## 2. Klonen des Repositories

Klonen Sie das JPro-Repository von GitHub:

```bash
git clone <Repository-URL>
cd JPro
```

## 7. Wichtige Projekt-Skripte

Die `package.json` enthält weitere nützliche Skripte:

-   `npm run build`: Erstellt eine optimierte Produktionsversion der Anwendung im `dist`-Verzeichnis.
-   `npm run lint`: Führt ESLint aus, um Code-Qualität und Stilprobleme zu überprüfen.
-   `npm run preview`: Startet einen lokalen Server, um die Produktionsbuild-Version (`dist`-Verzeichnis) zu testen.
-   *(Weitere Skripte für Tests etc. werden hier ergänzt.)*

## 8. Terminal-basierte Komponenteninstallationen

Während der Entwicklung, insbesondere bei der Integration von UI-Bibliotheken wie `shadcn/ui` und der Anbindung von Backend-Diensten wie Supabase, müssen bestimmte Pakete manuell über das Terminal installiert werden. Hier ist eine Liste der für das Projekt relevanten Pakete, jeweils mit Installationsanleitung und kurzer Beschreibung:

-   **Supabase Client (`@supabase/supabase-js`)**:
    ```bash
    npm install @supabase/supabase-js
    ```
    *Beschreibung*: Der offizielle JavaScript-Client für die Interaktion mit Supabase. Er ermöglicht Datenbankoperationen, Benutzerauthentifizierung, Zugriff auf Storage und die Nutzung von Edge Functions.

-   **Tailwind CSS Animate (`tailwindcss-animate`)**:
    ```bash
    npm install tailwindcss-animate
    ```
    *Beschreibung*: Ein Plugin für Tailwind CSS, das Utility-Klassen für Animationen bereitstellt. Dieses Paket wird von einigen `shadcn/ui`-Komponenten für Animationseffekte (z.B. Akkordeon, Dropdown-Menüs) benötigt.

-   **Radix UI - Slot (`@radix-ui/react-slot`)**:
    ```bash
    npm install @radix-ui/react-slot
    ```
    *Beschreibung*: Eine Komponente von Radix UI. Sie ermöglicht es, die Eigenschaften einer übergeordneten Komponente auf ihr direktes Kind-Element zu übertragen (Props-Weitergabe). Dies wird beispielsweise von der `Button`-Komponente in `shadcn/ui` verwendet, um Flexibilität beim Rendern des Button-Inhalts zu bieten (z.B. wenn ein Link als Button dargestellt werden soll).

-   **Class Variance Authority (`class-variance-authority`)**:
    ```bash
    npm install class-variance-authority
    ```
    *Beschreibung*: Eine Bibliothek zur Erstellung und Verwaltung von typisierten Varianten für UI-Komponenten. Sie hilft dabei, verschiedene Stile (z.B. `primary`, `secondary`, `destructive`) und Größen (z.B. `sm`, `default`, `lg`) für Komponenten wie Buttons systematisch zu definieren und anzuwenden.

-   **clsx (`clsx`)**:
    ```bash
    npm install clsx
    ```
    *Beschreibung*: Eine kleine und performante Utility-Funktion zum bedingten Zusammenfügen von `className`-Strings in JavaScript/TypeScript. Sie wird oft in Verbindung mit `tailwind-merge` in der `cn`-Hilfsfunktion verwendet.

-   **tailwind-merge (`tailwind-merge`)**:
    ```bash
    npm install tailwind-merge
    ```
    *Beschreibung*: Eine Funktion zum intelligenten Zusammenführen von Tailwind CSS-Klassen. Sie löst Konflikte zwischen Tailwind-Klassen auf, indem sie redundante oder widersprüchliche Klassen entfernt und so für ein sauberes und vorhersagbares Styling sorgt. Wird typischerweise in der `cn`-Hilfsfunktion zusammen mit `clsx` genutzt.

-   **Radix UI - Label (`@radix-ui/react-label`)**:
    ```bash
    npm install @radix-ui/react-label
    ```
    *Beschreibung*: Eine barrierefreie Label-Komponente von Radix UI. Sie dient als Grundlage für die `Label`-Komponente in `shadcn/ui` und stellt sicher, dass Formularfelder korrekt mit ihren Beschriftungen verknüpft sind, was für die Zugänglichkeit (Accessibility) wichtig ist.

**Hinweis**: Wenn Sie `shadcn/ui` Komponenten über den CLI-Befehl `npx shadcn-ui@latest add <komponenten-name>` zu einem Projekt hinzufügen, werden die notwendigen Abhängigkeiten für die jeweilige Komponente oft automatisch mitinstalliert. Die obige Liste dient als Referenz für die Kernabhängigkeiten, die für das manuelle Erstellen von `shadcn/ui`-ähnlichen Komponenten oder für das grundlegende Setup des UI-Frameworks relevant sind, sowie für andere wichtige Projektbibliotheken wie den Supabase-Client.