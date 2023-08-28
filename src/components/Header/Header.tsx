import FlexContainer from '../FlexContainer/FlexContainer';
import styles from './Header.module.css';

interface HeaderProps {
    hero: string;
    image: string;
    bio: string;
}

export default function Header(props: HeaderProps) {
    return (
        <div className={styles.container}>
            <h1>{props.hero.toUpperCase()}</h1>
            <div>
                <img className={styles.image} src={props.image} alt='my head' />
            </div>
            <code className={styles.code}>
                <div className={styles.var}>
                    <span
                        style={{
                            color: 'paleturquoise',
                            fontWeight: '700',
                        }}
                    >
                        const
                    </span>{' '}
                    <span>mikey = </span>
                </div>
                <blockquote className={styles.bio}>
                    '{props.bio}'<span style={{ fontWeight: '400' }}>;</span>
                </blockquote>
            </code>
        </div>
    );
}
