import Aside from "../../components/Aside";
import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";

const HomePage = () => {
  return (
    <>
      <Header>
        <HeaderNav />
      </Header>
      <Aside />
      <div>Home</div>
    </>
  );
};

export default HomePage;
