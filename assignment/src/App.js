import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import LandingPage from "./pages/LandingPage";
import Theme from "./components/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
