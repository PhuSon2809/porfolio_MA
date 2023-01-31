import React, { useContext } from "react";
import LayersIcon from "@mui/icons-material/Layers";
import { listProjects } from "../../assets/data/project";
import CardProject from "../../components/CardProject";
import { ThemeContext } from "../../features/ThemeContext";
import "./Home.scss";

function Home() {
  const { theme, dark } = useContext(ThemeContext);

  return (
    <div className="home-content">
      {listProjects.map((item) => (
        <div key={item.id} className="place">
          <div className="big-tile">
            <LayersIcon sx={{ color: "#fb2576" }} />
            <p
              className="inner-title"
              style={{ color: !dark ? "#000" : "#fff" }}
            >
              {item.title}
            </p>
          </div>
          <div className="box-content">
            {item.discription.map((disc) => (
              <p key={disc} className="content" style={{ color: theme.color }}>
                {disc}
              </p>
            ))}
          </div>
          {item.projects.map((project) => (
            <CardProject key={project.id} project={project} idBigProject={item.id} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Home;
