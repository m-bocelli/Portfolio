import { FaLinkedin, FaSquareGithub, FaInstagram, FaItchIo } from "react-icons/fa6";

export default function Footer() {
    return(
        <div className='footer'>
            <h2>Links</h2>
            <div className='link-icons'>
                <a href='https://github.com/m-bocelli'><FaSquareGithub/></a>
                <a href='https://www.linkedin.com/in/michael-bocelli' target="_blank"><FaLinkedin/></a>
                <a href='https://www.instagram.com/michaelbocelli_/' target="_blank"><FaInstagram/></a>
                <a href='https://mikeyyyyyyyyyyyyyyyyyyyyy.itch.io/' target="_blank"><FaItchIo/></a>
            </div>
        </div>
    );
}