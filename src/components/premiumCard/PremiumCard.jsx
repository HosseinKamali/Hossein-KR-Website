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
            <div className="bg-black text-slate-50 py-5 px-5 w-[450px] h-[350px] rounded-t-lg">
                <h2 className="text-4xl">Premium</h2>
                <div>
                    <p >US$</p>
                <h3 className="text-5xl font-bold ">50</h3>
                </div>
                
                <p className="text-sm mt-2">Every month</p>
                <p className="text-sm ">Use this area to describe one of your memberships.</p>
                <p className="text-sm mt-9">Valid for 12 months</p>
                <ButtonGetStarted bgColor="bg-slate-50 text-black hover:opacity-15 " responsive="w-full mt-10"/>

             </div>

            <ul className="bg-pink-200 py-5 px-5 rounded-b-lg border-2 border-black">
                {
                  benefits.map((benefit,index)=>
                    <li key={index} className="flex items-center mb-3">
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