import { Link } from '@/constants/types';
import styles from './Links.module.css';
import FlexContainer from '../FlexContainer/FlexContainer';

interface LinksProps {
    links: Link[];
}

export default function Links(props: LinksProps) {
    return (
        <FlexContainer>
            {props.links.map(
                (link: Link, i: number): JSX.Element => (
                    <a
                        key={link.url}
                        className={styles.link_container}
                        href={link.url}
                        target='_blank'
                    >
                        <div
                            key={link.url}
                            className={styles.link_text}
                            style={{
                                textAlign: i % 2 == 0 ? 'left' : 'right',
                            }}
                        >
                            {link.title}
                        </div>
                    </a>
                )
            )}
        </FlexContainer>
    );
}
