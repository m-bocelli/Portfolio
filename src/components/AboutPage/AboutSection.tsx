import head from "../../assets/head.png";
import "./AboutPage.css";
import { TbBrandCSharp, TbBrandCpp, TbBrandPython, TbBrandTypescript} from 'react-icons/tb';

export default function AboutSection() {
    return (
        <div className="about-body">
            <div className="head">
                <img src={head}></img>
                <p>Computer science student at the University of Delaware.</p>
            </div>
            <div>
                <h2>Language proficiency</h2>
                <ul className="language-list">
                    <li className="language"><TbBrandCpp/><span> - Whiteboard problems</span></li>
                    <li className="language"><TbBrandCSharp/><span> - Unity game development</span></li>
                    <li className="language"><TbBrandPython/><span> - General purpose</span></li>
                    <li className="language"><TbBrandTypescript/><span> - React</span></li>
                </ul>
            </div>
            <div className="song">
                <h2>Song of the month</h2>
                <iframe title="Song of the month" src="https://open.spotify.com/embed/track/1ZPeaPDjQOOC8hw1mNjyjF?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                </iframe>
            </div>
        </div>
    );
}