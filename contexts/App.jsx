import Todos from "./components/Todos";
import { RecoilRoot } from "recoil";
import Welcome from "./components/ContextDeclaration";
import { createContext } from "react";
import ThemeContext from "./components/ContextDeclaration";
import Sample from "./components/Sample";

function App() {

  return (
    <>
      <ThemeContext.Provider value="dark">
        <Sample />
      </ThemeContext.Provider>
    </>
  );
}

export default App;