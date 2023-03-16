import Link from "next/link";


const Categories = () => {
  return (
    <div className="mx-auto w-1/4 lg:mx-0 lg:max-w-none lg:flex-none bg-blue-400 ">
        <h1 className="text-lg font-bold mb-4 text-center">Categories section</h1>
        <ul className="flex flex-col space-y-1 font-bold text-center">
            <div>
                <Link href="/categories/tutorials">Tutorials</Link>
            </div>
            <br/>
            <div>
                <Link href="/categories/news">News</Link>
            </div>
            <br/>
            <div>
                <Link href="/categories/libraries">Libraries</Link>
            </div>
            <br/>
            <div>
                <Link href="/categories/frameworks">Frameworks</Link>
            </div>
            <br/>
        </ul>
    </div>
  )
}

export default Categories;