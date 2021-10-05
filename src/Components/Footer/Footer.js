import React from 'react';
import'./Footer.css'
import { BsFacebook,BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='main-part mt-5'>
            <div className='container '>
            <div className='top-part'>
             <div className='part-one'>
                 <h6>Terms of Service</h6>
                 <h6>*Privacy Policy</h6>
                 <h6>*Sitemap</h6>
                 <h6>*Security</h6>
             </div>
             <div className='part-two'>
              <h6>© 2021 EDULE Made with  by Kawser  <BsFacebook/> <FiTwitter className='bg-light text-dark'/> <BsInstagram/> </h6>
             </div>
         </div>
            </div>
        
        </div>
    );
};

export default Footer;