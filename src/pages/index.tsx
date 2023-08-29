import { useEffect } from 'react';
import { observeOnScroll } from '../scripts/observe-on-scroll';
import Header from '../components/Header/Header';
import Bio from '../components/Paragraph/Paragraph';
import FlexContainer from '../components/FlexContainer/FlexContainer';
import InterestList from '../components/InterestList/InterestList';
import Subheader from '../components/Subheader/Subheader';
import Paragraph from '../components/Paragraph/Paragraph';

export default function Home() {
    useEffect(() => {
        observeOnScroll();
    }, []);
    return (
        <>
            <Header
                hero='michael bocelli'
                image='Bust_Transparent.png'
                bio='undergraduate software engineer'
            />
            <FlexContainer>
                <Subheader>Bio</Subheader>
                <Paragraph>
                    Third year computer science student residing in
                    Pennsylvania, US. Functionally fluent in English and German.
                </Paragraph>
                <Subheader>Interests</Subheader>
                <InterestList>
                    <li scroll-anim='true'>FullStack development</li>
                    <li scroll-anim='true'>Game dev.</li>
                    <li scroll-anim='true'>3D modeling</li>
                    <li scroll-anim='true'>Weightlifting</li>
                </InterestList>
                <Subheader>Links</Subheader>
            </FlexContainer>
        </>
    );
}
