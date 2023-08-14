import '../../styles/Bio.css';

export function Bio(): JSX.Element {
    let year: string = 'Third';
    return (
        <div className='bio__text' scroll-anim='true'>
            {year} year computer science student residing in Pennsylvania, US.
            Functionally fluent in English and German.
        </div>
    );
}
