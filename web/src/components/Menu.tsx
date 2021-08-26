import Link from 'next/link';
import styles from '../../styles/Menu.module.scss';

const routes = ['', 'about', 'posts', 'covid-stats', 'covid-stats-live', 'file', 'redux'];

export const Menu = () => {
    return (
        <>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    {routes.map(route => (
                        <li key={route} className={styles.item}>
                            <Link href={`/${route}`}>{route}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};
