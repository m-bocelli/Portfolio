import name from '../../assets/icon.png';
import { NavLink } from 'react-router-dom';
import './AboutPage.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='name'>
                <img src={name} alt='Michael Bocelli'/>
            </div>
            <h1>Portfolio</h1>
            <div className='line'></div>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-link'><NavLink className='link' to={'/projects'}>Projects</NavLink></li>
                    <li className='nav-link'><NavLink className='link' to={'/projects'}>Assets</NavLink></li>
                    <li className='nav-link'><NavLink className='link' to={'/projects'}>About</NavLink></li>
                </ul>
            </nav>
        </div> 
    );
}