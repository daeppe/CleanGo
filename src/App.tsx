import GlobalStyle from "./style/global";
import Routes from "./routes";

import { useRegister } from "./providers/Register";

function App() {
  const { backgroundGray } = useRegister();

  return (
    <>
      <Routes />
      <GlobalStyle backgroundGray={backgroundGray} />
    </>
  );
}

export default App;
