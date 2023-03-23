import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link';
import axios from "axios";
import Categories from "@/components/Categories";

function Card({ item }) {
    const { id, title, author, date, content } = item || {};

    return (
        <Link href={`/blog-post/${title.split(' ').join('-')}`}>
          <div className="block my-4 max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 ">
            <h1 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{title}</h1>
            <h2 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{author}</h2>
            <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">{date}</p>
            <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">{content}</p>
          </div>
        </Link>
    );
}

export default function getCategoryPosts({posts}) {
    const router = useRouter()
    const {category} = router.query

    const [categoryPostsState, setCategoryPostsState] = useState([]);

    useEffect(() => {
        axios
        .get(`/api/blog/retrievecategory?category=${category}`)
        .then(res => {
            setCategoryPostsState(res.data);
            console.log("test")
        })
    }, [category]);

    if(categoryPostsState.length > 0) {
        return(
            <div className='flex gap-20'>
                <Categories/>
                <div className="block my-4 max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 w-4/5" >
                <h1 className="mb-4 font-semibold text-primary dark:text-primary-500">Category: {category}</h1>
                    {categoryPostsState.map(item => {
                        return <Card key={item.id} item={item} />;
                    })}
                </div>
            </div>
        );
    } else {
        return(
            <div className='flex gap-20'>
                <Categories/>
                <div className="block my-4 max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 w-4/5" >
                <h1 className="mb-4 font-semibold text-primary dark:text-primary-500">Category: {category}</h1>
                    No posts
                </div>
            </div>
        );
    }

}

export async function getServerSideProps(context) {
    return {
        props: { },
    }
}