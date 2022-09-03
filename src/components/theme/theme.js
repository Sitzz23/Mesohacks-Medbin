export const lightTheme = {
    fonts: {
        primary: "areg",
    },
    main: {
        color: "#333333",
        background: "#ffffff",
        selection: "rgba(0, 0, 0, 0.1)",
    },
    transitions: {
        easeOutExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
        easeOutCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)",
    },
    button: {
        default: {
            color: "black",
            background: "#fff9ec",
            borderColor: "black",
        },
        hover: {
            color: "white",
            background: "black",
            borderColor: "white",
        },
        focus: {
            borderColor: "white",
        },
    },
};

export const darkTheme = {
    ...lightTheme,
    main: {
        color: "#999999",
        background: "#161616",
        selection: "rgba(0, 0, 0, 0.1)",
    },
    button: {
        default: {
            color: "#999999",
            background: "#1b1b1b",
        },
        hover: {
            background: "#232323",
        },
        focus: {
            borderColor: "#1b1b1b",
        },
    },
};
