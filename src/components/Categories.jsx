import Link from "next/link";



const Categories = () => {
  return (
    <div className="ml-10 mx-auto w-1/4 lg:mx-0 lg:max-w-none lg:flex-none bg-blue-400">
        <h1 className="ml-10 text-lg font-bold mb-4 text-center">Categories section</h1>
        <ul className="flex flex-col space-y-1 font-bold text-center">
            <div>
                <Link href="/categories/Tutorials">Tutorials</Link>
            </div>
            <br/>
            <div>
                <Link href="/categories/News"><h2 className="flex items-center ml-20">
                    News</h2></Link>
            </div>
            <br/>
            <div>
                <Link href="/categories/Libraries"><h2 className="flex items-center space-x-6 ml-20">
                   Libraries</h2></Link>
            </div>
            <br/>
            <div>
                <Link href="/categories/Frameworks">Frameworks</Link>
            </div>
            <br/>
        </ul>
    </div>
  )
}

export default Categories;