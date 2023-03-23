import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className=" flex flex-col items-center  ">
              
            <div className=" Space flex py-4 justify-between">    
                <FaLinkedin />
                <FaGithub/>
                <FaTwitter/>
            </div>        
        
            <div className="justify-between">                  
                <ul className=" Space flex justify-between ">
                    <Link href="/"><li className="text-sm py-2 "> Home</li></Link>
                    <Link href="/about"><li className="text-sm py-2 ">About</li></Link>
                    <Link href="/team"><li className="text-sm py-2 ">Team</li></Link>
                </ul>
            </div>
       
            <p className= 'text-center py-4'>&copy;2023 Nextgen Coders | All Rights Reserved</p>
        
        </div>
    )
}

export default Footer;