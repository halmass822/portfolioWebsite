import "./Education.css";
import reduximg from "./reduxlogo.png";
import reactimg from "./logo512.png";
import nodeimg from "./nodejs.png";
import postgresimg from "./postgreslogo.png";
import ccimg from "./cclogo.png";
import gimpimg from "./gimplogo.png";
import paintnetimg from "./paintnetlogo.png"

export function Education() {
    return (
        <div className="educationComponent">
            <h1 className="educationHeader">Education and Skills</h1>
            <div className="educationSection">
                <div className="ccfullstack">
                    <img alt="codecademy logo" src={ccimg} className="cclogo"></img>
                    <div className="cctextbody">
                        <h2>Codecademy.com Full Stack Engineer (ongoing)</h2>
                        <p>I am currently halfway through the 6 month online course, currently wrapping up advanced React and beginning Redux. Before starting this course, I started with the C# course followed by javascript, asynchronous javascript, nodejs, express and sqlite</p> 
                        <p>Although not a part of the program, I intend to learn Sass after Redux and fully solidify my knowledge of the front-end before moving on</p>
                        <p>Although my focus is to be a front-end dev, I believe the knowledge offered by this course will help me increase my proficiency and adaptability as a front end developer</p>
                    </div>
                    <div className="ccimages">
                        <img alt="postgreslogo" src={postgresimg} className="educationimg"></img>
                        <img alt="react logo" src={reactimg} className="educationimg"></img>
                        <img alt="redux" src={reduximg} className="educationimg"></img>
                        <img alt="nodejs logo" src={nodeimg} className="educationimg"></img>
                    </div>
                </div>
                <div className="currentSkills">
                    <div className="skillsSection">
                        <div className="programLogos">
                            <img alt="gimp logo" src={gimpimg} className="skillsimg"></img>
                            <img alt="paint.net logo" src={paintnetimg} className="skillsimg"></img>
                        </div>
                        <div className="skillsTextBody">
                            <h2>Basic photo editing</h2>
                            <p>I have lots of experience editing simple images with paint.net and GIMP. The background image for this section and the one above are images edited by me as well as all the logos to the right. Should any advanced editing beyond simple blurring, cropping and background removal be required, I am more than willing to improve on my skills and get the job done</p>
                        </div>
                        <div className="sampleImages">
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}