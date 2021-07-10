import { Switch } from "react-router-dom";
import Route from "../../routes/route";
import Aside from "../../components/Aside";
import Main from "./Main";
import Header from "../../components/Header";
import HeaderNavAuth from "../../components/HeaderNavAuth";

const DashboardClient = () => {
  return (
    <>
      <Header auth={true}>
        <HeaderNavAuth name={"Mockado"} />
      </Header>
      <Aside />
      <Switch>
        <Route isPrivate path="/dashboard/" exact component={Main} />
      </Switch>
    </>
  );
};

export default DashboardClient;
