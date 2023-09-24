import React, { useContext, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ThemeContext } from "../../features/ThemeContext";
import "./Porfolios.scss";
import Modal from "../../components/Modal/Modal";

const itemData = [
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fv1.jpg?alt=media&token=0335164f-c603-4e25-b0bd-315b4b8a0fa7",
    img: "./images/porfolio/v6.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fv1.jpg?alt=media&token=0335164f-c603-4e25-b0bd-315b4b8a0fa7",
    img: "./images/porfolio/v5.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fv1.jpg?alt=media&token=0335164f-c603-4e25-b0bd-315b4b8a0fa7",
    img: "./images/porfolio/v4.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fv1.jpg?alt=media&token=0335164f-c603-4e25-b0bd-315b4b8a0fa7",
    img: "./images/porfolio/v3.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },

  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fv1.jpg?alt=media&token=0335164f-c603-4e25-b0bd-315b4b8a0fa7",
    img: "./images/porfolio/cao2.png",
    title: "Breakfast",
    rows: 4,
    cols: 2,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fv1.jpg?alt=media&token=0335164f-c603-4e25-b0bd-315b4b8a0fa7",
    img: "./images/porfolio/dai5.jpg",
    title: "Breakfast",
    rows: 1,
    cols: 2,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fv1.jpg?alt=media&token=0335164f-c603-4e25-b0bd-315b4b8a0fa7",
    img: "./images/porfolio/cao1.jpg",
    title: "Breakfast",
    rows: 3,
    cols: 2,
  },

  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fv1.jpg?alt=media&token=0335164f-c603-4e25-b0bd-315b4b8a0fa7",
    img: "./images/porfolio/v7.png",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fv1.jpg?alt=media&token=0335164f-c603-4e25-b0bd-315b4b8a0fa7",
    img: "./images/porfolio/v1.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fdai1.jpg?alt=media&token=57313a8a-b7df-44d1-a22e-0aa2dedce067",
    img: "./images/porfolio/dai1.jpg",
    title: "Camera",
    cols: 2,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fdai2.jpg?alt=media&token=92004493-5235-4494-8e17-88993cb0d631",
    img: "./images/porfolio/dai2.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fv2.jpg?alt=media&token=3ff0ebb5-2a8d-4b9b-9838-9b8991078fbf",
    img: "./images/porfolio/v2.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fdai4.jpg?alt=media&token=eb02bad3-b6d2-4b61-9a21-047848a36f68",
    img: "./images/porfolio/dai4.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fdai3.jpg?alt=media&token=3aaec3f9-b2a7-4bd0-8189-c958ce7d50c8",
    img: "./images/porfolio/dai3.jpg",
    title: "Basketball",
    cols: 2,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fphoto2.png?alt=media&token=9487a002-2b70-4ac7-8741-846db8560d8e",
    img: "./images/porfolio/photo2.png",
    title: "Basketball",
    cols: 4,
  },

  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fphoto5.png?alt=media&token=8635e438-0d96-4f6c-bae0-57143c3a398d",
    img: "./images/porfolio/photo5.png",
    title: "Basketball",
    cols: 2,
    rows: 3,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fphoto4.jpg?alt=media&token=fb3a444d-3ed3-4259-b66a-178871ab3fc8",
    img: "./images/porfolio/photo4.jpg",
    title: "Basketball",
    cols: 2,
    rows: 2,
  },
  {
    // img: "https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/porfolio%2Fphoto1.png?alt=media&token=a5b6b013-c368-4750-951b-0e3b8ecd950e",
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
        className="title-wrapper"
        style={{ background: theme.backgroundColor, boxShadow: theme.shadow }}
      >
        <p className="title" style={{ color: theme.colorTitle }}>
          About
        </p>
        <p style={{ color: theme.colorTitle }}>
          Conceptualize visual design and optimize user experience through each
          campaign's post and landing page
        </p>
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
