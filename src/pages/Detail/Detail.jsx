import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, ImageList, ImageListItem } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Tag from "../../components/Tag/Tag";
import { listProjects } from "../../assets/data/project";
import { ThemeContext } from "../../features/ThemeContext";
import "./Detail.scss";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Detail() {
  const { idBigProject, id } = useParams();
  const { theme, dark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState();

  const handleSetImage = (item) => {
    setIsOpen(!isOpen);
    setImage(item);
  };

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
          <img src={project.cover} alt="" />
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

          {project.video && (
            <iframe
              width="100%"
              height="400px"
              src={project.video}
              title={project.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ marginBottom: "30px", boxShadow: theme.shadow }}
            />
          )}

          <Box sx={{ width: "100%" }}>
            <ImageList
              sx={{ width: "100%" }}
              variant="quilted"
              cols={4}
              rowHeight={200}
            >
              {project.listImage.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 200, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                    onClick={() => handleSetImage(item)}
                  />
                </ImageListItem>
              ))}
            </ImageList>
            {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} image={image} />}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Detail;
