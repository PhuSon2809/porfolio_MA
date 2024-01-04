import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { mySelfs } from "../../../assets/data/mySelf";
import { position } from "../../../assets/data/position";
import Tag from "../../../components/Tag/Tag";
import { ThemeContext } from "../../../features/ThemeContext";
import "./Footer.scss";

function Footer() {
  const { theme, dark } = useContext(ThemeContext);

  return (
    <div
      className="footer"
      style={{
        background: theme.backgroundColor,
        boxShadow: theme.shadow,
      }}
    >
      <div className="wrapper">
        <Grid container spacing={3}>
          <Grid item md={3}>
            <div className="brand">
              <IconButton sx={{ p: 0, mr: 1, color: "#fb2576" }}>
                <AutoAwesomeIcon sx={{ fontSize: "3rem" }} />
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
          </Grid>
          <Grid item md={3}>
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
          </Grid>
          <Grid item md={4}>
            <div className="tag-list" style={{ marginLeft: "1.5rem" }}>
              <p className="title" style={{ color: dark ? "#fff" : "#000" }}>
                MySelf
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
          </Grid>
          <Grid item md={2}>
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
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
