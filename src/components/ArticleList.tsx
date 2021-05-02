import { Article, ArticleItem } from './Article';
import styles from '../../styles/ArticleList.module.scss';

export const ArticleList = ({ articles }: { articles: ArticleItem[] }) => {
    return (
        <div className={styles.list}>
            {articles.map((article: ArticleItem, index: number) => (
                <Article key={index} body={article.body} title={article.title} id={article.id} />
            ))}
        </div>
    );
};
