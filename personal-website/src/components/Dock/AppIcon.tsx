// Stylesheet import
import styles from "./AppIcon.module.css";

// React imports
import { Dispatch, useState } from "react";

// Next imports
import Image from "next/image";

interface Props {
    imageSrc: string;
    altText: string;
    activeApp: boolean;
    setActiveApp: Dispatch<React.SetStateAction<boolean>>;
}

export default function AppIcon({
    imageSrc,
    altText,
    activeApp,
    setActiveApp,
}: Props) {
    const [clicked, setClicked] = useState(false);

    return (
        <div className={styles.appIcon}>
            <figure
                onClick={() => {
                    setActiveApp(true);
                }}
                onMouseDown={() => {
                    setClicked(true);
                }}
                onMouseUp={() => {
                    setClicked(false);
                }}
                onMouseLeave={() => {
                    setClicked(false);
                }}
                className={styles.iconContainer}
                style={{
                    height: "100%",
                    aspectRatio: "1/1",
                    position: "relative",
                }}
            >
                <Image
                    alt={altText}
                    src={imageSrc}
                    fill={true}
                    priority={true}
                />
                <figure
                    className={styles.appIconOverlay}
                    style={{
                        backgroundColor: clicked ? "#0000008c" : "",
                    }}
                ></figure>
            </figure>
            <figure
                className={styles.activeDot}
                style={{
                    opacity: activeApp ? "100%" : "0%",
                }}
            ></figure>
        </div>
    );
}
