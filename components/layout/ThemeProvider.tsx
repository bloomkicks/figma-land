import {
  ThemeProvider as Provider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2091F9",
    },
    secondary: {
      main: "#2DC071",
      light: "#F15807",
    },
    text: {
      primary: "#252B42",
      secondary: "#374754",
    },
    background: {
      default: "transparent",
      paper: "#252B42",
    },
    darkBg: {
      text: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Rubik",
      "Roboto",
      "-apple-system",
      "sans-serif",
    ].join(","),
    fontSize: 18,
    h2: {
      fontSize: 48,
      lineHeight: "55px",
    },
    h3: {
      fontSize: 20,
      lineHeight: "28px",
      fontWeight: "bold",
    },
    h4: {
      fontSize: 28,
      lineHeight: "40px",
    },
    h5: {
      fontSize: 16,
      lineHeight: "23px",
    },
    h6: {
      fontSize: 15,
      lineHeight: "28px",
    },
    button: {
      fontSize: 20,
      lineHeight: "20x",
    },
    body1: {
      fontSize: 18,
      lineHeight: "25px",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: "100px",
          textTransform: "none",
          padding: "14px 18px",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "27px",
            backgroundColor: "#F5F5F5",
            border: "1px solid #E8E8E8",
          },
          "& .MuiOutlinedInput-notchedOutline > legend": {
            maxWidth: '0.01px !important'
          },
          "& .MuiInputBase-input": {
            zIndex: "1",
            padding: "18px 26px",
            fontSize: "15px",
          },
          "& .MuiInputLabel-outlined": {
            top: "-0.6px",
            left: 15,
          },
          "& .MuiInputLabel-shrink": {
            transform: "translate(15px, -18px) scale(0.8)",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        scrollBehavior: "smooth",
      },
    },
  },
});

theme.typography.h1 = {
  fontSize: 48,
  lineHeight: "55px",
  fontWeight: "400",
  [theme.breakpoints.up("md")]: {
    fontSize: 74,
    lineHeight: "84px",
    fontWeight: "bold",
  },
};

const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
