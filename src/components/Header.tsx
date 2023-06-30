import name from '../assets/icon.png'
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <div className='header'>
            <div className='name'>
                <img src={name} alt='Michael Bocelli'/>
            </div>
            <h1>Portfolio</h1>
            <div className='line'></div>
            <nav>
                <ul>
                    <li><NavLink className='link' to={'/projects'}>Projects</NavLink></li>
                    <li><NavLink className='link' to={'/projects'}>Assets</NavLink></li>
                    <li><NavLink className='link' to={'/projects'}>About</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;