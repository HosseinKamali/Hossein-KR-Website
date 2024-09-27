
import image from "../../assets/image/designer_set_3.jpg";
import Container from "../container/Container";
import { SlLock } from "react-icons/sl";
import { FaVectorSquare } from "react-icons/fa6";
import { IoIosContract } from "react-icons/io";

const SectionTwo = () => {
  return (
    <Container>
      <div className="flex items-center justify-between max-sm:block mt-32 mb-16  ">
        <div className=" max-sm:w-full flex justify-center items-center w-[600px]  ">
          <img src={image} alt="" className="w-full h-full" />
        </div>

        <div className="max-sm:mx-7 flex flex-col justify-between w-[40%] ">
        
            <h2 className="font-semibold text-3xl mb-7">
              Communicate.
              <br />
              Collaborate. Create.
            </h2>
            <h3 className="text-sm sm:mb-12 leading-6">
            I'm a paragraph. Click here to add your own  text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add your
             own content and make changes to the font. I’m a great place
              for you to tell a story and let your users know a little more about you.
            </h3>

            <div className="flex justify-between items-center  max-sm:block max-sm:mt-10">
              <div className="flex items-center ">
                <SlLock
                  size={50}
                  className="bg-black text-slate-50 rounded-md w-9 h-9 py-[1px] px-[4px]  "/>
                <p className="ml-2 text-[10px]">
                  Speed & Security
                </p>
              </div>

              <div className="flex items-center max-sm:mt-4 ml-3">
                <FaVectorSquare
                  size={50}
                  className="bg-black text-slate-50 rounded-md w-9 h-9 py-[1px] px-[4px] "/>
                <p className="ml-2 text-[10px]">
                AllIn-One
                Toolkit
                </p>
              </div>
              <div className="flex items-center ml-4 max-sm:mt-5">
                <IoIosContract
                  size={50}
                  className="bg-black text-slate-50 rounded-md w-9 h-9 py-[1px] px-[4px] "
                />
                <p className="m-2 text-[10px] ">
                  Better 
                  Collaboration
                </p>
              </div>
            </div>
          </div>
          
        </div>
      
    </Container>
  );
};

export default SectionTwo;
