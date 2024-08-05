import React from "react";
import Footer from "../components/Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default AppLayout;
