 import { Header } from "./components/Header";

import { MainContextProvider } from "./context/MainContext/inde";
import GlobalStyle from "./globals/styles";




function App() {

  return (
    <MainContextProvider>
      <GlobalStyle />
      <Header />
    </MainContextProvider>
  );
}
export default App;
