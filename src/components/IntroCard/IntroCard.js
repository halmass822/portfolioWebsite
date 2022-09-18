import canadianFlag from "./images/canadian-flag.png";
import igyb from "./images/IGYB.png";
import headset from "./images/headset.png";
import frontEndLogo from "./images/front-end-logo-black.png";
import warningLogo from "./images/redwarning.png";
import "./IntroCard.css";

export function IntroCard() {
    return(
        <div className="intro">
        <img src={igyb} alt="#igyb911 logo" className="introLogo"></img>
        <div className="body">
            <div className="introLine">
                <h2 className="myName">Hazem Al Massri</h2>
                <h2><img src={canadianFlag} alt="canadian flag"></img>Canada based</h2>
                </div>
            <div className="introLine">
                <h2><img src={headset} alt="headset logo"></img>911 Operator</h2>
                <h2><img src={frontEndLogo} alt="front end logo"></img>Frontend Dev Hopeful</h2>
                </div>
            <h2><img src={warningLogo} alt="red warning logo"></img>Experienced React State Discombobulator</h2>
            </div>
        </div>
    )
}