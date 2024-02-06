import FlexContainer from '@/components/FlexContainer/FlexContainer';
import ModelPanel from '@/components/ModelPanel/ModelPanel';
import Paragraph from '@/components/Paragraph/Paragraph';
import { Model } from '@/constants/types';

export default function Models() {
    const models: Model[] = [
        {
            name: 'Self-portrait',
            desc: 'A high-poly sculpt of myself as a Greco-Roman bust, with carish stylization.',
            image_url: '/bust_transparent.png',
            vertices: 4000000,
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
