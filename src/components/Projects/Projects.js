import "./Projects.css";
import { Minesweeper } from "./Minesweeper/Minesweeper.js";
import tafappimg from "./tafapp.png";
import snakeimg from "./snake.png";


export function Projects() {
    return (
        <div className="projectsSection">
            <div className="project">
                    <h2 className="projectHeader">React Minesweeper | <a href="https://github.com/halmass822/reactminesweeper" target="_blank" rel='noreferrer'>source</a></h2>
                    <Minesweeper resizeable={true}/>
                    <h2 className="lessonsLearned" style={{marginTop: "18%"}}>Lessons learned:</h2>
                    <ul style={{width: "22rem"}}>
                        <li>Managing state as an array</li>
                        <li>Generating components using array.map</li>
                        <li>Writing clean useEffect and useState methods to avoid rendering errors</li>
                    </ul>
            </div>
            <div className="project">
                <h2 className="projectHeader">ATC weather app
                    <span> | </span> 
                    <a href="https://grand-twilight-778696.netlify.app/"  target="_blank" rel='noreferrer'>view</a>
                    <span> | </span>
                    <a href="https://github.com/halmass822/reactminesweeper" target="_blank" rel='noreferrer'>source</a>
                </h2>
                <img src={tafappimg} alt="tafapp screenshot" className="projectImg"></img>
                    <h2 className="lessonsLearned">Lessons learned:</h2>
                    <ul>
                        <li>Writing clear project documentation</li>
                        <li>Respecting feature creep</li>
                        <li>Complex string parsing and regex</li>
                        <li>Clearly verbalizing issues when seeking help</li>
                        <li>Clearly reading API documentation</li>
                    </ul>
            </div>
            <div className="project">
                <h2 className="projectHeader">React Snake (Work in progress)
                    <span> | </span>
                    <a href="https://github.com/halmass822/reactsnake" target="_blank" rel='noreferrer'>source</a>
                </h2>
                <img src={snakeimg} alt="snake screenshot" className="projectImg"></img>
                <p className="additionalProjectInfo">Vanilla javascript version&#160;
                    <a href="https://incredible-starship-bd6bac.netlify.app/" target="_blank" rel='noreferrer'>here</a>
                    , source&#160;
                    <a href="https://incredible-starship-bd6bac.netlify.app/" target="_blank" rel='noreferrer'>here</a>
                </p>
                <h2 className="lessonsLearned" style={{marginTop: "17.5%"}}>Lessons learned so far:</h2>
                <ul style={{width: "30rem"}}>
                    <li>A thorough understanding of component lifecycles and useEffect dependencies is required to use setInterval in React</li>
                    <li>Better understanding of React devtools when using functional components</li>
                    <li>How to use non-primitive data as a useEffect dependency</li>
                </ul>
            </div>

        </div>
    )
}