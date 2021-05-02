import { GetServerSideProps, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ArticleItem } from '../../components/Article';
import Link from 'next/link';

const article = ({ article }: { article: ArticleItem }) => {
    return (
        <>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    );
};

// export const getServerSideProps: GetServerSideProps = async context => {
//     const {
//         params: { id },
//     } = context;
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//
//     const article = await res.json();
//
//     return {
//         props: {
//             article,
//         },
//     };
// };

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context?.params?.id}`);

    const article = await res.json();

    return {
        props: {
            article,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const articles = await res.json();

    const ids = articles.map((article: ArticleItem) => article.id);

    const paths = ids.map((id: string) => ({
        params: {
            id: id.toString(),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export default article;
