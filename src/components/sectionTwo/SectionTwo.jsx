
import image from "../../assets/image/designer_set_3.jpg";
import Container from "../container/Container";
import { SlLock } from "react-icons/sl";
import { FaVectorSquare } from "react-icons/fa6";
import { IoIosContract } from "react-icons/io";
import { motion } from "framer-motion";
import { useEffect,useRef,useState } from "react";



const SectionTwo = () => {
const [isVisible, setIsVisible] = useState(false);
const animateElement =useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = animateElement.current
      const targetPosition = targetElement.getBoundingClientRect().top;

      if (targetPosition < window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Container>
      <div className="overflow-x-hidden sm:flex sm:items-center sm:justify-between max-sm:block mt-32 mb-16 max-sm:mx-7 ">
        <motion.div
          ref={animateElement}
          initial={{ opacity: 0.1, x: -400 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5 }}
         className=" max-sm:w-full flex justify-center items-center w-[600px] max-sm:mb-10 ">
          <img src={image} alt="" className="w-full h-full" />
        </motion.div>

        <motion.div
          ref={animateElement}
          initial={{ opacity: 0.1, x: 400 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5  }}
         className="max-sm:mx-7 sm:flex sm:flex-col sm:justify-between sm:w-[40%] max-sm:w-[90%] max-sm:text-center ">
        
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

            <div className="sm:flex sm:justify-between  max-sm:block max-sm:mt-10">
              <div className="flex items-center ">
                <SlLock
                  size={50}
                  className="bg-black text-slate-50 rounded-md w-9 h-9 py-[1px] px-[4px]  "/>
                <p className="ml-2 text-[10px]">
                  Speed & Security
                </p>
              </div>

              <div className="flex items-center max-sm:mt-4">
                <FaVectorSquare
                  size={50}
                  className="bg-black text-slate-50 rounded-md w-9 h-9 py-[1px] px-[4px] "/>
                <p className="ml-2 text-[10px]">
                AllIn-One
                Toolkit
                </p>
              </div>
              <div className="flex items-center max-sm:mt-5">
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
          </motion.div>
          
        </div>
      
    </Container>
  );
};

export default SectionTwo;
