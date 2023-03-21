import { AiOutlineInstagram } from "react-icons/ai";
import {FaFacebookF, FaGithub, FaTwitter} from "react-icons/fa";
import React from "react";


function Footer() {
    return (
        <>
        <div className="rounded-div mt-8 pt-8 text-primary">
              
        <div className="justify-between ">
                  
                    <ul className="flex justify-between  ">
                        <li className="text-sm py-2 ">About</li>
                        <li className="text-sm py-2 ">Contact</li>
                        <li className="text-sm py-2 ">Legal</li>
                    </ul>
                </div>
        <div className=" text-center flex py-4 justify-between ">
    <AiOutlineInstagram />
    <FaFacebookF />
    <FaGithub/>
    <FaTwitter/>
                            </div>
        <p className= 'text-center py-4'>Powered by Group 9</p>
        </div>
       
        
       
        

        </>

    )

}

export default Footer;