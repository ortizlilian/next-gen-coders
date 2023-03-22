import { AiOutlineInstagram } from "react-icons/ai";
import {FaFacebookF, FaGithub, FaTwitter} from "react-icons/fa";
import React from "react";


function Footer() {
    return (
        <>
        <div className="flex flex-col items-center">
              
        <div className="">
                  
                    <ul className="flex">
                        <li className="text-sm py-2 ">Home</li>
                        <li className="text-sm py-2 ">About</li>
                        <li className="text-sm py-2 ">Team</li>
                    </ul>
                </div>
        <div className="flex py-4">
    <AiOutlineInstagram />
    <FaFacebookF />
    <FaGithub/>
    <FaTwitter/>
                            </div>
        <p className= 'text-center py-4'>2023 Copyright | All Rights Reserved</p>
        </div>
       
        
       
        

        </>

    )

}

export default Footer;