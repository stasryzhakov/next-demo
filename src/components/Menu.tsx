import Link from 'next/link';
import styles from '../../styles/Menu.module.scss';

export const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="/">Home</Link>
                </li>

                <li className={styles.item}>
                    <Link href="/about">About</Link>
                </li>

                <li className={styles.item}>
                    <Link href="/posts">Posts</Link>
                </li>

                <li className={styles.item}>
                    <Link href="/covid-stats">Covid Stats</Link>
                </li>

                <li className={styles.item}>
                    <Link href="/covid-stats-live">Covid Stats (live)</Link>
                </li>

                <li className={styles.item}>
                    <Link href="/file">File</Link>
                </li>
            </ul>
        </nav>
    );
};
