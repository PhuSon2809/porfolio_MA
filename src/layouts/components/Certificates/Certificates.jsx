import { Grid, IconButton } from "@mui/material";
import React, { useContext } from "react";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { ThemeContext } from "../../../features/ThemeContext";
import "./Certificates.scss";

function Certificates() {
  const { theme, dark } = useContext(ThemeContext);

  return (
    <Grid container className="certificate-inner">
      <Grid item md={5}>
        <div className="certificate-wrapper">
          <div
            className="certificate"
            style={{
              background: theme.backgroundColor,
              boxShadow: theme.shadow,
            }}
          >
            <p className="title" style={{ color: dark ? "#fff" : "#000" }}>
              Certificates
            </p>
            <div className="content-certi">
              <p className="name" style={{ color: dark ? "#fff" : "#000" }}>
                Honorable Student of Semester
              </p>
              <p
                className="time"
                style={{
                  color: theme.color,
                }}
              >
                <IconButton sx={{ color: "#fb2576" }}>
                  <StarIcon />
                </IconButton>
                Semester: Fall 2021
              </p>
              <p
                className="time"
                style={{
                  color: theme.color,
                }}
              >
                <IconButton sx={{ color: "#fb2576" }}>
                  <StarIcon />
                </IconButton>
                Semester: Spring 2021
              </p>
              <p
                className="time"
                style={{
                  color: theme.color,
                }}
              >
                <IconButton sx={{ color: "#fb2576" }}>
                  <StarIcon />
                </IconButton>
                Semester: Summer 2021
              </p>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item md={7}>
        <div className="course-wrapper">
          <div
            className="course"
            style={{
              background: theme.backgroundColor,
              boxShadow: theme.shadow,
            }}
          >
            <p className="title" style={{ color: dark ? "#fff" : "#000" }}>
              Course
            </p>
            <div className="course-content">
              <img src="./images/course.png" alt="course" />

              <div className="content">
                <p className="title" style={{ color: dark ? "#fff" : "#000" }}>
                  Brand Camp - Creative & Advertising: Account Management 101.
                </p>
                <p
                  style={{
                    color: theme.color,
                  }}
                >
                  Account Management 101 - All Basics course includes basic
                  content about 6 Job Bags, 5 must-have qualities, 4 portrait
                  positioning and 3 powerful tools of the Guest Administration
                  worker. Products in the Media and Advertising industry.
                </p>
                <div className="time">
                  <CalendarMonthIcon fontSize="small" /> April 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Certificates;
