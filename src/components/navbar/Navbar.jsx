import Container from "../container/Container";
import { FaUserCircle } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import ButtonGetStarted from "../buttonGetStarted/ButtonGetStarted";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../menu/Menu";
import { useAppContext } from "../../AppContext/AppContext";
import icon from "../../assets/image/icon.png"

const Navbar = () => {
  const { title, setIsOpenMenu } = useAppContext();

  return (
    <div className="relative">
      <Menu />
      <Container>
        <div className="flex justify-between items-center h-20 max-sm:mx-7 ">
          <div className="flex items-center ">
            <div className="w-20 h-20">
            <img src={icon} alt="" className="w-full h-full"/>
            </div>
            
            <p className="text-xl font-semibold">WeDu</p>
          </div>
          <div className="flex items-center max-sm:hidden">
            <ul className="flex items-center mr-10">
              {title.map((item) => (
                <Link key={item.id} to={item?.path}>
              
                  <li className="ml-2 text-sm cursor-pointer py-1 px-3 hover:text-slate-500">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="flex items-center mr-7 cursor-pointer ">
              <FaUserCircle size={29} />
              <p className="ml-3 text-sm font-semibold">login</p>
            </div>
            <ButtonGetStarted bgColor="bg-amber-500 hover:text-amber-500 hover:bg-black text-sm py-[6px] px-3"/>
          </div>
          <div className="sm:hidden cursor-pointer" onClick={() => setIsOpenMenu(true)}>
            <GiHamburgerMenu size={35} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ButtonGetStarted responsive="w-[90%] sm:hidden"bgColor=" bg-amber-500 hover:text-amber-500 hover:bg-black py-3 text-lg" />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
