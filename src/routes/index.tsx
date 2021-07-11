import { Switch } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/DashboardPartner";
import Route from "./route";
import ProfessionalRegister from "../pages/ProfessionalRegister";
import { useAuth } from "../providers/Auth";
import HomePartner from "../pages/HomePartner";
import EnterPage from "../pages/EnterPage";

const Routes = () => {
  // const { token } = useAuth();

  const token = true;

  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/sejaumparceiro" component={HomePartner} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/entrar" exact component={EnterPage} />

      <Route path="/cadastro" exact component={RegisterPage} />
      <Route path="/cadastroparceiro" exact component={ProfessionalRegister} />

      {token && (
        <Route isPrivate path="/dashboardparceiro" component={Dashboard} />
      )}

      {/* <Route component={() => <h1>Rota não encontrada</h1>} /> */}
    </Switch>
  );
};
export default Routes;
