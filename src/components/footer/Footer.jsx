import { div } from "framer-motion/client";
import ButtonGetStarted from "../buttonGetStarted/ButtonGetStarted";
import Container from "../container/Container";

const Footer = () => {
    return ( 
        <div className=" bg-amber-300 py-32">
 <Container>
 <div className="flex items-center">
   
            <div className="w-[37%]">
                <h3 className="font-semibold mb-9 text-xl"> Contact</h3>
               <div className="flex mb-8">
                <p className="mr-8">500 Terry Francine Street<br/> San Francisco, CA 94158</p>
                <p>Sales:<br/>
                info@mysite.com</p>
               </div>
              <div className="flex ">
                <p className="mr-20">General Inquiries:<br/>
                123-456-7890</p>
                <p>Customer Care:<br/>
                info@mysite.com</p>
               </div>
            </div>



            <div className="w-[21%]">
            <h3 className="font-semibold  text-xl mb-9 "> Quick Links</h3>
            <div className="flex flex-col justify-between ">
            <a>Terms & Conditions</a>
            <a>Privacy Policy</a>
            </div>
           
            </div>
            <div className="w-[27%]">
                <h3 className="font-semibold mb-9 text-xl">Follow</h3>
                <p>Sign up to get the latest news on our product.</p>
                <div>
                    <label htmlFor="email"></label>
                    <input type="text" name="email" id="email" />
                    <input type="checkbox" />
                    <p>Yes, subscribe me to your newsletter</p>
                </div>
                <ButtonGetStarted/>
            </div>
            <div className=" flex flex-col">
                <a>LinkedIn</a>
                <a >YouTube</a>
                <a>Facebook</a>
            </div>
        </div>
        </Container>
       
        </div>
       
     );
}
 
export default Footer;