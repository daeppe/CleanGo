import Helmet from "react-helmet";
// import { useLocation } from "react-router-dom";
// import { formatedPath } from "../../utils/formatedPath";
interface TitlePageProps {
  title: string;
}
const TitlePage = ({ title }: TitlePageProps) => {
  // const location = useLocation();
  return <Helmet title={`CleanGo | Página ${title}`} />;
};

export default TitlePage;
