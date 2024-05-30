import Header from '../components/Header/Header';
import FlexContainer from '../components/FlexContainer/FlexContainer';
import InterestList from '../components/InterestList/InterestList';
import Subheader from '../components/Subheader/Subheader';
import Paragraph from '../components/Paragraph/Paragraph';
import Links from '../components/Links/Links';
import { Link } from '../constants/types';

export default function Home() {
    const links: Link[] = [
        { title: 'GitHub', url: 'https://github.com/m-bocelli' },
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/michael-bocelli/',
        },
        { title: 'itch.io', url: 'https://mikeyyyyyyyyyyyyyyyyyyyyy.itch.io/' },
    ];

    return (
        <>
            <Header
                hero='michael bocelli'
                image='bust_transparent.png'
                bio='full-stack software engineer'
            />
            <FlexContainer>
                <Subheader>Bio</Subheader>
                <Paragraph>
                    University of Delaware graduate with a degree in computer
                    science, May 2024. Fluent in English, B2 upper-intermediate
                    in German.
                </Paragraph>
                <Subheader>Interests</Subheader>
                <InterestList>
                    <li scroll-anim='true'>Full-stack development</li>
                    <li scroll-anim='true'>Game dev.</li>
                    <li scroll-anim='true'>3D modeling</li>
                    <li scroll-anim='true'>Weightlifting</li>
                </InterestList>
                <Subheader>Links</Subheader>
                <Links links={links} />
            </FlexContainer>
        </>
    );
}
