// React imports
import { Dispatch } from "react";

// Component imports
import AppIcon from "./AppIcon";

interface Props {
    activeApps: {
        [key: string]: boolean;
    };
    setActiveApps: {
        [key: string]: Dispatch<React.SetStateAction<boolean>>;
    };
}

export default function AppIcons({ activeApps, setActiveApps }: Props) {
    return (
        <>
            <AppIcon
                imageSrc="/app-icons/notes.png"
                altText="Note App that contains information about me"
                activeApp={activeApps["notes"]}
                setActiveApp={setActiveApps["notes"]}
            />
        </>
    );
}
