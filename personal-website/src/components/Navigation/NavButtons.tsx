// Stylesheet import
import styles from "./NavButtons.module.css";

// React import
import { Dispatch, MouseEvent, useState } from "react";

// Component imports
import NavButton from "./NavButton";

interface Props {
    isActive: boolean;
    handleClose: (e: MouseEvent) => void;
    handleMinimize: (e: MouseEvent) => void;
    handleMaximize: (e: MouseEvent) => void;
    setNavClick: Dispatch<React.SetStateAction<boolean>>;
}

export default function NavButtons({
    isActive,
    handleClose,
    handleMinimize,
    handleMaximize,
    setNavClick,
}: Props) {
    // States
    const [displayIcons, setDisplayIcons] = useState(false);

    // Event handlers
    const handleMouseEnter = () => {
        setDisplayIcons(true);
    };
    const handleMouseLeave = () => {
        setDisplayIcons(false);
    };

    // Colors
    const inactiveColor = "#474747";
    const closeColor = "#ed6b5f";
    const closeClickColor = "#f19389";
    const minimizeColor = "#f5be4f";
    const minimizeClickColor = "#fdeb74";
    const maximizeColor = "#63c354";
    const maximizeClickColor = "#87f07d";

    return (
        <nav
            className={styles.navButtonContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <NavButton
                isActive={isActive}
                displayIcon={displayIcons}
                clickColor={closeClickColor}
                activeColor={closeColor}
                inactiveColor={inactiveColor}
                altText={"Close button"}
                iconSrc={"nav-icons/close.svg"}
                scale={"0.9"}
                handleClick={handleClose}
                setNavClick={setNavClick}
            />
            <NavButton
                isActive={isActive}
                displayIcon={displayIcons}
                clickColor={minimizeClickColor}
                activeColor={minimizeColor}
                inactiveColor={inactiveColor}
                altText={"Minimize button"}
                iconSrc={"nav-icons/minimize.svg"}
                scale={"0.9"}
                handleClick={handleMinimize}
                setNavClick={setNavClick}
            />
            <NavButton
                isActive={isActive}
                displayIcon={displayIcons}
                clickColor={maximizeClickColor}
                activeColor={maximizeColor}
                inactiveColor={inactiveColor}
                altText={"Maximize button"}
                iconSrc={"nav-icons/maximize.svg"}
                rotate={"90deg"}
                scale={"0.8"}
                handleClick={handleMaximize}
                setNavClick={setNavClick}
            />
        </nav>
    );
}
