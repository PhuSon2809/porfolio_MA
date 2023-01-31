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
              words={[
                "Project Management Intern.",
                "Operations Assistant Intern.",
              ]}
            />
          </h1>
          <p className="discription" style={{ color: theme.color }}>
            As an energetic and hard-working individual, I am always asking
            myself non stop improve. Currently seeking a new challenge in a
            dynamic work environment, especially in the PROJECT MANAGEMENT &
            OPERATIONS ASSISTANT INTERN department. With the ability to work
            calmly under pressure, I will contribute to the company's team to
            achieve its strategic goals.
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
              <img
                src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/323127347_549501826835164_4597030068057628239_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=fDWHiL_vx4QAX8Fdje2&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAyVOR6txm4KCTpc_lBsx8ePwYBAMCb_gEfqMu7G8qMJQ&oe=63D5A218"
                alt="infor"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/273392903_691765755565464_8244085838016981352_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=n-Wsy22hLdQAX8ysq2_&_nc_oc=AQlNIGIFf1Sv5yk3tDDlzW2nnXbTD_GRHwBJ9SwDL2wVdBM1vCLArPw0IwKE0nqcMq0zEOPF0tupJ2qHqxNMkBn0&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfA8A8_LWHMubJKkSq92MXkTSGmuqxvrdZM4LZvCZG6_tQ&oe=63D4338D"
                alt="infor"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/107986391_301940647881312_2663326676031323544_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_-7Az6H4EL0AX_0Bqf8&tn=r9klAhFbrvO_FJ86&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfAo7X87sHQNcY8j8htIUhHjn6iuIv8OERCXcWa8BsYo0Q&oe=63F881AD"
                alt="infor"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Grid>
    </Grid>
  );
}

export default Infor;
