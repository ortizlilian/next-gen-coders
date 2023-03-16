import React from "react";
import { useState } from "react";
import axios from 'axios';



function Form () {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        content:'',
        date: '',
        category: '',

    })

    const handleChange = (event) => {
         setFormData({
            ...formData,
            [event.target.name]: event.target.value
         });
        console.log(event.target.value);

    }

    const handleSubmit =  (event) => {
        event.preventDefault();
        
        axios.post('/api/blog/post', formData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        

    };
   

    return <>

   <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
        <div className='p-4'>

            <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols gap-4 w-full py-2">
                <div className="flex flex-col py-2">  
               <input name = 'title'onChange={handleChange} className="border-2 rounded-lg p-3 flex border-gray-300" 
               type="text" placeholder="Title" 
               />
                </div>
                <div className="flex flex-col py-2">  
               <input name = 'author' onChange={handleChange} className="border-2 rounded-lg p-3 flex border-gray-300" 
               type="text" placeholder="Author" 
               />
                </div>
               
                <div className= 'flex flex-col py-2'>
                <textarea  name = 'content' onChange={handleChange} className="border-2 rounded-lg p-3 border-gray-300" rows='10' placeholder="Content"></textarea>
                </div>

                <div className="flex flex-col py-2">  
               <input name = 'date' onChange={handleChange} className="border-2 rounded-lg p-3 flex border-gray-300" 
               type="date"
               />
                </div>
                <div className="flex flex-col py-2">  
               <input name = 'category' onChange={handleChange} className="border-2 rounded-lg p-3 flex border-gray-300" 
               type="text" placeholder="Category" 
               />
                </div>

              
                <button className="bg-[#1da1f2] w-full p-4 text-gray-100 mt-4">Send Message</button>
                </div>
            </form>

        </div>

     </div>


    
    </>

}

export default Form;