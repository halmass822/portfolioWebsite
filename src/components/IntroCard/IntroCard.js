import canadianFlag from "./images/canadian-flag.png";
import igyb from "./images/IGYB.png";
import headset from "./images/headset.png";
import tagimg from "./images/taglogo.png";
import warningLogo from "./images/redwarning.png";
import githubimg from "./images/githublogo.png";
import mailimg from "./images/maillogo.png";
import "./IntroCard.css";

export function IntroCard() {
    return(
        <div className="intro">
            <div className="introLogoContainer introSection">
                <img src={igyb} alt="#igyb911 logo" className="introLogo"></img>
            </div>
            <div className="body introSection">
                <div className="introLine">
                    <h2 className="myName">Hazem Al Massri</h2>
                    <h2><img src={canadianFlag} alt="canadian flag"></img>Canada based</h2>
                    </div>
                <div className="introLine">
                    <h2><img src={headset} alt="headset logo"></img>911 Operator</h2>
                    <h2><img src={tagimg} alt="front end logo"></img>Frontend Dev Hopeful</h2>
                    </div>
                <h2><img src={warningLogo} alt="red warning logo" style={{width: "1.5rem"}}></img>Experienced React State Discombobulator</h2>
                </div>
            <div className="linksCard introSection">
                <a href="https://github.com/halmass822" target="_blank" rel='noreferrer' className="personalLink1">
                    <h2><img src={githubimg} alt="github logo" className="linksLogo"></img>My github</h2>
                    </a>
                <a href="mailto:halmassri822@gmail.com" target="_blank" rel='noreferrer' className="personalLink2">
                    <h2><img src={mailimg} alt="mail logo" className="linksLogo"></img>Contact me</h2>
                    </a>
                <a href="https://github.com/halmass822/portfolioWebsite" target="_blank" rel='noreferrer' className="personalLink3">
                    <h2><img src={tagimg} alt="html tag logo" className="linksLogo"></img>Page source</h2>
                    </a>
                <a href="https://www.ivegotyourback911.com/pages/about" target="_blank" rel='noreferrer' className="personalLink4">
                    <h2><img src={igyb} alt="igyb911 logo" className="linksLogo"></img>#IGYB911</h2>
                    </a>
            </div>
        </div>
    )
}