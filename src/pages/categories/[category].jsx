import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link';
import axios from "axios";

function Card({ item }) {
    const { id, title, author, date, category } = item || {};

    return (
        <Link href={`/${id}`}>
          <div className="block my-4 max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 ">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{title}</h5>
            <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">{author}</p>
            <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">{date}</p>
            <p className="mb-4 font-semibold text-primary dark:text-primary-500">{category}</p>
          </div>
        </Link>
    );
}


export default function getCategoryPosts({posts}) {
    const [cardState, setCardState] = useState([]);

    // setCardState(posts);
    
    // useEffect(() => {
    //     axios
    //     .get('/api/posts/get')
    //     .then(res => {
    //         setCardState(res.data);
    //     })
    // }, []);    

    if(cardState.length > 0) {
        return(
            <div className="flex flex-col">
                {cardState.map(item => {
                    return <Card key={item.id} item={item} />;
                })}
            </div>
        );
    } else {
        return(
            <div>            
                <div>
                    No posts
                </div>
            </div>
        );
    }

}

export async function getServerSideProps({ params }) {
    const req = await fetch(`/api/posts/${params.category}`);
    console.log(req)
    const data = await req.json();

    return {
        props: { posts: data },
    }
}