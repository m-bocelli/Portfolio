import { lay, util } from '../components';
import { NestedListItem } from '../constants/project-info';

export function Resume() {
    const education: NestedListItem[] = [
        {
            title: 'University of Delaware',
            desc: ['B.S. in computer science', 'Expected May 2024'],
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
            title: 'Teaching Assistant for CISC275: Intor to Software Engineering',
            desc: ['University of Delaware', 'August 2023 - Current'],
        },
        {
            title: 'Teaching Assistant for CISC106: General CS for Engineers',
            desc: ['University of Delaware', 'August 2022 – December 2022'],
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
            title: 'Presidential Achievement - Marconetti scholarship',
            desc: ['2022 - Current'],
        },
    ];
    return (
        <>
            <lay.FlexContainer>
                <lay.Subheader>Education</lay.Subheader>
                <util.NestedList NestedListItems={education} />
                <lay.Subheader>Experience</lay.Subheader>
                <util.NestedList NestedListItems={experience} />
                <lay.Subheader>Merit</lay.Subheader>
                <util.NestedList NestedListItems={merit} />
            </lay.FlexContainer>
        </>
    );
}
