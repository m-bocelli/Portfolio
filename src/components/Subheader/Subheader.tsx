export default function Subheader({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <h3 className='subheader' scroll-anim='true'>
            {children}
        </h3>
    );
}
