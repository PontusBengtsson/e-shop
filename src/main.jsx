// Root.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App";
import { lightTheme, darkTheme } from "../themes/material-theme";

const Root = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    try {
      const savedTheme = localStorage.getItem("isDarkMode");
      return savedTheme ? JSON.parse(savedTheme) : window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (error) {
      console.error("Error loading theme from localStorage:", error);
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  React.useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    try {
      localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    } catch (error) {
      console.error("Error saving theme to localStorage:", error);
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);