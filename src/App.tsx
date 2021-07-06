import GlobalStyle from "./style/global";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <>
      <Header>
        <p>teste</p>
      </Header>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
