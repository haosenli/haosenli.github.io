// Stylesheet import
import styles from "./Notes.module.css";

// React imports
import { useState } from "react";

export default function Notes() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [mouseDownX, setMouseDownX] = useState(0);
    const [mouseDownY, setMouseDownY] = useState(0);
    const [dragEnable, setDragEnable] = useState(false);

    const handleMouseDown = (e: any) => {
        setMouseDownX(e.clientX - x);
        setMouseDownY(e.clientY - y);
        setDragEnable(true);
    };
    const handleMouseMove = (e: any) => {
        if (dragEnable) {
            setX(e.clientX - mouseDownX);
            setY(e.clientY - mouseDownY);
        }
    };
    const handleMouseUp = () => {
        setDragEnable(false);
    };
    // Add touch handler too

    return (
        <div
            className={styles.draggableContainer}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div
                style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    userSelect: "none",
                    backgroundColor: "white",
                    color: "black",
                }}
            >
                <nav onMouseDown={handleMouseDown}>
                    Top Nav
                    <p>big</p>
                </nav>
                <div>Body</div>
            </div>
        </div>
    );
}