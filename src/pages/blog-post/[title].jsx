import { useRouter } from 'next/router';
import { getAllSlugs, getPostData } from '../../../lib/post';
import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import handler from '../api/blog/getTitle';



export default function BlogPost() {
    const post = handler;

    // console.log(props);

    // const { postData } = props;
    return (
        <div className={styles.main}>
            <div className='bg-red-900'>
                {/* <Image src={postData.coverImage} width={600} height={300}/> */}
                <h1>{post.title}</h1>
                <p>
                    {post.author} / {post.date}
                </p>
                <p>{post.content}</p>
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

// export function getServerSideProps({ params }) {
//     console.log("params", params);
//     const postData = getPostData(params.title)
//     return {
//         props: {
//             postData,
//         }
//     }
// }
