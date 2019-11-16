import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  spacing: 8,
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
    root: {
      fontFamily: ["Proxima Nova Rg"],
      fontSize: 16,
      lineHeight: 24,
    },
    h1: {
      fontFamily: "Garamond",
      fontSize: "1.75rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.05em",
    },
    h2: {
      fontFamily: "Garamond",
      fontSize: "1.375rem",
      lineHeight: "1.083rem",
      letterSpacing: "0.05em",
    },
    h3: {
      fontFamily: "Garamond",
      fontSize: "1rem",
      lineHeight: "0.833rem",
      letterSpacing: "0.05em",
    },
    h4: {
      fontFamily: "Garamond",
      fontSize: ".75rem",
      lineHeight: "0.833rem",
      letterSpacing: "0.05em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    subtitle1: {
      color: "#6E7E91",
      fontFamily: "Proxima Nova Rg",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
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
    MuiLink: {
      root: {
        color: "#2675D3",
      },
      underlineHover: {
        textDecoration: "underline",
      },
    },
    MuiButton: {
      root: {
        borderRadius: "25px",
      },
      containedPrimary: {
        backgroundColor: "#F06449",
        "&:active": {
          backgroundColor: "#FF9797",
        },
        "&:hover": {
          backgroundColor: "#F06449",
        },
        "&$disabled": {
          color: "#F7FFF7",
          backgroundColor: "#FF9797",
        },
      },
      containedSecondary: {
        borderRadius: "20px",
        backgroundColor: "#47CCCC",
        "&:hover": {
          backgroundColor: "#32B4B4",
        },
      },
      outlinedPrimary: {
        color: "#F06449",
        border: "2px solid #F06449",
        backgroundColor: "transparent",
        "&:active": {
          color: "#FF9797",
          border: "2px solid #FF9797",
          backgroundColor: "transparent",
        },
        "&:hover": {
          color: "#F06449",
          border: "2px solid #F06449",
          backgroundColor: "transparent",
        },
        "&$disabled": {
          color: "#FF9797",
          border: "2px solid #FF9797",
          backgroundColor: "transparent",
        },
      },
      outlinedSecondary: {
        color: "#47CCCC",
        border: "2px solid #47CCCC",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        "&:hover": {
          border: "2px solid #47CCCC",
        },
      },
      textPrimary: {
        color: "#F7FFF7",
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
        color: "#FF9797",
        "&$checked": {
          color: "#FF9797",
        },
      },
    },
    MuiRadio: {
      root: {
        color: "#6E7E91",
      },
      colorPrimary: {
        "&$checked": {
          color: "#F06449",
        },
      },
    },
    MuiDrawer: {
      paperAnchorBottom: {
        height: "200px",
        backgroundColor: "#292F36",
      },
    },
    MuiExpansionPanel: {
      root: {
        backgroundColor: "#F7FFF7",
        borderTop: "2px solid #47CCCC",
        borderBottom: "none",
        boxShadow: "none",
        borderRadius: "0px !important",
        margin: 0,
      },
    },
    MuiExpansionPanelSummary: {
      root: {},
    },
  },
})

export default theme
