import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/theme";
import useHover from "./utils/useHover";
// import GlobalStyles from "./theme/global";
import Cursor from "./buttonComp/Cursor";
// import Badge from "./components/Badge";
import Button from "./buttonComp/Button";

export default function App() {
    const [hoverRef, isHovered] = useHover();

    return (
        <ThemeProvider theme={lightTheme}>
            {/* <GlobalStyles /> */}

            <Button ref={hoverRef}>Know More!</Button>

            <Cursor hover={isHovered} />
        </ThemeProvider>
    );
}
