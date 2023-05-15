// Stylesheet import
import styles from "./NavButton.module.css";

// React import
import { Dispatch, MouseEvent, useState } from "react";

// Next import
import Image from "next/image";

interface Props {
    isActive: boolean;
    displayIcon: boolean;
    clickColor: string;
    activeColor: string;
    inactiveColor: string;
    altText: string;
    iconSrc: string;
    iconPadding?: string;
    scale?: string;
    rotate?: string;
    handleClick: (e: MouseEvent) => void;
    setNavClick: Dispatch<React.SetStateAction<boolean>>;
}

export default function NavButton({
    isActive,
    displayIcon,
    clickColor,
    activeColor,
    inactiveColor,
    altText,
    iconSrc,
    iconPadding,
    scale,
    rotate,
    handleClick,
    setNavClick,
}: Props) {
    const [buttonClick, setButtonClick] = useState(false);
    let scaleStyle: string = scale ? `scale(${scale})` : " ";
    let rotateStyle: string = rotate ? `rotate(${rotate})` : " ";

    return (
        <button
            className={styles.navButton}
            style={{
                backgroundColor:
                    isActive || displayIcon
                        ? buttonClick
                            ? clickColor
                            : activeColor
                        : inactiveColor,
            }}
            onClick={handleClick}
            // Disable dragging on buttons
            onMouseDown={(e: MouseEvent) => {
                e.preventDefault();
                setNavClick(true);
                setButtonClick(true);
            }}
            onMouseUp={() => {
                setButtonClick(false);
            }}
            onMouseLeave={() => {
                setButtonClick(false);
            }}
        >
            <Image
                alt={altText}
                src={iconSrc}
                fill={true}
                style={{
                    padding: iconPadding ? iconPadding : "0",
                    transitionDuration: "0.075s",
                    opacity: displayIcon ? "65%" : "0%",
                    transform: scaleStyle + rotateStyle,
                }}
            />
        </button>
    );
}
