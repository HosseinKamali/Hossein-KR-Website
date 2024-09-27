
import { useState } from "react";
import ButtonGetStarted from "../buttonGetStarted/ButtonGetStarted";
import { TiTick } from "react-icons/ti";

const Footer = () => {
    const [isChecked,setIsChecked]=useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

  return (
    <div className="bg-amber-300 py-32 flex justify-center px-20">
      <div className="grid grid-cols-6 gap-8 ">
        {/* Contact Section */}
        <div className="grid col-span-2">
          <h3 className="font-semibold mb-9 text-base">Contact</h3>
          <div className="flex mb-8 text-sm">
            <p className="mr-8">
              500 Terry Francine Street
              <br /> San Francisco, CA 94158
            </p>
            <p>
              Sales:
              <br />
              info@mysite.com
            </p>
          </div>
          <div className="flex text-sm">
            <p className="mr-20">
              General Inquiries:
              <br />
              123-456-7890
            </p>
            <p>
              Customer Care:
              <br />
              info@mysite.com
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="grid col-span-1">
          <h3 className="font-semibold text-[16px] mb-9">Quick Links</h3>
          <div className="flex flex-col text-sm">
            <a>Terms & Conditions</a>
            <a>Privacy Policy</a>
          </div>
        </div>

        {/* Follow Section */}
        <div className="grid col-span-2">
          <h3 className="font-semibold mb-9 text-[16px]">Follow</h3>
          <p className="text-sm mb-7 leading-6">
            Sign up to get the latest news <br /> on our product.
          </p>
          <div>
            <label htmlFor="email" className="text-xs">
              Email*
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="mb-2 w-full p-2 text-sm border-[2px] rounded-md bg-amber-300 border-black focus:bg-slate-50 " />

           <div className="mb-4 flex mt-2 items-center">
              <div className={`flex justify-center items-center w-4 h-4 border-2 border-black rounded-sm cursor-pointer`}
                onClick={handleCheckboxChange}>
                

                {isChecked && (
                  <TiTick className="text-black" />
                )}
              </div>
              <p className="text-[10px] ml-2">
                Yes, subscribe me to your newsletter
              </p>
            </div>





          </div>
          <ButtonGetStarted bgColor="bg-black text-slate-50 text-sm w-full py-2 hover:bg-amber-400 hover:text-black " />
        </div>

        {/* Social Media Links */}
        <div className="font-semibold flex flex-col items-center mt-20 justify-around hover:bg-amber-400">
          <a>LinkedIn</a>
          <a>YouTube</a>
          <a>Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
