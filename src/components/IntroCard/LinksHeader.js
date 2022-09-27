import tagimg from "./images/taglogo.png";
import githubimg from "./images/githublogo.png";
import mailimg from "./images/maillogo.png";
import "./LinksHeader.css";

export function LinksHeader(props) {
    return (
        <div className={"linksHeader"}>
            <div className={`headerLinks ${props.scrolledDown ? "visible" : "hidden"}`}>
                <div className="personalLink1">
                    <a href="https://github.com/halmass822" target="_blank" rel='noreferrer' >
                        <img src={githubimg} alt="github logo" className="headersLogo"></img>
                    </a>
                </div>
                <div className="personalLink2">
                    <a href="mailto:halmassri822@gmail.com" target="_blank" rel='noreferrer' >
                        <img src={mailimg} alt="mail logo" className="headersLogo"></img>
                    </a>
                </div>
                <div className="personalLink3">
                    <a href="https://github.com/halmass822/portfolioWebsite" target="_blank" rel='noreferrer' >
                        <img src={tagimg} alt="html tag logo" className="headersLogo"></img>
                    </a>
                </div>



            </div>
        </div>
    )
}

