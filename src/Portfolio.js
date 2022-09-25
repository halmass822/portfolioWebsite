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
      <div className="contactMe">
          <h2>Portfolio made with love by Hazem Al Massri.&#160;<span><a href='mailto:halmassri822@gmail.com?subject=Portfolio feedback'>Please send me an email</a>&#160;and let me know what you think!</span> </h2>
        </div>
    </div>
  );
}

export default Portfolio;