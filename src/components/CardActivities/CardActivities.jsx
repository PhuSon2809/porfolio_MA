import React, { useContext } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ThemeContext } from "../../features/ThemeContext";
import "./CardActivities.scss";

function CardActivities({ activiti }) {
  const { theme, dark } = useContext(ThemeContext);

  return (
    <div
      className="card-activities"
      style={{ background: theme.backgroundColor, boxShadow: theme.shadow }}
    >
      <div className="card-content">
       <div className="title-row">
          <div className="position">{activiti.title}</div>
          <div className="time" style={{ color: theme.color }}>
            <CalendarMonthIcon fontSize="medium" /> {activiti.time}
          </div>
       </div>
        {/* <p className="club" style={{ color: !dark ? "#000" : "#fff" }}>
          {activiti.club}
        </p> */}
        <p className="content-title" style={{ color: !dark ? "#000" : "#fff" }}>
          {activiti.contentTitle}
        </p>
        {activiti.contents.map((content) => (
          <div className="paragraph" style={{ color: theme.color }}>
            <FiberManualRecordIcon sx={{ fontSize: "12px" }}/>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardActivities;
