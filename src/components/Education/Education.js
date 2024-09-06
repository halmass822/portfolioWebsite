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
                        <img alt="codecademy logo" src={ccimg} className="fullsizeLogo"></img>
                    </div>
                    <div className="section2">
                            <h2>Codecademy.com Front End Engineer (ongoing)</h2>
                            <p>Codecademy has been my favorite tool for learning to code as I can get feedback on my script right from their web-based IDE. Starting with C# helped me write clean code right from the start even though my focus turned to Javascript and React. After solidifying my understanding of the front end, I plan to start their .NET pathway in order to write better integrated applications. I never stop learning and Codecademy is the perfect tool due to their vast library of courses and topics available</p>
                    </div>
                    <div className="section3">
                        <img alt="codecademy logo" src={ccimg} className="fullsizeLogo mobileResponse"></img>
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
                        <p>In a 911 communications / police dispatch center, clear and quick communication is often the difference between life and death. Getting information from and speaking clearly to clients and officers is of paramount importance, as well as communicating with your teammates through written and verbal forms. Thanks to the amazing mentors and teachers I've had throughout my career I can clearly verbalize any issues or questions with my tasks and take the initiative to support my team.</p>
                    </div>
                    <div className="section3">
                        <img alt="communications operator logo" src={operatorimg} className="fullsizeLogo mobileResponse"></img>
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
                        <h2>Photo editing</h2>
                        <p>In our increasingly visual world an understanding of graphic design and photo editing applications is integral to front end development. I have lots of experience editing images with paint.net and GIMP. I plan to dive further into 3D modelling once I have an established understanding of front end development to further improve my skills</p>
                    </div>
                    <div className="section3">
                        <div className="programLogos mobileResponse">
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
                        <h2>Spreadsheeting</h2>
                        <p>My programming journey started with Excel, building a metrics calculator and forecaster for my team. It was then that I learned about the critical role a user interface provides, allowing inexperienced users to perform extremely powerful calculations and simplify the use of complex programs. The spreadsheet I designed recognized different user inputs (i.e whether a user entered a badge or agent number) and visually led the user to the appropriate input fields.</p>
                        <p>It was also here that I learned about what could be possible with programming outside the confines of excel. What visuals I could create without being limited to cells and a single z-index, as well as alternative data integration methods such as web scraping. The lessons I was taught in my Excel courses remain very relevant to programming and have been far and away the biggest boost to my career</p>
                    </div>
                    <div className="section3">
                        <img alt="excel logo" src={excelimg} className="fullsizeLogo mobileResponse"></img>
                        <img alt="excel pie chart blurred" src={piechartimg} className="fullsizeLogo"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}
