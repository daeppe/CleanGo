import { ReactNode } from "react";
import { ClientProvider } from "./Clients";
import { AuthProvider } from "./Auth";
import { FeedbackProvider } from "./Feedbacks";
import { PartnersProvider } from "./Partners";
interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <PartnersProvider>
        <ClientProvider>
          <FeedbackProvider>{children}</FeedbackProvider>
        </ClientProvider>
      </PartnersProvider>
    </AuthProvider>
  );
};

export default Providers;
