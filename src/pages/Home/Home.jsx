import React from "react";
import LayersIcon from "@mui/icons-material/Layers";
import { listProjects } from "../../assets/data/project";
import CardProject from "../../components/CardProject";
import "./Home.scss";

function Home() {
  return (
    <div className="content">
      {listProjects.map((item) => (
        <div className="place">
          <div className="big-tile">
            <LayersIcon sx={{ color: "#fb2576" }} />
            <p className="inner-title">{item.title}</p>
          </div>
          <div className="box-content">
            {item.discription.map((disc) => (
              <p key={disc} className="content">
                {disc}
              </p>
            ))}
          </div>
          {item.projects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Home;
