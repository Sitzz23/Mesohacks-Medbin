import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/theme";
import useHover from "./utils/useHover";
import Cursor from "./buttonComp/Cursor";

export default function App() {
    const [hoverRef, isHovered] = useHover();

    return (
        <ThemeProvider theme={lightTheme}>
            <Cursor hover={isHovered} />
        </ThemeProvider>
    );
}
