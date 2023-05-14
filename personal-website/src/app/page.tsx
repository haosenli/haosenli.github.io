"use client"; // Consider if it is possible for this to be in AppDock instead.

import { useState } from "react";
import styles from "./page.module.css";

// Components
import AppIcon from "../components/AppIcon";
import AppDock from "../components/AppDock";

// Apps Components
import Notes from "../components/Apps/Notes";

export default function Home() {
    // React Hooks for each AppIcon
    const [activeAppNotes, setActiveAppNotes] = useState(false);

    // AppIcon Instantiations
    const notesApp: React.ReactNode = (
        <AppIcon
            imageSrc="/app-icons/notes.png"
            altText="Note App that contains information about me"
            activeApp={activeAppNotes}
            setActiveApp={setActiveAppNotes}
        />
    );

    // Add AppIcons to array
    const appComponents: React.ReactNode[] = [notesApp, notesApp];

    // Apps Instantiations

    return (
        <main className={styles.main}>
            <Notes />
            <AppDock appComponents={appComponents} />
        </main>
    );
}
