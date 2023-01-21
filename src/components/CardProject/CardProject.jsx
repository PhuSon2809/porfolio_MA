import React, { useContext } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { ThemeContext } from "../../features/ThemeContext";
import Tag from "../Tag/Tag";
import "./CardProject.scss";

function CardProject() {
  const { theme, dark } = useContext(ThemeContext);

  return (
    <div className="card" style={{ background: theme.backgroundColor }}>
      <div className="card-inner">
        <div className="card-image">
          <img src="https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/301312635_826216795453692_131188975397824987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BTFHTvg8AbkAX8Eqizf&_nc_ht=scontent.fvca1-2.fna&oh=00_AfB2YTWbdJjTwL_CSfj0grOe0s8xXHUYq-ukWsq_Jubd2Q&oe=63CEE62D" />
        </div>
        <div className="card-content">
          <div className="tag-list">
            <Tag>Event Leader</Tag>
          </div>
          <p className="title" style={{ color: !dark ? "#000" : "#fff" }}>
            Autumn is a second spring when every leaf is a flower
          </p>
          <p className="paragraph" style={{ color: theme.color }}>
            She then expatiated very warmly upon the advantages I should reap
            from her plan; talked in a high style of my future grandeur; assured
            me how heartily I should despise almost every body an
          </p>
          <div className="time">
            <CalendarMonthIcon fontSize="small" /> May 2, 2022
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
