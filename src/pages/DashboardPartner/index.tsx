import { Switch } from "react-router-dom";
import Route from "../../routes/route";
import Aside from "../../components/Aside";
import Main from "./Main";
import Gains from "./Gains";
import Reviews from "./Reviews";
import Header from "../../components/Header";
import HeaderNavAuth from "../../components/HeaderNavAuth";
import Complaints from "./Complaints";
import Settings from "./Settings";
import Services from "./Services";
import TitlePage from "../../components/TitlePage";
const Dashboard = () => {
  return (
    <>
      <TitlePage />

      <Header auth={true}>
        <HeaderNavAuth name={"Mockado"} />
      </Header>
      <Aside />
      <Switch>
        <Route isPrivate path="/dashboardparceiro/" exact component={Main} />
        <Route isPrivate path="/dashboardparceiro/receita" component={Gains} />
        <Route
          isPrivate
          path="/dashboardparceiro/avaliacoes"
          component={Reviews}
        />
        <Route
          isPrivate
          path="/dashboardparceiro/reclamacoes
          "
          component={Complaints}
        />
        <Route
          isPrivate
          path="/dashboardparceiro/configuracoes"
          component={Settings}
        />
        <Route
          isPrivate
          path="/dashboardparceiro/servicos"
          component={Services}
        />
      </Switch>
    </>
  );
};

export default Dashboard;
