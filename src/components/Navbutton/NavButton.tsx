import Link from 'next/link';

export default function NavButton({
    pageName,
}: {
    pageName: string;
}): JSX.Element {
    return (
        <>
            <li className='navButton'>
                <Link href={'./'.concat(pageName.toLowerCase())}>
                    {pageName.toUpperCase()}
                </Link>
            </li>
        </>
    );
}
