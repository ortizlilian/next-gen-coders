import React, { useState, useEffect } from "react";
import Link from 'next/link';
import axios from "axios";

function Card({ item }) {
    const { id, title, author, date, category } = item || {};

    return (
        <Link href={`/${id}`}>
          <div>
            <h2>{title}</h2>
            <h5>{author}</h5>
            <p>{date}</p>
            <p>{category}</p>
          </div>
        </Link>
    );
}


export default function BlogCards() {
    
    const [cardState, setCardState] = useState([]);
    
    useEffect(() => {
        axios
        .get('../../index.json')
        .then(res => {
            setCardState(res.data);
        })
    }, []);    

    if(cardState.length > 0) {
        return(
            <div>            
                <div>
                    {cardState.map(item => {
                        return <Card key={item.id} item={item} />;
                    })}
                </div>
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