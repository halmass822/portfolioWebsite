import "./Projects.css";
import { Minesweeper } from "./Minesweeper/Minesweeper.js";
import tafappimg from "./tafapp.png";


export function Projects() {
    return (
        <div className="projectsSection">
            <div className="project">
                <h2 className="projectHeader">React Minesweeper | <a href="https://github.com/halmass822/reactminesweeper" target="_blank" rel='noreferrer'>source</a></h2>
                <Minesweeper resizeable={true}/>
                <h2 className="lessonsLearned">Lessons learned:</h2>
                <ul>
                    <li>Managing state as an array</li>
                    <li>Generating components using array.map</li>
                    <li>Writing clean useEffect and useState methods to avoid rendering errors</li>
                </ul>
            </div>
            <div className="project">
                <h2 className="projectHeader">ATC weather app
                    <span> | </span>
                    <a href="https://github.com/halmass822/reactminesweeper" target="_blank" rel='noreferrer'>source</a>
                    <span> | </span> 
                    <a href="https://grand-twilight-778696.netlify.app/"  target="_blank" rel='noreferrer'>deploy</a>
                </h2>
                <img src={tafappimg} alt="tafapp screenshot"></img>
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
    )
}