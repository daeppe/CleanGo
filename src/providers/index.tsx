import { ReactNode } from "react";
import { ClientProvider } from "./Clients";
import { AuthProvider } from "./Auth";
import { FeedbackProvider } from "./Feedbacks";
interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ClientProvider>
        <FeedbackProvider>{children}</FeedbackProvider>
      </ClientProvider>
    </AuthProvider>
  );
};

export default Providers;
