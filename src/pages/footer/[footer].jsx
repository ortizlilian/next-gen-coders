import { AiOutlineInstagram } from "react-icons/ai";
import {FaFacebookF, FaGithub, FaTwitter} from "react-icons/fa";
import React from "react";


function Footer() {
    return (
        <>
        <div className="">
              
        <div className="justify-between ">
                  
                    <ul className="flex justify-between  ">
                        <li className="text-sm py-2 ">Home</li>
                        <li className="text-sm py-2 ">About</li>
                        <li className="text-sm py-2 ">Team</li>
                    </ul>
                </div>
        <div className="flex py-4 justify-between ">
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