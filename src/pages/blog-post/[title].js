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
        <div className='flex justify-center align-center my-10'>
            <div className='flex flex-col justify-between gap-2 mx-auto max-w-[600px]'>
                <h1 className='text-2xl font-bold'>{postState.title}</h1>
                <p className="font-bold">{postState.author} / <span className='font-normal'>{postState.date}</span></p>
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
