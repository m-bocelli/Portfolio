import '../styles/Header.css';

export function Header() {
  return (
    <section className='header'>
      <h1>MICHAEL BOCELLI</h1>
      <code>
        <div className='header__var'>
          <span style={{ color: 'paleturquoise', fontWeight: '700' }}>
            const
          </span>{' '}
          <span>iAmAn = </span>
        </div>
        <blockquote className='header__mini-bio'>
          'Undergraduate software developer.'
          <span style={{ fontWeight: '400' }}>;</span>
        </blockquote>
      </code>
    </section>
  );
}
