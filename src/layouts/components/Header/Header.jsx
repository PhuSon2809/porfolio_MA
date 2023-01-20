import React, { useContext } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Avatar, IconButton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../features/ThemeContext";
import "./Header.scss";
import config from "../../../config";

const LogoutButton = styled(Button)({
  padding: "0 1rem",
  height: "40px",
  lineHeight: "40px",
  textTransform: "capitalize",
  fontSize: "1rem",
  fontWeight: 500,
  color: "white",
  display: "block",
  backgroundColor: "#fb2576",
  borderRadius: "999px",
  "&:hover": {
    backgroundColor: "#fb5091",
  },
});

const navLinks = [
  {
    display: "Home",
    url: config.routes.home,
  },
  {
    display: "About",
    url: "#about",
  },
  {
    display: "Porfolio",
    url: "#porfolio",
  },
  {
    display: "Contact",
    url: config.routes.contact,
  },
];

function Header() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <header
      className="header"
      style={{ background: theme.backgroundColor, boxShadow: theme.shadow }}
    >
      <div className="brand">
        <IconButton sx={{ p: 0, mr: 1 }}>
          <Avatar
            alt="My Anh"
            src="/static/images/avatar/2.jpg"
            sx={{ border: "2px solid #fb2576" }}
          />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          className="brand-name"
          sx={{ color: theme.colorTitle }}
        >
          My<span className="pink">Anh</span>
        </Typography>
      </div>
      <div className="navbar">
        <ul className="menu">
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.url}
              className="item"
              style={{ color: theme.color }}
            >
              <li>
                <p>{item.display}</p>
              </li>
            </NavLink>
          ))}
          <li className="cv-btn">
            <IconButton
              onClick={toggle}
              sx={{
                color: theme.color,
                "&:hover": {
                  color: "#fb2576",
                },
              }}
            >
              {!dark ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </IconButton>
            <LogoutButton>Download CV</LogoutButton>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
