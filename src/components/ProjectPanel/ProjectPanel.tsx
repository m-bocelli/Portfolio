import { useEffect } from 'react';
import { observeOnScroll } from '@/scripts/observe-on-scroll';
import type { Repo } from '@/constants/types';
import styles from './ProjectPanel.module.css';

export default function ProjectPanel({ repo }: { repo: Repo }): JSX.Element {
    useEffect(() => {
        observeOnScroll();
    }, []);

    const techStack = repo.topics.map((techItem: string, index: number) => (
        <li key={index}>{techItem}</li>
    ));

    return (
        <div className={styles.container} scroll-anim='true'>
            <h3 className={styles.title}>{repo.name.toUpperCase()}</h3>
            <div className='image_container'>
                <a href={repo.html_url} target='_blank'>
                    <img
                        className={styles.image}
                        src={repo.name.concat('.png')}
                    ></img>
                </a>
            </div>
            <p>
                <a className={styles.link} href={repo.html_url} target='_blank'>
                    SRC
                </a>
                Updated {parseInt(repo.pushed_at.slice(0, 4))}.{' '}
                {parseInt(repo.pushed_at.slice(5, 7))}
            </p>
            <p className={styles.description}>{repo.description}</p>
            <p style={{ textAlign: 'left' }}>Tech</p>
            <ul className={styles.stack}>{techStack}</ul>
        </div>
    );
}
