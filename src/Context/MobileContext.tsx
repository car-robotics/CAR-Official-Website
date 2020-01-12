import React from "react";

export const MobileContext = React.createContext(false);

export default function MobileContextProvider(props: any) {
    return (
        <MobileContext.Provider value={window.innerWidth < 1250}>
            {props.children}
        </MobileContext.Provider>
    );
}