import Link from 'next/link';

export default function ErrorMessage() {
    return (
        <div className='error-message'>
            ERROR. This page does not exist, please return{' '}
            <Link href='/' className='error-message__link'>
                HOME
            </Link>
            .
        </div>
    );
}
