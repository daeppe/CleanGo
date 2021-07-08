import { ReactNode } from "react";
import { ClientProvider } from "./Clients";

interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return <ClientProvider>{children}</ClientProvider>;
};

export default Providers;
