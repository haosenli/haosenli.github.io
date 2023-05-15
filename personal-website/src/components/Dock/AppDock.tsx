// Stylesheet import
import styles from "./AppDock.module.css";

// React imports
import { Children, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function AppDock({ children }: Props) {
    return (
        <div className={styles.dockContainer}>
            <nav className={styles.appDock}>
                {Children.map(children, (component) => {
                    return component;
                })}
            </nav>
        </div>
    );
}
