import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth="sm">
        <Header />
        <div>{children}</div>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default Layout;
