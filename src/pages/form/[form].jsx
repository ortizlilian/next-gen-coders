import React from "react";

function Form () {

    return <>
     <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
        <div className='p-4'>
            <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Enter your Name</label>
               <input className="border-2 rounded-lg p-3 flex border-gray-300" 
               type="text" 
               />
                </div>
                <div className= 'flex flex-col py-2'>
                <label className="uppercase text-sm py-2">Enter your Email</label> 
                <input className="border-2 rounded-lg p-3 flex border-gray-300" 
               type="email" 
               />
                </div>
                <div className= 'flex flex-col py-2'>
                <label className="uppercase text-sm py-2">Enter your Subject</label> 
                <input className="border-2 rounded-lg p-3 flex border-gray-300" 
               type="email" 
               />
                </div>
                <div className= 'flex flex-col py-2'>
                <label className="uppercase text-sm py-2">Enter your Message</label> 
                <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='10'></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                </div>
            </form>

        </div>

     </div>
    
    </>

}

export default Form;