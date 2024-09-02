import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  // ... is spread (copy to) all the property from 1 to another
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          150: '#c2c2c2',
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        yellowAccent: {
          100: "#fffdf0",
          200: "#fff9db",
          300: "#fff0b3",
          400: "#ffe48a",
          500: "#ffd561",
          600: "#d9ad48",
          700: "#b38832",
          800: "#8c6520",
          900: "#664616",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        primary: {
          100: "#103166",
          150: '#18488c',
          200: "#18488c",
          300: "#2766b3",
          400: "#3b87d9",
          500: "#52abff",
          600: "#7ac3ff",
          700: "#a3d9ff",
          800: "#ccebff",
          900: "#f0faff",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        yellowAccent: {
          100: "#f0faff",
          200: "#8ad8ff",
          300: "#a3d9ff",
          400: "#3b87d9",
          500: "#52abff",
          600: "#3b87d9",
          700: "#2766b3",
          800: "#18488c",
          900: "#103166",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        primary: {
          100: "#f0faff",
          150: '#f0faff',
          200: "#a3d9ff",
          300: "#a3d9ff",
          400: "#7ac3ff",
          500: "#52abff",
          600: "#3b87d9",
          700: "#2766b3",
          800: "#18488c",
          900: "#103166",
        },
      }),
});

// MUI theme settings
export const themeSetting = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[800],
            },
            secondary: {
              main: colors.yellowAccent[800],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[100],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.yellowAccent[400],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: '#ffffff',
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "0.75rem",
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          menu: {
            backgroundColor: "#ffffff",
          },
        },
      },
    },
  };
};

// Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  ); // the array [] is for memoization method, tracking dependencies that determine whether the memoized value needs to be recomputed

  // useMemo - React hook that allows you to memoize the result of a computation
  // no need to do unnecessary computations if the dependencies are not changed
  const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);

  return [theme, colorMode];
};
