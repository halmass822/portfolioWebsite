import "./Portfolio.css";
import { IntroCard } from "./components/IntroCard/IntroCard.js";
import { Projects } from "./components/Projects/Projects.js";

function Portfolio() {
  return (
    <div className="portfolio">
      <IntroCard />
      <Projects />
    </div>
  );
}

export default Portfolio;
