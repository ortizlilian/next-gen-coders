import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";



function Footer() {
    return (
        <>
        <div className=" flex flex-col items-center  ">
              
        <div className=" Space flex py-4 justify-between">
    
    <FaLinkedin />
    <FaGithub/>
    <FaTwitter/>
                            </div>
        
        
        
        <div className="justify-between">
                  
                    <ul className=" Space flex justify-between ">
                        <li className="text-sm py-2 "> Home</li>
                        <li className="text-sm py-2 ">About</li>
                        <li className="text-sm py-2 ">Team</li>
                    </ul>
                </div>
       
        <p className= 'text-center py-4'>2023 Copyright | All Rights Reserved</p>
        </div>
       
        
       
        

        </>

    )

}

export default Footer;