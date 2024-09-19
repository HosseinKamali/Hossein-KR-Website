import ButtonGetStarted from "../buttonGetStarted/ButtonGetStarted"
import image from "../../assets/image/3692685.jpg"
import Container from "../container/Container";
import { SlLock } from "react-icons/sl";
import { FaVectorSquare } from "react-icons/fa6";
import { IoIosContract } from "react-icons/io";
const Header = () => {
    return ( 
        <Container>
   <div className="flex items-center flex-row-reverse max-sm:block">
            <div className="w-[700px] h-[800px] max-sm:h-[600px] max-sm:w-full flex justify-center items-center">
            <img src={image} alt="" className="w-full h-full" />
            </div>
            
          <div>
            <div  className="max-sm:ml-10">
            <h1 className="font-semibold text-5xl mb-12">Communicate.<br/>Collaborate. Create.</h1>
            <h2 className="text-xl sm:mb-12 ">WeDu provides an effective and powerful<br/> way to manage your projects</h2>


            <ButtonGetStarted bgColor="bg-black text-white hover:text-black hover:bg-amber-500 " responsive="max-sm:hidden"/>

 

            <div className="flex justify-between items-center sm:mt-24 max-sm:block max-sm:mt-10">
                <div className="flex items-center ">
                <SlLock size={37} className="bg-black text-slate-50 p-1 rounded-md "/>
                <p className="ml-3">Speed & <br/> Security</p>
                </div>
               
               <div className="flex items-center sm:ml-12 max-sm:mt-4">
               <FaVectorSquare size={37} className="bg-black text-slate-50 p-1 rounded-md "/>
               <p className="ml-3">Flexibility & <br/> Scalability</p>
               </div>
                <div className="flex items-center sm:ml-12 max-sm:mt-4">
                <IoIosContract size={37} className="bg-black text-slate-50 p-1 rounded-md "/>
                <p className="ml-3">Better <br/>Collaboration</p>
                </div>
            </div>
          
           
            </div>
            <div className="sm:hidden flex justify-center items-center mt-10">
            <ButtonGetStarted bgColor="bg-black text-white hover:text-black hover:bg-amber-500 " responsive="w-[90%]"/>
            </div>
        
          </div>
        </div>
        </Container>
     
    );
}
 
export default Header;
