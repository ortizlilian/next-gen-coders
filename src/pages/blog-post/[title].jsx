import { useRouter } from 'next/router';
import { getAllSlugs, getPostData } from '../../lib/posts';
import styles from '../../styles/Blog.module.css'
import Link from 'next/link';
import Image from 'next/image';



export default function BlogPost(props) {
    console.log(props);
    const { postData } = props;
    return (
        <div className={styles.main}>
            <div className='bg-red-900'>
                <Image src={postData.coverImage} width={600} height={300}/>
                <h1>{postData.title}</h1>
                <p>
                    {postData.author} / {postData.publishDate}
                </p>
                <p>{postData.content}</p>
                <p>🔙 {" "}
                    <Link legacyBehavior href="/">
                        <a className='no-underline text-black'>Back to Home</a>
                    </Link>
                </p>
            </div>
        </div>
    )
}

// export function getStaticPaths() {
//     const paths = getAllSlugs();
//     return {
//         paths,
//         fallback: false,
//     }
// }

export function getServerSideProps({ params }) {
    console.log("params", params);
    const postData = getPostData(params.title)
    return {
        props: {
            postData,
        }
    }
}
