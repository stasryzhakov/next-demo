import styles from '../../styles/Layout.module.scss';
import { Menu } from './Menu';

export const Layout = ({ children }: { children: any }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Menu />
                <div className={styles.main}>{children}</div>
            </div>
        </div>
    );
};
