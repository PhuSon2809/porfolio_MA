import React, { useContext } from "react";
import { Grid, IconButton } from "@mui/material";
import StyleIcon from "@mui/icons-material/Style";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Infor.scss";
import { ThemeContext } from "../../../features/ThemeContext";

function Infor() {
  const { theme, dark } = useContext(ThemeContext);

  return (
    <Grid container className="infor">
      <Grid item md={6} sx={{ p: "20px 20px 0 0 " }}>
        <div className="content">
          <h1 className="hello" style={{ color: !dark ? "#000" : "#fff" }}>
            Hello, my name is <span className="name">Van Thi My Anh</span>
          </h1>
          <h1 className="callback" style={{ color: !dark ? "#000" : "#fff" }}>
            <IconButton className="icon-btn">
              <StyleIcon fontSize="large" />
            </IconButton>
            <Typewriter
              className="work"
              loop={0}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
              words={["Project Management.", "Operations Assistant."]}
            />
          </h1>
          <p className="discription" style={{ color: theme.color }}>
            As an energetic and hard-working individual, I am always asking
            myself non stop improve. Currently seeking a new challenge in a
            dynamic work environment, especially in the PROJECT MANAGEMENT &
            OPERATIONS ASSISTANT department. With the ability to work calmly
            under pressure, I will contribute to the company's team to achieve
            its strategic goals.
          </p>
        </div>
      </Grid>
      <Grid item md={6}>
        <div
          className="box"
          style={{
            background: theme.backgroundColor,
            boxShadow: theme.shadow,
          }}
        >
          <Swiper
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/images/activities/myanh2.jpg" alt="infor" />
              {/* <img
                src="https://firebasestorage.googleapis.com/v0/b/porfolio-ma.appspot.com/o/activities%2Fmyanh2.jpg?alt=media&token=a2e4b495-9bd3-4aa1-89be-1fa842c8e0d3"
                alt="infor"
              /> */}
            </SwiperSlide>
            {/* <SwiperSlide>
              <img src="/images/banner/banner1.jpg" alt="infor" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/banner/banner3.jpg" alt="infor" />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </Grid>
    </Grid>
  );
}

export default Infor;
