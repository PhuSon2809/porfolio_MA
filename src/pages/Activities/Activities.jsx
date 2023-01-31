import React, { useContext } from "react";
import { Grid } from "@mui/material";
import CardActivities from "../../components/CardActivities/CardActivities";
import { activities } from "../../assets/data/activities";
import { ThemeContext } from "../../features/ThemeContext";
import "./Activities.scss";

function Activities() {
  const { dark } = useContext(ThemeContext);
  return (
    <div className="activities" style={{ padding: "50px 0 120px 0" }}>
      <div className="club">
        <img src="./images/fevlogo.png" alt="logo" />
        <p style={{ color: !dark ? "#000" : "#fff" }}>FPTU Event Club - FEV</p>
      </div>
      <Grid container sx={{ pb: 25 }}>
        <Grid item md={6} className="flex">
          <div className="box-image" data-aos="fade-up">
            <div className="img-infor-1">
              <img src="./images/activities/activities1.jpg" alt="logo" className="img-1" />
            </div>
            <div className="img-infor-2">
              <img src="./images/activities/activities2.jpg" alt="logo" className="img-2"/>
            </div>
          </div>
        </Grid>
        <Grid item md={6} sx={{ pl: 5, pr: 5 }} className="flex">
          <CardActivities activiti={activities[0]} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} sx={{ pl: 5, pr: 5 }} className="flex">
          <CardActivities activiti={activities[1]} />
        </Grid>
        <Grid item md={6} className="flex">
          <div className="box-image">
            <div className="img-infor">
              <img src="./images/banner/banner4.jpg" alt="logo" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Activities;
