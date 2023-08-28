import styles from './InterestList.module.css';

export default function InterestList({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return <ul className={styles.list}>{children}</ul>;
}
