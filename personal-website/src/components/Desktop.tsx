// Stylesheet import
import styles from "./Desktop.module.css";

// React imports
import { MouseEvent, useState } from "react";

// Component imports
import Notes from "../components/Apps/Notes";

export default function Desktop() {
    // Track app focus

    //
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [mouseDownX, setMouseDownX] = useState(0);
    const [mouseDownY, setMouseDownY] = useState(0);
    const [dragEnable, setDragEnable] = useState(false);
    const [navClick, setNavClick] = useState(false);

    const handleMouseDown = (e: MouseEvent) => {
        setMouseDownX(e.clientX - x);
        setMouseDownY(e.clientY - y);
        setDragEnable(true);
    };
    const handleMouseMove = (e: MouseEvent) => {
        if (dragEnable && !navClick) {
            setX(e.clientX - mouseDownX);
            setY(e.clientY - mouseDownY);
        }
    };
    const handleMouseUp = () => {
        setNavClick(false);
        setDragEnable(false);
    };
    // Add touch handler too

    return (
        <>
            <div
                className={styles.desktop}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <Notes
                    x={x}
                    y={y}
                    appFocus={true}
                    handleMouseDown={handleMouseDown}
                    setNavClick={setNavClick}
                />
            </div>
        </>
    );
}
