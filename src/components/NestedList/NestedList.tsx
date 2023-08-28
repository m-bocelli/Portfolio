import { NestedListItem } from '@/constants/types';
import styles from './NestedList.module.css';
export default function NestedList({
    NestedListItems,
}: {
    NestedListItems: NestedListItem[];
}) {
    const items = NestedListItems.map((item) => {
        return (
            <li key={item.title} scroll-anim='true'>
                <strong>{item.title}</strong>
                <ul>
                    {item.desc.map((descItem) => {
                        return <li key={descItem}>{descItem}</li>;
                    })}
                </ul>
            </li>
        );
    });

    return <ul className={styles.nested}>{items}</ul>;
}
