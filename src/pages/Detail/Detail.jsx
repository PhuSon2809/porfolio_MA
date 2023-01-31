import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, ImageList, ImageListItem } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Tag from "../../components/Tag/Tag";
import { listProjects } from "../../assets/data/project";
import { ThemeContext } from "../../features/ThemeContext";
import "./Detail.scss";

function Detail() {
  const { idBigProject, id } = useParams();
  const { theme, dark } = useContext(ThemeContext);

  const projects = listProjects.find((projects) => {
    return projects.id == idBigProject;
  });

  const project = projects.projects.find((project) => {
    return project.id == id;
  });

  return (
    <div className="wrapper-detail">
      <div
        className="detail"
        style={{ background: theme.backgroundColor, boxShadow: theme.shadow }}
      >
        <div className="img-title">
          <img
            src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/314646116_499591732200987_2328258349536883169_n.jpg?stp=dst-jpg_p600x600&_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zi6_Q5n9Fo0AX8PLfDs&tn=r9klAhFbrvO_FJ86&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfABEQjPnXxhYIv_9SCq9e4DjQy7GWS5vUPgZqDAh3oPJQ&oe=63D6A7D1"
            alt=""
          />
        </div>

        <div className="content">
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

          <div className="time">
            <CalendarMonthIcon fontSize="small" /> {project.timeStart}
          </div>

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

          <Box sx={{ width: "100%" }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {project.listImage.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Detail;
