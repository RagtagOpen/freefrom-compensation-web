import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#292F36",
    },
    secondary: {
      main: "#F7FFF7",
    },
    tertiary: {
      main: "#47CCCC",
    },
    background: {
      default: "#F7FFF7",
      navbar: "#FFFFFF",
      footer: "#292F36",
    },
  },
  typography: {
    fontFamily: ["Proxima Nova"],
    fontSize: 16,
    h1: {
      fontFamily: "Garamond",
      fontSize: "1.75rem",
      lineHeight: "2.25rem",
      letterSpacing: "0.05em",
    },
    h2: {
      fontFamily: "Garamond",
      fontSize: "1.375rem",
      lineHeight: "1.625rem",
      letterSpacing: "0.05em",
    },
    h3: {
      fontFamily: "Garamond",
      fontSize: "1rem",
      lineHeight: "1.25rem",
      letterSpacing: "0.05em",
    },
    subtitle1: {
      fontFamily: "Proxima Nova",
      fontSize: "0.875rem",
      lineHeight: "1rem",
      letterSpacing: "0.05em",
    },
    button: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.05em",
      backgroundColor: "#F06449",
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        marginTop: "20px",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        color: "#F06449",
        backgroundColor: "#FFFFFF",
      },
    },
    MuiButton: {
      root: {
        borderRadius: "25px",
        "&$disabled": {
          color: '#F7FFF7',
          backgroundColor: '#FF9797'
        }
      },
      textPrimary: {
        color: '#F7FFF7',
        "&:hover": {
          backgroundColor: '#FF9797'
        }
      },
      textSecondary: {
        "&:hover": {
          backgroundColor: "#FF9797",
        },
      },
      label: {
        margin: "0 1.625rem 0 1.625rem",
      },
    },
    MuiCheckbox: {
      root: {
        color: '#FF9797',
        '&$checked': {
          color: '#FF9797',
        },
      }
    }
  },
})

export default theme
