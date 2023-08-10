import '../styles/FlexContainer.css';

export function FlexContainer({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return <div className='flex-container'>{children}</div>;
}
