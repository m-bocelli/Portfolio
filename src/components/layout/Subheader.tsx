import '../../styles/Subheader.css';

export function Subheader({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return <h3 className='subheader'>{children}</h3>;
}
