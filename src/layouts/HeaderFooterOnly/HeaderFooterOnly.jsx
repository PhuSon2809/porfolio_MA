import React, { useContext } from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { ThemeContext } from "../../features/ThemeContext";

function HeaderFooterOnly({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.backgroundContainer }}>
      <div className="containers">
        <Header />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

HeaderFooterOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderFooterOnly;
