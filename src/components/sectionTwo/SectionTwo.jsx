
import image from "../../assets/image/designer_set_3.jpg";
import Container from "../container/Container";
import { SlLock } from "react-icons/sl";
import { FaVectorSquare } from "react-icons/fa6";
import { IoIosContract } from "react-icons/io";

const SectionTwo = () => {
  return (
    <Container>
      <div className="flex items-center max-sm:block justify-between mt-32 mb-16  ">
        <div className=" w-[55%] max-sm:h-[500px] max-sm:w-full flex justify-center items-center ">
          <img src={image} alt="" className="w-full h-full" />
        </div>

        <div className="max-sm:mx-7 w-[40%] ">
          <div>
            <h2 className="font-semibold text-4xl mb-12">
              Communicate.
              <br />
              Collaborate. Create.
            </h2>
            <h3 className="text-base sm:mb-12 ">
            I'm a paragraph. Click here to add your own  text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add your
             own content and make changes to the font. I’m a great place
              for you to tell a story and let your users know a little more about you.
            </h3>

            <div className="flex justify-between  sm:mt-24 max-sm:block max-sm:mt-10">
              <div className="flex items-center ">
                <SlLock
                  size={50}
                  className="bg-black text-slate-50 rounded-md w-12 h-9 p-1 "/>
                <p className="ml-2 text-sm">
                  Speed & Security
                </p>
              </div>

              <div className="flex items-center sm:ml-10 max-sm:mt-4">
                <FaVectorSquare
                  size={50}
                  className="bg-black text-slate-50 rounded-md w-14 h-10 p-1"/>
                <p className="ml-2 text-xs">
                AllIn-One
                Toolkit
                </p>
              </div>
              <div className="flex items-center sm:ml-10 max-sm:mt-4">
                <IoIosContract
                  size={50}
                  className="bg-black text-slate-50 rounded-md w-12 h-9 "
                />
                <p className="m-2 text-sm ">
                  Better 
                  Collaboration
                </p>
              </div>
            </div>
          </div>
          <div className="sm:hidden flex justify-center items-center mt-10">
           
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SectionTwo;
