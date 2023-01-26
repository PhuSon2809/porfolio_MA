import React, { useContext } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ThemeContext } from "../../features/ThemeContext";
import Tag from "../Tag/Tag";
import "./CardProject.scss";
import { Link } from "react-router-dom";

function CardProject({ project }) {
  const { theme, dark } = useContext(ThemeContext);

  return (
    <Link to={`detail/${project.id}`} style={{ textDecoration: "none" }}>
      <div className="card" style={{ background: theme.backgroundColor }}>
        <div className="card-inner">
          <div className="card-image">
            <img src={project.image} alt="" />
          </div>
          <div className="card-content">
            <div className="tag-list">
              {project.positions.map((position) => (
                <Tag key={position.id} variant={position.variant}>
                  {position.title}
                </Tag>
              ))}
            </div>
            <p className="title" style={{ color: !dark ? "#000" : "#fff" }}>
              {project.title}
            </p>
            <div className="box-paragraph">
              {project.discription.map((item, index) => (
                <p
                  key={index}
                  className="paragraph"
                  style={{ color: theme.color }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} /> {item}
                </p>
              ))}
            </div>
            <div className="time">
              <CalendarMonthIcon fontSize="small" /> May 2, 2022
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardProject;
