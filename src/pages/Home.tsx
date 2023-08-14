import { useEffect } from 'react';
import { lay, util } from '../components';
import { observeOnScroll } from '../scripts/observe-on-scroll';

export function Home() {
    useEffect(() => {
        observeOnScroll();
    }, []);
    return (
        <>
            <lay.Header />
            <lay.FlexContainer>
                <lay.Subheader>Bio</lay.Subheader>
                <util.Bio />
                <lay.Subheader>Interests</lay.Subheader>
                <util.InterestList />
                <lay.Subheader>Links</lay.Subheader>
                <util.Links />
            </lay.FlexContainer>
        </>
    );
}
