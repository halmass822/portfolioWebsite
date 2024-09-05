import "./Projects.css";
import { Minesweeper } from "./Minesweeper/Minesweeper.js";
import tafappimg from "./tafapp.png";
import snakeimg from "./snake.png";
import mastermindimg from "./mastermind.png";
import tetrisimg from "./tetris.png";
import hcadimg from "./HCAD.png";
import hcoimg from "./HCO.png";



export function Projects() {
    return (
        <div className="projectsComponent">
            <h1 className="projectsHeader">Projects</h1>
            <div className="allProjects">
                <div className="project shadowAnimate">
                    <div className="projectSection">
                        <h2 className="projectTitle">HCAD | <a href="https://github.com/halmass822/HCAD2" target="_blank" rel='noreferrer'>source</a></h2>
                    </div>
                    <div className="projectSection">
                        <img src={hcadimg} alt="hcad screenshot" className="projectImg"></img>
                        <p className="additionalProjectInfo">CAD web app in redux and react</p>
                    </div>
                    <div className="projectSection descriptionSection">
                        <h2 className="lessonsLearned">Lessons learned:</h2>
                        <ul>
                            <li>Solidifying redux state management knowledge</li>
                            <li>Compartmentalizing common functions, i.e timer parsing</li>
                            <li>Managing CSS with redux for scrollable tables</li>
                        </ul>
                    </div>
                </div>
                <div className="project shadowAnimate">
                    <div className="projectSection">
                        <h2 className="projectTitle">HCO | <a href="https://github.com/halmass822/HCO" target="_blank" rel='noreferrer'>source</a></h2>
                    </div>
                    <div className="projectSection">
                        <img src={hcoimg} alt="hco screenshot" className="projectImg"></img>
                        <p className="additionalProjectInfo">Callout list manager for police resources</p>
                    </div>
                    <div className="projectSection descriptionSection">
                        <h2 className="lessonsLearned">Lessons learned:</h2>
                        <ul>
                            <li>Solidifying browserrouter knowledge</li>
                            <li>Managing efficient single page applications</li>
                            <li>Solidfying table management as a React component</li>
                        </ul>
                    </div>
                </div>
                <div className="project shadowAnimate">
                    <div className="projectSection">
                        <h2 className="projectTitle">React Minesweeper | <a href="https://github.com/halmass822/reactminesweeper" target="_blank" rel='noreferrer'>source</a></h2>
                    </div>
                    <div className="projectSection">
                        <Minesweeper resizeable={true}/>
                        <p className="additionalProjectInfo">This component is loaded, click a tile to start playing! Right click to flag a tile</p>
                    </div>
                    <div className="projectSection descriptionSection">
                        <h2 className="lessonsLearned">Lessons learned:</h2>
                        <ul>
                            <li>Managing state as an array</li>
                            <li>Generating components using array.map</li>
                            <li>Writing clean useEffect and useState methods to avoid rendering errors</li>
                        </ul>
                    </div>
                </div>
                <div className="project shadowAnimate">
                    <div className="projectSection">
                        <h2 className="projectTitle">ATC weather app
                            <span> | </span>
                            <a href="https://github.com/halmass822/tafapp" target="_blank" rel='noreferrer'>source</a>
                        </h2>
                    </div>
                    <div className="projectSection">
                        <img src={tafappimg} alt="tafapp screenshot" className="projectImg"></img>
                        <p className="additionalProjectInfo">Displays current and forecasted weather for the selected aviation weather stations using&#160;<a href="https://www.checkwxapi.com/" target="_blank" rel='noreferrer'>https://www.checkwxapi.com/</a></p>
                    </div>
                    <div className="projectSection descriptionSection">
                        <h2 className="lessonsLearned">Lessons learned:</h2>
                        <ul>
                            <li>Writing clear project documentation</li>
                            <li>Respecting feature creep</li>
                            <li>Complex string parsing and regex</li>
                            <li>Clearly verbalizing issues when seeking help</li>
                            <li>Clearly reading API documentation</li>
                        </ul>
                    </div>
                </div>
                <div className="project shadowAnimate">
                    <div className="projectSection">
                        <h2 className="projectTitle">Tetris |&#160;
                        <a href="https://6330005546da453e92533ddb--splendid-gnome-00c6e8.netlify.app/"  target="_blank" rel='noreferrer'>view</a>
                        <span> | </span>
                        <a href="https://github.com/halmass822/Tetris" target="_blank" rel='noreferrer'>source</a></h2>
                    </div>
                    <div className="projectSection">
                        <img src={tetrisimg} alt="tetris screenshot" className="projectImg"></img>
                        <p className="additionalProjectInfo">Vanilla javascript, functions only</p>
                    </div>
                    <div className="projectSection descriptionSection">
                        <h2 className="lessonsLearned">Lessons learned:</h2>
                        <ul>
                            <li>The importance of writing functions with no side effects</li>
                            <li>DRY code is much easier to refactor</li>
                            <li>How to write debugging functions to properly test code</li>
                            <li>How to effectively utilize git to improve remote working</li>
                        </ul>
                    </div>
                </div>
                <div className="project shadowAnimate">
                    <div className="projectSection">
                        <h2 className="projectTitle">Mastermind Game |&#160;<a href="https://github.com/halmass822/Mastermind" target="_blank" rel='noreferrer'>source</a></h2>
                    </div>
                    <div className="projectSection">
                        <img src={mastermindimg} alt="snake screenshot" className="projectImg"></img>
                        <p className="additionalProjectInfo">Similar to wordle, you try and guess a 4 color combination and check how many tiles are in  the correct colour and/or position</p>
                    </div>
                    <div className="projectSection descriptionSection">
                        <h2 className="lessonsLearned">Lessons learned:</h2>
                        <ul>
                            <li>How to use flexbox to create a grid</li>
                            <li>How to design an interface before coding it</li>
                            <li>How to use objects to organize data and modify css</li>
                        </ul>
                    </div>
                </div>
                <div className="project shadowAnimate">
                    <div className="projectSection">
                        <h2 className="projectTitle">React Snake (Work in progress)
                            <br></br>
                            <a href="https://github.com/halmass822/reactsnake" target="_blank" rel='noreferrer'>source</a>
                        </h2>
                    </div>
                    <div className="projectSection">
                        <img src={snakeimg} alt="snake screenshot" className="projectImg"></img>
                        <p className="additionalProjectInfo">Vanilla javascript version&#160;
                            <a href="https://incredible-starship-bd6bac.netlify.app/" target="_blank" rel='noreferrer'>here</a>
                            , source&#160;
                            <a href="https://incredible-starship-bd6bac.netlify.app/" target="_blank" rel='noreferrer'>here</a>
                        </p>
                    </div>
                    <div className="projectSection descriptionSection">
                        <h2 className="lessonsLearned">Lessons learned so far:</h2>
                        <ul>
                            <li>A thorough understanding of component lifecycles and useEffect dependencies is required to use setInterval in React</li>
                            <li>Better understanding of React devtools when using functional components</li>
                            <li>How to use non-primitive data as a useEffect dependency</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
