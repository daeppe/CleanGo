import { Switch } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/DashboardPartner";
import Route from "./route";
import ProfessionalRegister from "../pages/ProfessionalRegister";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={RegisterPage} />
      <Route
        path="/profissionalregister"
        exact
        component={ProfessionalRegister}
      />
      <Route component={() => <h1>Rota não encontrada</h1>} />
      <Route isPrivate path="/dashboardpartner" component={Dashboard} />
    </Switch>
  );
};
export default Routes;
