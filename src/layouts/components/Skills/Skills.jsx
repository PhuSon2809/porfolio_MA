import React, { useContext } from "react";
import { skillsRowOne, skillsRowTow } from "../../../assets/data/skills";
import { ThemeContext } from "../../../features/ThemeContext";
import "./Skills.scss";

function Skills() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="skills">
      <div className="row-one">
        {skillsRowOne.map((skill) => (
          <div
            key={skill.id}
            className="box"
            style={{
              background: theme.backgroundColor,
            }}
          >
            <div
              className="image-box"
              style={{
                background: theme.backgroundContainer,
              }}
            >
              <img src={skill.image} alt={skill.title} />
            </div>
            <p style={{ color: theme.color }}>{skill.title}</p>
          </div>
        ))}
      </div>
      <div className="row-tow">
        {skillsRowTow.map((skill) => (
          <div
            key={skill.id}
            className="box"
            style={{
              background: theme.backgroundColor,
            }}
          >
            <div
              className="image-box"
              style={{
                background: theme.backgroundContainer,
              }}
            >
              <img src={skill.image} alt={skill.title} />
            </div>
            <p style={{ color: theme.color }}>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
