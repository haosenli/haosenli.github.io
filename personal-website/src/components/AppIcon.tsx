// Stylesheet import
import style from "./AppIcon.module.css";

// React imports
import { Dispatch } from "react";

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
    function handleClick() {
        setActiveApp(true);
    }
    return (
        <div className={style.appIcon}>
            <figure
                onClick={handleClick}
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
            </figure>
            <figure
                className={style.activeDot}
                style={{
                    opacity: activeApp ? "100%" : "0%",
                }}
            ></figure>
        </div>
    );
}
