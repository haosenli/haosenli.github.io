"use client"; // Consider if it is possible for this to be in AppDock instead.

import { Dispatch, useState } from "react";
import styles from "./page.module.css";

// Components
import AppIcons from "../components/AppIcons";
import AppDock from "../components/AppDock";
import Desktop from "../components/Desktop";

interface activeApps {
    [key: string]: boolean;
}
interface setActiveApps {
    [key: string]: Dispatch<React.SetStateAction<boolean>>;
}

export default function Home() {
    // React State Hooks for each AppIcon
    const [activeAppNotes, setActiveAppNotes] = useState(false);

    const activeApps: activeApps = {
        notes: activeAppNotes,
    };
    const setActiveApps: setActiveApps = {
        notes: setActiveAppNotes,
    };

    return (
        <main className={styles.main}>
            <Desktop />
            <AppDock>
                <AppIcons
                    activeApps={activeApps}
                    setActiveApps={setActiveApps}
                />
            </AppDock>
        </main>
    );
}