import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
// import {useAuth} from "../providers/Auth"
// apos criado o provider descomentar
interface RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  path: string;
  exact?: boolean;
}

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps) => {
  // const {token} = useAuth()
  // apos criado o provider de token descomentar
  const token = true;
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
            }}
          />
        );
      }}
    />
  );
};
export default Route;
