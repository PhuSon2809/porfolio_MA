import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Button, IconButton } from "@mui/material";
import { ThemeContext } from "../../../features/ThemeContext";
import Tag from "../../../components/Tag/Tag";
import "./Sidebar.scss";
import { position } from "../../../assets/data/position";
import { mySelfs } from "../../../assets/data/mySelf";

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
            Positions
          </p>

          <div className="tags">
            {position.map((position) => (
              <Tag key={position.id} variant={position.variant}>
                {position.title}
              </Tag>
            ))}
          </div>
        </div>

        <div className="tag-list">
          <p className="title" style={{ color: dark ? "#fff" : "#000" }}>
            My Self
          </p>

          <div className="tags">
            {mySelfs.map((mySelf) => (
              <Tag
                to={`/myself/${mySelf.title}`}
                key={mySelf.id}
                variant={mySelf.variant}
              >
                {mySelf.title}
              </Tag>
            ))}
          </div>
        </div>

        <div className="media">
          <p className="title" style={{ color: dark ? "#fff" : "#000" }}>
            Follow me
          </p>
          <div className="icon">
            <a href="https://www.facebook.com/myanh.van.90">
              <IconButton className="icon-btn">
                <FacebookIcon fontSize="large" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/_itscutiemanh/">
              <IconButton className="icon-btn">
                <InstagramIcon fontSize="large" />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/v%C4%83n-m%E1%BB%B9-anh-2604abc/">
              <IconButton className="icon-btn">
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </a>
          </div>
        </div>

        <div className="contact">
          <p className="title" style={{ color: dark ? "#fff" : "#000" }}>
            Contact
          </p>

          <div className="birthday">
            <IconButton sx={{ color: "#fb2576" }}>
              <CalendarMonthIcon fontSize="medium" />
            </IconButton>
            <p style={{ color: theme.color }}>April 26, 2002</p>
          </div>

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

          <div className="location">
            <IconButton sx={{ color: "#fb2576" }}>
              <LocationOnIcon fontSize="medium" />
            </IconButton>
            <p style={{ color: theme.color }}>
              Phu Huu, District 9, Ho Chi Minh City
            </p>
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
