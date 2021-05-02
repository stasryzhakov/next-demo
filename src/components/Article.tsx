import { FC } from 'react';
import styles from '../../styles/Article.module.scss';
import Link from 'next/link';

export type ArticleItem = {
    userId?: string;
    id?: string;
    title?: string;
    body?: string;
};

export const Article: FC<ArticleItem> = ({ title, body, id }) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.body}>{body}</p>

            <Link href="/articles/[id]" as={`/articles/${id}`}>
                Read More &#62;
            </Link>
        </div>
    );
};
