import React from "react";
import { useCurrentWidth } from "react-socks";

export const MobileContext = React.createContext(false);

export default function MobileContextProvider(props: any) {
    return (
        <MobileContext.Provider value={useCurrentWidth() < 1250}>
            {props.children}
        </MobileContext.Provider>
    );
}