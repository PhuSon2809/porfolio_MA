import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../../features/ThemeContext";

function DefaultLayout({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme.backgroundContainer }}>
      <div className="containers">
        <Header />
        <Grid container sx={{ paddingTop: "40px" }}>
          <Grid item md={8}>
            {children}
          </Grid>
          <Grid item md={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
