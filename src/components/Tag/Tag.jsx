import React, { useContext } from "react";
import PropTypes from "prop-types";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import classNames from "classnames/bind";
import styles from "./Tag.module.scss";
import { ThemeContext } from "../../features/ThemeContext";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Tag({ active = true, children, className, to }) {
  const { theme } = useContext(ThemeContext);

  const classes = cx("wrapper", {
    [className]: className,
    active,
  });

  return (
    <Link
      to={to}
      className={classes}
      style={{ background: theme.tagColor, color: theme.color }}
    >
      <FiberManualRecordIcon fontSize="10px" />
      {children}
    </Link>
  );
}

Tag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Tag;
