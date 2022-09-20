import React from "react";

// @component
import { ScrollTop } from "components/Button";
import Header from "./AppLayout/Header/Header";

// @styled-component
import { AppLayoutWrapper } from "./AppLayout.styled";

// -----------------------------------------------------------

const Layout = ({ children }: any) => {
  return (
    <AppLayoutWrapper>
      <Header />
      {children}
      <ScrollTop />
    </AppLayoutWrapper>
  );
};

export default Layout;
