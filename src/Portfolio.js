import "./Portfolio.css";
import { IntroCard } from "./components/IntroCard/IntroCard.js";
import { Projects } from "./components/Projects/Projects.js";
import { Education } from "./components/Education/Education";

function Portfolio() {
  return (
    <div className="portfolio">
      <IntroCard />
      <Projects />
      <Education />
    </div>
  );
}

export default Portfolio;
