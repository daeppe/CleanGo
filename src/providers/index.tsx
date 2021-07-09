import { ReactNode } from "react";
import { ClientProvider } from "./Clients";
import { AuthProvider } from "./Auth";
import { FeedbackProvider } from "./Feedbacks";
import { ServiceProvider } from "./Services";
import { RegisterProvider } from "./Register";
import { PartnersProvider } from "./Partners";
interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ClientProvider>
        <FeedbackProvider>
          <ServiceProvider>
            <RegisterProvider>
              <PartnersProvider>{children}</PartnersProvider>
            </RegisterProvider>
          </ServiceProvider>
        </FeedbackProvider>
      </ClientProvider>
    </AuthProvider>
  );
};

export default Providers;
