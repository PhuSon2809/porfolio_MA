import React, { useContext } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
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
          <Grid item md={4}>
            <div className="brand">
              <IconButton sx={{ p: 0, mr: 1, color: "#fb2576" }}>
                <AutoAwesomeIcon  sx={{fontSize: "3rem"}}/>
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
          <Grid item md={4}>
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
          </Grid>
          <Grid item md={4}>
            {" "}
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
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
