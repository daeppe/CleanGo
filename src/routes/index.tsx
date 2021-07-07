import { Switch } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/Dashboard";
import Route from "./route";
import ProfessionalRegister from "../pages/ProfessionalRegister";
import WorkWithUs from "../pages/WorkWithUs";

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
      <Route path="/trabalheconosco" exact component={WorkWithUs} />
      <Route isPrivate path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
};
export default Routes;
