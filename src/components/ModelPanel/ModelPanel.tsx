import { Model } from '@/constants/types';
import styles from './ModelPanel.module.css';
import Paragraph from '../Paragraph/Paragraph';

export default function ModelPanel({ model }: { model: Model }) {
    return (
        <div className={styles.container} scroll-anim='true'>
            <h2>{model.name}</h2>
            <img src={model.image_url} className={styles.image} />
            <Paragraph>{model.desc}</Paragraph>
            <Paragraph>{model.vertices} vertices</Paragraph>
        </div>
    );
}
