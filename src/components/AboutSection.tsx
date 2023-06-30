import head from "../assets/head.png"

function About() {
    return (
        <div className="about-body">
            <div className="head">
                <img src={head}></img>
            </div>
            <div>
                <p>Computer science student at the University of Delaware.</p>
            </div>
            <iframe src="https://open.spotify.com/embed/track/1ZPeaPDjQOOC8hw1mNjyjF?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    );
}

export default About;