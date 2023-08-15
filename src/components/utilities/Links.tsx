import '../../styles/Links.css';
import {
    FaItchIo,
    FaLinkedin,
    FaInstagram,
} from '../../../node_modules/react-icons/fa';

export function Links(): JSX.Element {
    return (
        <div className='link__container'>
            <a
                className='link__icon'
                href='https://mikeyyyyyyyyyyyyyyyyyyyyy.itch.io/'
                target='_blank'
            >
                <FaItchIo />
            </a>

            <a
                className='link__icon'
                href='https://www.linkedin.com/in/michael-bocelli/'
                target='_blank'
            >
                <FaLinkedin />
            </a>

            <a
                className='link__icon'
                href='https://www.instagram.com/michaelbocelli_/'
                target='_blank'
            >
                <FaInstagram />
            </a>
        </div>
    );
}
