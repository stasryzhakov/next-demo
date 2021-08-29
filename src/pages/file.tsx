import { promises as fs } from 'fs';
import path from 'path';

type MarkdownFile = {
    filename: string;
    content: string;
};

export default function File({ mds }: { mds: MarkdownFile[] }) {
    return (
        <ul>
            {mds.map((md: MarkdownFile, index) => (
                <li key={index}>{md.content}</li>
            ))}
        </ul>
    );
}

export async function getStaticProps() {
    const markdownDirectory = path.join(process.cwd(), 'src/md');
    const filenames = await fs.readdir(markdownDirectory);

    const posts = filenames.map(async filename => {
        const filePath = path.join(markdownDirectory, filename);
        const fileContents = await fs.readFile(filePath, 'utf8');

        // Generally you would parse/transform the contents
        // For example you can transform markdown to HTML here

        return {
            filename,
            content: fileContents,
        };
    });
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            mds: await Promise.all(posts),
        },
    };
}
