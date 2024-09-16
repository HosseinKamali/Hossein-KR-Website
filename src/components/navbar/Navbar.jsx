import Container from "../container/Container";
import { FaUserCircle } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import ButtonGetStarted from "../buttonGetStarted/ButtonGetStarted";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../menu/Menu";
import { useAppContext } from "../../AppContext/AppContext";

const Navbar = () => {
  const { title, setIsOpenMenu } = useAppContext();

  return (
    <div className="relative">
      <Menu />
      <Container>
        <div className="flex justify-between items-center h-20 max-sm:mx-7 ">
          <div className="flex items-center ">
            <FaGlobe size={40} className="mr-2 " />
            <p className="text-xl font-semibold">WeDu</p>
          </div>
          <div className="flex items-center max-sm:hidden">
            <ul className="flex items-center mr-10">
              {title.map((item) => (
                <Link key={item.id} to={item?.path}>
              
                  <li className="ml-6 text-lg cursor-pointer py-1 px-3 hover:text-slate-500">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="flex items-center mr-10 cursor-pointer ">
              <FaUserCircle size={29} />
              <p className="ml-3">login</p>
            </div>
            <ButtonGetStarted />
          </div>
          <div className="sm:hidden cursor-pointer" onClick={() => setIsOpenMenu(true)}>
            <GiHamburgerMenu size={35} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ButtonGetStarted responsive="w-[90%] sm:hidden" />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
