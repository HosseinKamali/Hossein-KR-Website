import ButtonGetStarted from "../buttonGetStarted/ButtonGetStarted";
import image from "../../assets/image/digital.jpg";
import Container from "../container/Container";
import { SlLock } from "react-icons/sl";
import { FaVectorSquare } from "react-icons/fa6";
import { IoIosContract } from "react-icons/io";
const Header = () => {
  return (
    <Container>
      <div className="flex flex-row-reverse items-center max-sm:block justify-center mt-16 mx">
        <div className=" max-sm:w-[90%] w-[45%] max-sm:mx-auto">
          <img src={image} alt="" className="w-full h-full" />
        </div>

        <div className=" w-[35%] max-sm:w-[90%] max-sm:mx-auto">
          <div>
            <h1 className="font-semibold text-4xl mb-12">
              Communicate.
              <br />
              Collaborate. Create.
            </h1>
            <h2 className="text-lg sm:mb-10 ">
              WeDu provides an effective and powerful way to manage your
              projects
            </h2>

            <ButtonGetStarted
              bgColor="bg-black text-white hover:text-black hover:bg-amber-500 text-sm py-[6px] px-2  "
              responsive="max-sm:hidden"
            />

            <div className=" flex justify-between sm:mt-20 max-sm:block max-sm:mt-10 ">
              <div className="flex items-center ">
                <SlLock
                  size={37}
                  className="bg-black text-slate-50 p-1 rounded-md "/>
                <p className="ml-2 text-xs">
                  Speed &<br/>  Security
                </p>
              </div>

              <div className="flex items-center justify-between  max-sm:mt-4">
                <FaVectorSquare
                  size={37}
                  className="bg-black text-slate-50 p-1 rounded-md "/>
                <p className="ml-2 text-xs">
                  Flexibility &<br/>  Scalability
                </p>
              </div>
              <div className="flex items-center justify-between  max-sm:mt-4">
                <IoIosContract
                  size={37}
                  className="bg-black text-slate-50 p-1 rounded-md "/>
                <p className="ml-2 text-xs">
                  Better <br/>
                  Collaboration
                </p>
              </div>
            </div>
          </div>
          <div className="sm:hidden flex justify-center items-center mt-10">
            <ButtonGetStarted
              bgColor="bg-black text-white hover:text-black hover:bg-amber-500 py-2 "
              responsive="w-full"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
