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
        <Route isPrivate path="/dashboardpartner/" exact component={Main} />
        <Route isPrivate path="/dashboardpartner/gains" component={Gains} />
        <Route isPrivate path="/dashboardpartner/reviews" component={Reviews} />
        <Route
          isPrivate
          path="/dashboardpartner/complaints
          "
          component={Complaints}
        />
        <Route
          isPrivate
          path="/dashboardpartner/settings"
          component={Settings}
        />
        <Route
          isPrivate
          path="/dashboardpartner/services"
          component={Services}
        />
      </Switch>
    </>
  );
};

export default Dashboard;
