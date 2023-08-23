import { useEffect } from 'react';
import { observeOnScroll } from '../scripts/observe-on-scroll';
import Header from '../components/Header';
import Bio from '../components/Bio';
import FlexContainer from '../components/FlexContainer';
import InterestList from '../components/InterestList';
import Subheader from '../components/Subheader';

export default function Home() {
    useEffect(() => {
        observeOnScroll();
    }, []);
    return (
        <>
            <Header />
            <FlexContainer>
                <Subheader>Bio</Subheader>
                <Bio />
                <Subheader>Interests</Subheader>
                <InterestList />
                <Subheader>Links</Subheader>
            </FlexContainer>
        </>
    );
}
