import { createTheme, ThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { createContext } from "react";

const TemplateContext = createContext(null);

export const TemplateProvider = ({ children }) => {
  const theme = createTheme({
    overrides: {
      MuiDialog: {
        paperWidthSm: {
          maxWidth: "unset",
        },
      },
      MuiDialogContent: {
        root: {
          padding: 0,
          "&:first-child": {
            paddingTop: 0,
          },
        },
      },
    },
  });

  return (
    <TemplateContext.Provider value={children}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </TemplateContext.Provider>
  );
};
