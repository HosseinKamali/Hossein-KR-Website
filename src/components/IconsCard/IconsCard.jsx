import { BiServer } from "react-icons/bi";
import { BiSelection } from "react-icons/bi";
import { BiSolidAnalyse } from "react-icons/bi";
import { BiSolidMicrochip } from "react-icons/bi";
import { BiSolidServer } from "react-icons/bi";
import { BiSolidShip } from "react-icons/bi";
import { BiSolidPackage } from "react-icons/bi";
import { BiLogoDiscordAlt } from "react-icons/bi";

const IconsCard = () => {
  const icons = [
    { icon: <BiServer size={60} />, label: "META DEFINER" },
    { icon: <BiSelection size={60} />, label: "TELTA TEACH" },
    { icon: <BiSolidAnalyse size={60} />, label: "TECHMED" },
    { icon: <BiSolidMicrochip size={60} />, label: "Power Core" },
    { icon: <BiSolidServer size={60} />, label: "Strongest Link" },
    { icon: <BiSolidShip size={60} />, label: "COG Industry" },
    { icon: <BiSolidPackage size={60} />, label: "A.T.Motion" },
    { icon: <BiLogoDiscordAlt size={60} />, label: "Bond" },
  ];

  return (
    <div className="flex justify-between flex-wrap mx-6">
      {icons.map((iconObj, index) => (
        <div key={index} className="flex flex-col items-center w-[25%] mb-20">
          {iconObj.icon}
          <p>{iconObj.label}</p>
        </div>
      ))}
    </div>
  );
};

export default IconsCard;
