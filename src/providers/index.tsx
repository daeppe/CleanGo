import { ReactNode } from "react";
import { ClientProvider } from "./Clients";
import { AuthProvider } from "./Auth";
import { FeedbackProvider } from "./Feedbacks";
import { PartnersProvider } from "./Partners";
import { RegisterProvider } from "./Register";
import { ServiceProvider } from "./Services";
interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <RegisterProvider>
      <AuthProvider>
        <PartnersProvider>
          <ClientProvider>
            {/* <ServiceProvider> */}
            <FeedbackProvider>{children}</FeedbackProvider>
            {/* </ServiceProvider> */}
          </ClientProvider>
        </PartnersProvider>
      </AuthProvider>
    </RegisterProvider>
  );
};

export default Providers;
