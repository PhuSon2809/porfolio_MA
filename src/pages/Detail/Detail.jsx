import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Tag from "../../components/Tag/Tag";
import { projects } from "../../assets/data/project";
import { ThemeContext } from "../../features/ThemeContext";
import "./Detail.scss";
import { Box, ImageList, ImageListItem } from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];

function Detail() {
  const { id } = useParams();
  const { theme, dark } = useContext(ThemeContext);

  const project = projects.find((project) => {
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
            <CalendarMonthIcon fontSize="small" /> May 2, 2022
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
              {itemData.map((item) => (
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
