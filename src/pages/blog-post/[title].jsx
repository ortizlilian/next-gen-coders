import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import Link from 'next/link';

export default function BlogPost() {
    const router = useRouter()
    const {title} = router.query

    const [postState, setPostState] = useState([]);
    
    useEffect(() => {
        axios
        .get(`/api/blog/retrieveone/?title=${title}`)
        .then(res => {
            setPostState(res.data);
        })
    }, []);    

    return (
        <div>
            <div>
                <h1>{postState.title}</h1>
                <p>{postState.author} / {postState.date}</p>
                <p>{postState.content}</p>
                    <Link legacyBehavior href="/">
                <p>🔙 {" "}
                        <a className='no-underline text-black'>Back to Home</a>
                </p>
                    </Link>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: { },
    }
}
