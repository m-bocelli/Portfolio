import { lay, util } from '../components';

export function Home() {
    return (
        <>
            <lay.Header />
            <lay.FlexContainer>
                <lay.Subheader>Bio</lay.Subheader>
                bluh
                <lay.Subheader>Interests</lay.Subheader>
                <util.InterestList></util.InterestList>
            </lay.FlexContainer>
        </>
    );
}
