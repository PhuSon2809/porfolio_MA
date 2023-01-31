import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, ImageList, ImageListItem } from "@mui/material";
import Modal from "../../components/Modal/Modal";
import "./MySelf.scss";
import { ThemeContext } from "../../features/ThemeContext";
import { hobbys } from "../../assets/data/hobby";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function MySelf() {
  const { tag } = useParams();
  const { theme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState();

  const handleSetImage = (item) => {
    setIsOpen(!isOpen);
    setImage(item);
  };

  const hobby = hobbys.find((hobby) => {
    return hobby.title === tag;
  });

  return (
    <div className="myself">
      <div
        className="box-title"
        style={{ background: theme.backgroundColor, boxShadow: theme.shadow }}
      >
        <div className="background">
          <p className="title" >
            {tag}
          </p>
        </div>
      </div>

      <div
        className="list-image"
        style={{ background: theme.backgroundColor, boxShadow: theme.shadow }}
      >
        <Box sx={{ width: "100%" }}>
          <ImageList
            sx={{ width: "100%" }}
            variant="quilted"
            cols={4}
            rowHeight={200}
          >
            {hobby.listImage.map((item) => (
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
          {isOpen && (
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} image={image} />
          )}
        </Box>
      </div>
    </div>
  );
}

export default MySelf;
