import { Model } from '@/constants/types';
import styles from './ModelPanel.module.css';
import Paragraph from '../Paragraph/Paragraph';

export default function ModelPanel({ model }: { model: Model }) {
    return (
        <div className={styles.container}>
            <h2>{model.name}</h2>
            <img src={model.image_url} />
            <Paragraph>{model.desc}</Paragraph>
        </div>
    );
}
