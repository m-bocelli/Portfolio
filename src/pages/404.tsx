import FlexContainer from '@/components/FlexContainer/FlexContainer';
import Subheader from '@/components/Subheader/Subheader';
import Paragraph from '@/components/Paragraph/Paragraph';
import Link from 'next/link';

export default function Custom404() {
    return (
        <FlexContainer>
            <Subheader>404 Error</Subheader>
            <Paragraph>
                Please return{' '}
                <Link href='/' style={{ color: 'var(--text)' }}>
                    HOME
                </Link>
            </Paragraph>
        </FlexContainer>
    );
}
