import { useRouter } from "next/router";
import { getBlogPostsByCategory } from "@/utils/blogUtils";
import blogData from '@/data/blogData.json'


export default function CategoryPage({posts}) {
    const router = useRouter();
    const {category} = router.query;

    return (
        <div className="block my-4 max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700" >
            <h1 className="mb-4 font-semibold text-primary dark:text-primary-500">Category: {category}</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h1 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{post.title}</h1>
                    <h2 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{post.author}</h2>
                    <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">{post.date}</p>
                    <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">{post.content}</p>
                </div>
                
            ))}
        </div>
    )
}

export async function getServerSideProps({params}) {
    const {category} = params;
    const posts = await getBlogPostsByCategory(category, blogData);

    return {
        props: {
            posts
        }
    }
}