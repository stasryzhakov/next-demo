import { ArticleList } from '../components/ArticleList';
import { ArticleItem } from '../components/Article';

export default function Posts({ articles }: { articles: ArticleItem[] }) {
    return <ArticleList articles={articles} />;
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`);

    const articles = await res.json();

    return {
        props: {
            articles,
        },
    };
};
