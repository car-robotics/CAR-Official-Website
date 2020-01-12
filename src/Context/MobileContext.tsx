import React from "react";

export const MobileContext = React.createContext(false);

export default function MobileContextProvider(props: any) {
    const [isMobile, setIsMobile] = React.useState<boolean>(window.innerWidth < 1250);

    const checkWindowSize = () => {
        if (window.innerWidth < 1250 && !isMobile) setIsMobile(true);
        if (window.innerWidth >= 1250 && isMobile) setIsMobile(false);
    }

    window.addEventListener("resize", checkWindowSize);

    return (
        <MobileContext.Provider value={isMobile}>
            {props.children}
        </MobileContext.Provider>
    );
}