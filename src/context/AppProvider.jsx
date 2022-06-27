import { createContext, useState } from "react";

const theme = {
  dark: { color: "#FFFFFF", background: "#121212" },
  light: { color: "#121212", background: "#FFFFFF" }
};

export const AppContext = createContext();

function AppProvider(props) {
  const [appTheme, setAppTheme] = useState(theme.light);
  const setDark = () => setAppTheme(theme.dark);
  const setLight = () => setAppTheme(theme.light);
  return (
    <AppContext.Provider value={{ appTheme, setDark, setLight }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
