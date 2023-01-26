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
          <img src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/279138987_742571113818261_8560419225783568442_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5Bwc0z5KVLEAX8x8hNV&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfDO05OccRxSS4571ipGItnULVuhB8z38rKrx0TuM99WnA&oe=63D458BC" />
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
