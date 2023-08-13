import { NavLink } from 'react-router-dom';
import '../../styles/ErrorMessage.css';

export function ErrorMessage() {
    return (
        <div className='error-message'>
            ERROR. This page does not exist, please return{' '}
            <NavLink to='/' className='error-message__link'>
                HOME
            </NavLink>
            .
        </div>
    );
}
