import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Php"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"React Js"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Python"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Java"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Web Design"} progress={"25%"} width={"25%"} />
      </div>

      <Tittle title={"Services"} span={"Services"} />
      <div className="servives-container">
        <ServicesSection
          image={design}
          title={"Web Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={intelligence}
          title={"Artificial Intelligence"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div>
    </div>
  );
}

export default AboutPage;
