import { ServiceProvider } from "./Services";
import { PartnersProvider } from "./Partners";
import { FeedProvider } from "./Feed";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <PartnersProvider>
      <ServiceProvider>
        <FeedProvider>{children}</FeedProvider>
      </ServiceProvider>
    </PartnersProvider>
  );
};

export default Providers;
