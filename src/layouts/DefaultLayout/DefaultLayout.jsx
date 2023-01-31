import React, { useContext } from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../features/ThemeContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Infor from "../components/Infor";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";

function DefaultLayout({ children }) {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  console.log(location);

  return (
    <div style={{ background: theme.backgroundContainer }}>
      <div className="containers">
        <Header />
        {location.pathname === "/" && (
          <>
            <Infor />
            <Skills />
          </>
        )}
        <Grid container sx={{ paddingTop: "40px" }}>
          <Grid item md={8}>
            {children}
          </Grid>
          <Grid item md={4}>
            <Sidebar />
          </Grid>
        </Grid>
        {location.pathname === "/" && <Certificates />}
      </div>
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
