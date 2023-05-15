// Stylesheet import
import styles from "./Notes.module.css";

// React imports
import { Dispatch, MouseEvent } from "react";

// Component imports
import NavButtons from "../Navigation/NavButtons";

interface Props {
    x: number;
    y: number;
    appFocus: boolean;
    handleMouseDown: (e: MouseEvent) => void;
    setNavClick: Dispatch<React.SetStateAction<boolean>>;
}

export default function Notes({
    x,
    y,
    appFocus,
    handleMouseDown,
    setNavClick,
}: Props) {
    const handleClose = (e: MouseEvent) => {};
    const handleMinimize = (e: MouseEvent) => {};
    const handleMaximize = (e: MouseEvent) => {};
    return (
        <div
            className={styles.notesApp}
            style={{
                userSelect: "none",
                position: "absolute",
                left: x,
                top: y,
            }}
        >
            <div className={styles.flexColumn} onMouseDown={handleMouseDown}>
                <nav className={styles.notesNav}>
                    <div className={styles.navContent}>
                        <div>
                            <NavButtons
                                isActive={appFocus}
                                handleClose={handleClose}
                                handleMinimize={handleMinimize}
                                handleMaximize={handleMaximize}
                                setNavClick={setNavClick}
                            ></NavButtons>
                        </div>
                    </div>
                </nav>
                <div className={styles.notesList}></div>
            </div>
            <div className={styles.flexColumn} onMouseDown={handleMouseDown}>
                <nav className={styles.notesNav}>
                    <div className={styles.navContent}></div>
                </nav>
                <div className={styles.notesContent}></div>
            </div>
        </div>
    );
}
