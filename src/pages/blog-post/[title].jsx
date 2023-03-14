import { useRouter } from 'next/router';


function BlogPage() {

    const router = useRouter();
    const {title} = router.query

    return (
        <h1>{title}</h1>
    )
}

export default BlogPage;
