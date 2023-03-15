import Link from 'next/link';

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

export default function BlogCards({ data }) {
    return(
        <div>            
            <div>
                {data.map(item => 
                    <Card item={item} />
                )}
            </div>
        </div>
    );
}