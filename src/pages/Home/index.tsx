import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";
import TitlePage from "../../components/TitlePage";

const HomePage = () => {
  return (
    <>
      <TitlePage title="Home" />
      <Header>
        <HeaderNav />
      </Header>
      <div>Home</div>
    </>
  );
};

export default HomePage;
