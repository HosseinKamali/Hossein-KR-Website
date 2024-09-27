import imageOne from "../../assets/image/flowerOne.png";
import imageTwo from "../../assets/image/flowerTwo.png";
import imageThree from "../../assets/image/flowerThree.png";
import Container from "../container/Container";
import { BsThreeDots } from "react-icons/bs";

const SectionFour = () => {
  
  return (
    <Container>
 <div>
      <div className="flex justify-around items-center mb-20 mx-14">
        <div className="w-[27%] h-[400px] border-2 border-black relative  rounded-xl ">
            <p className="bg-orange-400 rounded-t-xl flex items-center font-bold"><BsThreeDots size={35} className="ml-3"/></p>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="py-8 px-5">
          <p className="mb-16 text-sm leading-5">
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services. Let your customers
            review you and tell their friends how great you are.”
          </p>
          <h5 className="text-xl font-semibold text-right">Deena Levies,<br/> Mission Bay</h5>
          <div className="w-24 h-20 absolute bottom-3 -left-2">
          <img src={imageOne} alt="" />
          </div>
          </div>
        
          
        </div>
        <div className="w-[27%] h-[400px] border-2 border-black relative  rounded-xl ">
            <p className="bg-orange-400 rounded-t-xl flex items-center font-bold"><BsThreeDots size={35} className="ml-3"/></p>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="py-8 px-5">
          <p className="mb-16 text-sm leading-5">
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services. Let your customers
            review you and tell their friends how great you are.”
          </p>
          <h5 className="text-xl font-semibold text-right ">Deena Levies,<br/> Mission Bay</h5>
          <div className="w-24 h-20 absolute bottom-1 -left-2">
          <img src={imageTwo} alt="" />
          </div>
          </div>
        
          
        </div>
        <div className="w-[27%] h-[400px] border-2 border-black relative  rounded-xl ">
            <p className="bg-orange-400 rounded-t-xl flex items-center font-bold"><BsThreeDots size={35} className="ml-3"/></p>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="py-8 px-5">
          <p className="mb-16 text-sm leading-5 ">
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services. Let your customers
            review you and tell their friends how great you are.”
          </p>
          <h5 className="text-xl font-semibold text-right mt-5">Deena Levies,<br/> Mission Bay</h5>
          <div className="w-24 h-20 absolute bottom-4 -left-2">
          <img src={imageThree} alt="" />
          </div>
          </div>
        
          
        </div>
      </div>
    </div>
    </Container>
   
  );
};

export default SectionFour;
