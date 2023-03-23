import Image from 'next/image'
import Link from 'next/link'

export default function teamPage() {

return (
    
    <>
    <h1 className='text-2xl font-bold text-center'>MEET OUR TEAM</h1>  
    <Link href={"https://github.com/ortizlilian"} target="_blank">
        <section 
            className="rounded-md p-6 text-center shadow-lg md:p-12 md:text-left">
            <div className="flex justify-center">
                <div className="max-w-3xl">
                    <div className="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
                        <div className="md:flex md:flex-row">
                            <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                                <Image src="/lilian.jpg" width={200} height={200}
                                className="rounded-full shadow-md dark:shadow-black/30"
                                alt="Team member Lilian" />
                            </div>
                            <div className="md:ml-6">
                                <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                                    Lilian Ortiz
                                </p>
                                <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                                    I am a junior frontend web developer deeply passionate about the impact of AI on shaping the future of humanity, particularly in regards to decision-making processes and the human experience of free will. I bring expertise in JavaScript, jQuery, REST apis, and AWS Architecture, and I invite you to explore some of my projects below.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Link>
    <Link href={"https://github.com/ObianuoObi"} target="_blank">
        <section 
            className="rounded-md p-6 text-center shadow-lg md:p-12 md:text-left">
            <div className="flex justify-center">
                <div className="max-w-3xl">
                    <div className="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
                        <div className="md:flex md:flex-row">
                            <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                                <Image src="/obi.png" width={200} height={200}
                                className="rounded-full shadow-md dark:shadow-black/30"
                                alt="Team member Obi" />
                            </div>
                            <div className="md:ml-6">
                                <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                                    Obinna Obianuo
                                </p>
                                <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis sem vel massa lobortis consequat. Nam tortor erat, commodo eu semper non, malesuada eget eros. Quisque vitae arcu imperdiet, vehicula magna vitae, porttitor magna. Proin magna nisi, semper sed dui vitae, condimentum rhoncus dolor. Sed quis libero tempus, congue massa nec, cursus sapien. Sed tempus quam erat, ut tristique ipsum sagittis vel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Link>
    <Link href={"https://github.com/nimscodes"} target="_blank">
        <section 
            className="rounded-md p-6 text-center shadow-lg md:p-12 md:text-left">
            <div className="flex justify-center">
                <div className="max-w-3xl">
                    <div className="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
                        <div className="md:flex md:flex-row">
                            <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                                <Image src="/prince.png" width={200} height={200}
                                className="rounded-full shadow-md dark:shadow-black/30"
                                alt="Team member Prince" />
                            </div>
                            <div className="md:ml-6">
                                <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                                    Prince Andrews Nimako
                                </p>
                                <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis sem vel massa lobortis consequat. Nam tortor erat, commodo eu semper non, malesuada eget eros. Quisque vitae arcu imperdiet, vehicula magna vitae, porttitor magna. Proin magna nisi, semper sed dui vitae, condimentum rhoncus dolor. Sed quis libero tempus, congue massa nec, cursus sapien. Sed tempus quam erat, ut tristique ipsum sagittis vel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Link>
    <Link href={"https://github.com/yogi-88"} target="_blank">
        <section 
            className="rounded-md p-6 text-center shadow-lg md:p-12 md:text-left">
            <div className="flex justify-center">
                <div className="max-w-3xl">
                    <div className="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
                        <div className="md:flex md:flex-row">
                            <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                                <Image src="/yogita.png" width={200} height={200}
                                className="rounded-full shadow-md dark:shadow-black/30"
                                alt="Team member Yogita" />
                            </div>
                            <div className="md:ml-6">
                                <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                                    Yogita Negi
                                </p>
                                <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis sem vel massa lobortis consequat. Nam tortor erat, commodo eu semper non, malesuada eget eros. Quisque vitae arcu imperdiet, vehicula magna vitae, porttitor magna. Proin magna nisi, semper sed dui vitae, condimentum rhoncus dolor. Sed quis libero tempus, congue massa nec, cursus sapien. Sed tempus quam erat, ut tristique ipsum sagittis vel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Link>
</>
    )
}