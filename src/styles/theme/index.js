const theme = {
  breakpoints: [600, 900, 1200],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  sizes: {
    pageMaxWidth: "800px",
  },
  colors: {
    primary: "#ffbf00",
    secondary: "#32d2ff",
    secondaryDark: "#00b2e5",
    text: "white",
    greyScale: "#444",
    pageContainerBackground: "rgba(9,9,9,.3)",
  },
  fonts: {
    heading: "'Fjalla One', 'sans-serif'",
    body: "'Roboto', 'sans-serif'",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 80],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  borders: {
    thin: "1px solid #444",
  },
  borderWidths: {
    thin: "1px",
    thick: "2px",
  },
  shadows: {
    card: "-2px 4px 5px 0 black, inset -2px 4px 5px 0 #000",
  },

  // Variants
  text: {
    heading: {
      fontFamily: "heading",
      fontSize: 6,
      fontWeight: "heading",
      color: "primary",
      textTransform: "uppercase",
    },
    subheading: {
      fontFamily: "body",
      fontSize: 1,
      color: "text",
      textTransform: "uppercase",
    },
    body: {
      fontFamily: "body",
      fontWeight: "body",
      color: "text",
    },
    link: {
      fontFamily: "body",
      fontWeight: "inherit",
      color: "secondary",
      "&:hover": {
        color: "secondaryDark",
        textDecoration: "underline",
      },
    },
  },
  buttons: {},
  variants: {
    card: {
      p: 4,
      borderWidth: "thick",
      borderColor: "border",
      borderStyle: "solid",
      boxShadow: "card",
      "&:hover": {
        borderColor: "primary",
      },
      active: {
        variant: "card",
        borderColor: "primary",
      },
    },
  },
};

export default theme;
