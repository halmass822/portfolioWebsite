import "./Education.css";
import reduximg from "./images/reduxlogo.png";
import reactimg from "./images/logo512.png";
import nodeimg from "./images/nodejs.png";
import postgresimg from "./images/postgreslogo.png";
import ccimg from "./images/cclogo.png";
import gimpimg from "./images/gimplogo.png";
import paintnetimg from "./images/paintnetlogo.png"
import headsetimg from "../IntroCard/images/headset.png";
import igybimg from "../IntroCard/images/IGYB.png";
import minesweeperfaceimg1 from "../Projects/Minesweeper/images/click.png";
import minesweeperfaceimg2 from "../Projects/Minesweeper/images/gameover.png";
import operatorimg from "./images/operator.png";
import excelimg from "./images/excel.png";
import piechartimg from "./images/piechartblur.png";

export function Education() {
    return (
        <div className="educationComponent">
            <h1 className="educationHeader">Education and Skills</h1>
            <div className="educationList">
                <div className="educationSection">
                    <div className="section1">
                        <img alt="codecademy logo" src={ccimg} className="cclogo"></img>
                    </div>
                    <div className="section2">
                            <h2>Codecademy.com Full Stack Engineer (ongoing)</h2>
                            <p>I am currently halfway through the 6 month online course, currently wrapping up advanced React and beginning Redux. Before starting this course, I started with the C# course followed by javascript, asynchronous javascript, nodejs, express and sqlite</p> 
                            <p>Although not a part of the program, I intend to learn Sass after Redux and fully solidify my knowledge of the front-end before moving on</p>
                            <p>Although my focus is to be a front-end dev, I believe the knowledge offered by this course will help me increase my proficiency and adaptability as a front end developer</p>
                    </div>
                    <div className="section3">
                        <img alt="codecademy logo" src={ccimg} className="cclogo"></img>
                        <div className="s3images">
                            <div className="logosRow">
                                <img alt="postgreslogo" src={postgresimg} className="educationimg"></img>
                                <img alt="react logo" src={reactimg} className="educationimg"></img>
                            </div>
                            <div className="logosRow">
                                <img alt="redux" src={reduximg} className="educationimg"></img>
                                <img alt="nodejs logo" src={nodeimg} className="educationimg"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="educationSection">
                    <div className="section1">
                        <img alt="communications operator logo" src={operatorimg} className="fullsizeLogo"></img>
                    </div>
                    <div className="section2">
                        <h2>Communication and collaboration</h2>
                        <p>In a 911 communications / police dispatch center, clear and quick communication is often the difference between life and death. Getting information from and speaking clearly to clients and officers is of paramount importance, as well as communicating with your teammates through written and verbal forms. Having spent an entire career in communications in some form or another including as an Air Traffic Control trainee (laid off due to Covid) my verbal and written communication skills are second to none. I always have my team's back and they have mine, and you can expect the same loyalty and dedication should you hire me for your team</p>
                    </div>
                    <div className="section3">
                        <img alt="communications operator logo" src={operatorimg} className="fullsizeLogo"></img>
                        <img alt="igyb911 logo" src={igybimg} className="fullsizeLogo"></img>
                    </div>
                </div>
                <hr></hr>
                <div className="educationSection">
                    <div className="section1">
                        <div className="programLogos">
                            <img alt="gimp logo" src={gimpimg} className="skillsimg"></img>
                            <img alt="paint.net logo" src={paintnetimg} className="skillsimg"></img>
                        </div>
                    </div>
                    <div className="section2">
                        <h2>Basic photo editing</h2>
                        <p>I have lots of experience editing simple images with paint.net and GIMP. The background image for this section and the one above are images edited by me as well as all the logos to the right. Should any advanced editing beyond simple blurring, cropping and background removal be required, I am more than willing to improve on my skills and get the job done</p>
                    </div>
                    <div className="section3">
                        <div className="programLogos">
                            <img alt="gimp logo" src={gimpimg} className="skillsimg"></img>
                            <img alt="paint.net logo" src={paintnetimg} className="skillsimg"></img>
                        </div>
                            <div className="logosRow">
                                <img alt="headset logo" src={headsetimg} className="educationimg"></img>
                                <img alt="igyb911 logo" src={igybimg} className="educationimg"></img>
                            </div>
                            <div className="logosRow">
                                <img alt="minesweeper click face" src={minesweeperfaceimg1} className="educationimg"></img>
                                <img alt="minesweeper game over face" src={minesweeperfaceimg2} className="educationimg"></img>
                            </div>
                    </div>
                </div>
                <hr></hr>
                <div className="educationSection">
                    <div className="section1">
                        <img alt="excel logo" src={excelimg} className="fullsizeLogo"></img>
                    </div>
                    <div className="section2">
                        <h2>Intermediate Spreadsheeting</h2>
                        <p>My programming journey started with Excel, building a metrics calculator and forecaster for my team. It was then that I learned about the critical role a user interface provides, allowing inexperienced users to perform extremely powerful calculations and simplify the use of complex programs. The spreadsheet I designed recognized different user inputs (i.e whether a user entered a badge or agent number) and visually led the user to the appropriate input fields.</p>
                        <p>It was also here that I learned about what could be possible with programming outside the confines of excel. What visuals I could create without being limited to cells and a single z-index, as well as alternative data integration methods such as web scraping. The lessons I was taught in my Excel courses remain very relevant to learning programming</p>
                    </div>
                    <div className="section3">
                        {/* <img alt="excel logo" src={excelimg} className="fullsizeLogo"></img> */}
                        <img alt="excel pie chart blurred" src={piechartimg} className="fullsizeLogo"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}