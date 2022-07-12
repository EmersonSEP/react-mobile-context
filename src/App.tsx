import { Header } from "./components/Header";
import Menu from "./components/Menu";
import { MainContextProvider } from "./context/MainContext";

import GlobalStyle from "./globals/styles";

function App() {

  return (
    <MainContextProvider>
      <GlobalStyle />

      <Header />
      <Menu />
    </MainContextProvider>
  );
}
export default App;
