import React from "react";

import styles from "./AppDock.module.css";

interface Props {
    appComponents: React.ReactNode[];
}

export default function AppDock({ appComponents }: Props) {
    return (
        <div className={styles.dockContainer}>
            <nav className={styles.appDock}>
                {React.Children.map(appComponents, (component) => {
                    return component;
                })}
            </nav>
        </div>
    );
}
