import { useRouter } from 'next/router';
import { getAllSlugs, getPostData } from '../../../lib/post';
import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';



export default function BlogPost(props) {
    console.log(props);
    const { postData } = props;
    return (
        <div className='flex justify-center align-center my-10'>
            <div className='flex flex-col justify-between gap-2 mx-auto max-w-[600px] '>
                <Image src={postData.coverImage} width={600} height={300}/>
                <h1 className='text-2xl font-bold'>{postData.title}</h1>
                <p>
                    {postData.author} / <span className='font-normal'>{postData.publishDate}</span> 
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
