import React, { useContext } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";
import { ThemeContext } from "../../../features/ThemeContext";
import Tag from "../../../components/Tag/Tag";
import "./Sidebar.scss";

function Sidebar() {
  const { theme, dark } = useContext(ThemeContext);

  return (
    <div className="wrapper">
      <div className="sidebar" style={{ background: theme.backgroundColor }}>
        <div className="media">
          <p className="title" style={{ color: dark ? "#fff" : "#000" }}>
            Follow us
          </p>
          <div className="icon">
            <IconButton className="icon-btn">
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton className="icon-btn">
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton className="icon-btn">
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton className="icon-btn">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </div>
        </div>

        <div className="tag-list">
          <p className="title" style={{ color: dark ? "#fff" : "#000" }}>
            Tags
          </p>

          <div className="tags">
            <Tag>Event Leader</Tag>
            <Tag>Nation</Tag>
            <Tag>Hera</Tag>
            <Tag>Event Leader</Tag>
            <Tag>Event Leader</Tag>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
