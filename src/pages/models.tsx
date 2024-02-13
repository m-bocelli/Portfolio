import FlexContainer from '@/components/FlexContainer/FlexContainer';
import ModelPanel from '@/components/ModelPanel/ModelPanel';
import Paragraph from '@/components/Paragraph/Paragraph';
import { Model } from '@/constants/types';

export default function Models() {
    const models: Model[] = [
        {
            name: 'Self-portrait',
            desc: 'A high-poly sculpt of myself as a Greco-Roman bust, with cartoonish stylization.',
            image_url: '/bust_transparent.png',
            vertices: 1335832,
        },
        {
            name: 'Low-poly Ship',
            desc: 'A low-poly pirate ship with UN decor, designed as a game asset for the 2024 Climate Game Jam.',
            image_url: '/ship.png',
            vertices: 7282,
        },
    ];
    return (
        <FlexContainer>
            {models.map((model: Model) => (
                <ModelPanel model={model}></ModelPanel>
            ))}
        </FlexContainer>
    );
}
