import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./themes/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  );
}
