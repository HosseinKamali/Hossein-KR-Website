import ButtonGetStarted from "../buttonGetStarted/ButtonGetStarted"
import imageOne from "../../assets/image/5484597.png"

const SectionSix = () => {
    return ( 
        <>
          <div className="flex justify-center -mb-28 mt-28  items-center flex-col">
            <div className="w-[65%] text-center mx-auto">
            <h2 className="text-3xl mb-10">Get Ready to Maximize Your Productivity With Our Workflow Solutions</h2>
            <ButtonGetStarted bgColor="bg-black text-white hover:text-black hover:bg-amber-500 mx-auto text-sm py-[6px] px-3"/>
           </div>
           <div className="w-[550px] h-[500px] flex justify-center mt-16">
            <img src={imageOne} alt="" className="w-full h-full " />
            </div>
          </div>
          
        </>
      
     );
}
 
export default SectionSix;