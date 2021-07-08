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

const Dashboard = () => {
  return (
    <>
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
      </Switch>
    </>
  );
};

export default Dashboard;
