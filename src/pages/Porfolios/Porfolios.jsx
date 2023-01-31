import React, { useContext, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ThemeContext } from "../../features/ThemeContext";
import "./Porfolios.scss";
import Modal from "../../components/Modal/Modal";

const itemData = [
  {
    img: "./images/porfolio/v1.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "./images/porfolio/dai1.jpg",
    title: "Camera",
    cols: 2,
  },
  {
    img: "./images/porfolio/dai2.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "./images/porfolio/v2.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "./images/porfolio/dai4.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "./images/porfolio/dai3.jpg",
    title: "Basketball",
    cols: 2,
  },
  {
    img: "./images/porfolio/photo2.png",
    title: "Basketball",
    cols: 4,
  },
 
  {
    img: "./images/porfolio/photo5.png",
    title: "Basketball",
    cols: 2,
    rows: 3,
  },
  {
    img: "./images/porfolio/photo4.jpg",
    title: "Basketball",
    cols: 2,
    rows: 2,
  },
  {
    img: "./images/porfolio/photo1.png",
    title: "Basketball",
    cols: 2,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Porfolios() {
  const { theme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState();

  const handleSetImage = (item) => {
    setIsOpen(!isOpen);
    setImage(item);
  };

  return (
    <div className="porfolios">
      <div
        className="title"
        style={{ background: theme.backgroundColor, boxShadow: theme.shadow }}
      >
        <p>Photoshop/Illustrator</p>
      </div>
      <div
        className="list-image"
        style={{ background: theme.backgroundColor, boxShadow: theme.shadow }}
      >
        <ImageList
          sx={{ width: "100%" }}
          variant="quilted"
          cols={4}
          rowHeight={200}
        >
          {itemData.map((item) => (
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
      </div>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} image={image} />}
    </div>
  );
}

export default Porfolios;
