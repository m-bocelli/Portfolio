import { Link } from '@/constants/types';
import styles from './Links.module.css';

interface LinksProps {
    links: Link[];
}

export default function Links(props: LinksProps) {
    return (
        <div>
            {props.links.map(
                (link: Link, i: number): JSX.Element => (
                    <div
                        key={link.url}
                        className={styles.link_container}
                        style={{ textAlign: i % 2 == 0 ? 'left' : 'right' }}
                    >
                        <a
                            className={styles.link}
                            href={link.url}
                            target='_blank'
                        >
                            {link.title}
                        </a>
                    </div>
                )
            )}
        </div>
    );
}
