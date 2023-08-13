import '../../styles/SortMenu.css';

export function SortMenu({
    setSortType,
}: {
    setSortType: (_: number) => void;
}): JSX.Element {
    return (
        <div>
            Sort by{' '}
            <select>
                <option onClick={() => setSortType(0)}>RECENT</option>
                <option onClick={() => setSortType(1)}>OLDEST</option>
            </select>
        </div>
    );
}
