export default function Header() {
    return (
        <div className='header'>
            <h1>MICHAEL BOCELLI</h1>
            <div>
                <img
                    className='header__image'
                    src='bust_transparent.png'
                    alt='my head'
                />
            </div>
            <div className='header__code'>
                <code>
                    <div className='header__var'>
                        <span
                            style={{
                                color: 'paleturquoise',
                                fontWeight: '700',
                            }}
                        >
                            const
                        </span>{' '}
                        <span>iAmAn = </span>
                    </div>
                    <blockquote className='header__mini-bio'>
                        'Undergraduate software developer.'
                        <span style={{ fontWeight: '400' }}>;</span>
                    </blockquote>
                </code>
            </div>
        </div>
    );
}
