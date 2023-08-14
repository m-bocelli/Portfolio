import { NestedListItem } from '../../constants/project-info';
import '../../styles/NestedList.css';

export function NestedList({
    NestedListItems,
}: {
    NestedListItems: NestedListItem[];
}) {
    const items = NestedListItems.map((item) => {
        return (
            <li key={item.title}>
                <strong>{item.title}</strong>
                <ul>
                    {item.desc.map((descItem) => {
                        return <li key={descItem}>{descItem}</li>;
                    })}
                </ul>
            </li>
        );
    });

    return <ul className='nested-list'>{items}</ul>;
}
