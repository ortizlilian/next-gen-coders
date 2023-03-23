import Link from 'next/link';

export default function aboutPage() {

    return (
        <div className='flex justify-center align-center my-10'>
            <div className='flex flex-col justify-between gap-2 mx-auto max-w-[600px]'>
                <h1 className='text-2xl font-bold'>ABOUT US</h1>                
                <p>
                    Welcome to our blog for new developers! Our goal is to provide a space where aspiring programmers can find valuable resources, insights, and tips on their journey to becoming successful developers.
                </p>
                <p> 
                    We know that the world of coding can seem overwhelming at times, but we believe that everyone has the potential to learn and excel in this exciting field. Whether you're just starting out or looking to expand your skillset, we're here to help you navigate the world of software development.
                </p>
                <p>
                    Our team of experienced developers and industry experts is dedicated to providing high-quality content that is both informative and engaging. From tutorials and how-to guides to industry news and interviews with seasoned professionals, we've got you covered.
                </p>
                <p>    
                    At our blog, you'll find articles on a wide range of topics, including programming languages, software engineering, web development, mobile app development, and more. We strive to make our content accessible and easy to understand, regardless of your level of expertise.
                </p>
                <p>     
                    We also believe that community is a crucial part of the learning process. That's why we encourage our readers to engage with each other and with us. Feel free to share your thoughts, questions, and experiences on our social media.
                </p>
                <p> 
                    Thank you for choosing our blog as your go-to resource for all things programming. We're excited to be a part of your journey and look forward to helping you became a web developer.
                </p>
                <Link legacyBehavior href="/">
                    <p>🔙 {" "}
                            <a className='no-underline text-black'>Back to Home</a>
                    </p>
                </Link>
            </div>
        </div>
    )
}
