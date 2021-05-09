import { ThemeProvider } from "@material-ui/styles";
import Landing from "./components/Landing/Landing";
import Theme from "./components/Material UI/Theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
