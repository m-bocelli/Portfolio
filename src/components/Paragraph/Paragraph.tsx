import styles from './Paragraph.module.css';

export default function Paragraph({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <p className={styles.paragraph} scroll-anim='true'>
            {children}
        </p>
    );
}
