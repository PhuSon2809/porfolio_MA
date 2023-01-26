import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Button, IconButton } from "@mui/material";
import { ThemeContext } from "../../../features/ThemeContext";
import Tag from "../../../components/Tag/Tag";
import "./Sidebar.scss";

const SendButton = styled(Button)({
  padding: "0 1rem",
  width: "100%",
  height: "48px",
  lineHeight: "40px",
  textTransform: "capitalize",
  fontSize: "1rem",
  fontWeight: 500,
  color: "black",
  display: "block",
  backgroundColor: "#fff",
  borderRadius: "999px",
  "&:hover": {
    backgroundColor: "#ffe8f1",
  },
});

function Sidebar() {
  const { theme, dark } = useContext(ThemeContext);

  return (
    <div className="wrapper">
      <div
        className="sidebar"
        style={{ background: theme.backgroundColor, boxShadow: theme.shadow }}
      >
        <div className="tag-list">
          <p className="title" style={{ color: dark ? "#fff" : "#000" }}>
            Tags
          </p>

          <div className="tags">
            <Tag>Event Leader</Tag>
            <Tag>Nation</Tag>
            <Tag>Hera</Tag>
            <Tag>Event </Tag>
            <Tag>Event Leader</Tag>
          </div>
        </div>

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

        <div className="contact">
          <p className="title" style={{ color: dark ? "#fff" : "#000" }}>
            Contact
          </p>

          <div className="address">
            <IconButton sx={{ color: "#fb2576" }}>
              <PhoneIcon fontSize="medium" />
            </IconButton>
            <p style={{ color: theme.color }}>0865-049-755</p>
          </div>

          <div className="phone">
            <IconButton sx={{ color: "#fb2576" }}>
              <EmailIcon fontSize="medium" />
            </IconButton>
            <p style={{ color: theme.color }}>Vtmyanh2604@gmail.com</p>
          </div>

          <div className="box-contact">
            <p className="title">Contact me</p>
            <div className="input">
              <input required type="text" placeholder="Your name" />
            </div>
            <div className="input">
              <input required type="text" placeholder="Your email" />
            </div>
            <div className="input">
              <input required type="text" placeholder="Subject" />
            </div>
            <div className="textarea">
              <textarea required type="" placeholder="Your message" />
            </div>
            <SendButton>Send mail</SendButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
