import { useEffect } from 'react';
import { NestedListItem } from '../constants/types';
import { observeOnScroll } from '../scripts/observe-on-scroll';
import FlexContainer from '../components/FlexContainer';
import NestedList from '../components/NestedList';
import Subheader from '../components/Subheader';

export default function Resume() {
    useEffect(() => {
        observeOnScroll();
    }, []);

    const gpa = 3.97;

    const education: NestedListItem[] = [
        {
            title: 'University of Delaware',
            desc: ['B.S. in computer science', 'Expected December 2024'],
        },
        {
            title: 'Universität Leipzig (study abroad)',
            desc: [
                'interDaF e.V. am Herder-Institut der Universität Leipzig',
                'January 2023',
            ],
        },
    ];

    const experience: NestedListItem[] = [
        {
            title: 'Teaching Assistant for CISC275: Intro to Software Engineering',
            desc: ['University of Delaware', 'August 2023 - Current'],
        },
        {
            title: 'Teaching Assistant for CISC106: General CS for Engineers',
            desc: ['University of Delaware', 'August 2022 – December 2022'],
        },
        {
            title: 'Charity Livestream Producer',
            desc: [
                'Raised over $1000 for the AbleGamers Foundation and the Chester County Foodbank respectively',
                'December 2018 - Current',
            ],
        },
        {
            title: 'Pool Manager/Supervisor and Valet Driver',
            desc: ['Applecross Club Operations LLC', 'May 2021 – August 2022'],
        },
    ];

    const merit: NestedListItem[] = [
        {
            title: 'Outstanding Junior Award',
            desc: ['2023'],
        },
        {
            title: 'Dr. Marion Wiley Memorial Award',
            desc: ['2023'],
        },
        {
            title: 'Presidential Achievement - Marconetti Scholarship',
            desc: ['2022 - Current'],
        },
    ];
    return (
        <>
            <FlexContainer>
                <h2>GPA: {`${gpa}`}</h2>
                <Subheader>Education</Subheader>
                <NestedList NestedListItems={education} />
                <Subheader>Experience</Subheader>
                <NestedList NestedListItems={experience} />
                <Subheader>Merit</Subheader>
                <NestedList NestedListItems={merit} />
            </FlexContainer>
        </>
    );
}
