import styles from './ResumeEmbed.module.css';

export default function ResumeEmbed({ path }: { path: string }) {
    return (
        <div className={styles.container}>
            <embed src={path} className={styles.window} />
        </div>
    );
}
