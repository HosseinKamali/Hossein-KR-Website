import ButtonGetStarted from "../buttonGetStarted/ButtonGetStarted"
import { GoCheckCircleFill } from "react-icons/go";

const PremiumCard = () => {

    const benefits = [
        "I'm a benefit ",
        "I'm a benefit ",
        "I'm a benefit ",
        "I'm a benefit "
      ];

    return ( 
        <div>
            <div className="bg-black text-slate-50 py-5 px-5 w-[360px] h-[280px] rounded-t-lg">
                <h2 className="text-4xl">Premium</h2>
                <div>
                    <p >US$</p>
                <h3 className="text-5xl font-bold ">50</h3>
                </div>
                
                <p className="text-xs mt-2">Every month</p>
                <p className="text-xs ">Use this area to describe one of your memberships.</p>
                <p className="text-xs mt-3 ">Valid for 12 months</p>
                <ButtonGetStarted bgColor="bg-slate-50 text-black hover:opacity-15 py-[8px] text-sm " responsive="w-[85%] mx-auto  mt-5"/>

             </div>

            <ul className="bg-pink-200 w-[360px] h-[170px] mb-20  px-6 py-6 rounded-b-lg border-2 border-black">
                {
                  benefits.map((benefit,index)=>
                    <li key={index} className="flex items-center mb-4 text-xs">
                        <GoCheckCircleFill className="mr-2"/>
                  <p>{benefit}</p>
                 
                 </li>

                )  
                }
              
             </ul>
        </div>
     );
}
 
export default PremiumCard;