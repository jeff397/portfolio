import React, { useEffect, useState } from "react";
import "./skills.css";
import skillsData from "../../Data/skills.json";
import { FaCheckCircle } from "react-icons/fa";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  return (
    <section id="skills">
      <h2 className="skills-title">Mes Compétences</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <h3>{skill.title}</h3>
            <ul>
              {skill.description.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className="icon" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
