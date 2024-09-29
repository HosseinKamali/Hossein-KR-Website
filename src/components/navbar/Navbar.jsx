import { Link as ScrollLink } from "react-scroll";
import { useAppContext } from "../../AppContext/AppContext";
import Menu from "../menu/Menu"
import Container from "../container/Container";
import icon from "../../assets/image/icon.png"
import ButtonGetStarted from "../buttonGetStarted/ButtonGetStarted";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { title, setIsOpenMenu } = useAppContext();

  return (
    <div className="relative">
      <Menu />
      <Container>
        <div className="flex justify-between items-center h-20 ">
          <div className="flex items-center">
            <div className="w-20 h-20">
              <img src={icon} alt="" className="w-full h-full" />
            </div>
            <div>
              <h2 className="text-xl font-bold">WeDu</h2>
              <p className="text-sm">Communicate. Collaborate. Create.</p>
            </div>
          </div>
          <div className="flex items-center max-sm:hidden">
            <ul className="flex items-center mr-10">
              {title.map((item) =>
                item.title === "Product" ? (
                  <ScrollLink
                    key={item.id}
                    to="product"
                    smooth={true}
                    duration={500}
                    className="ml-2 text-sm cursor-pointer py-1 px-3 hover:text-slate-500"
                  >
                    {item.title}
                  </ScrollLink>
                ) : (
                 <Link key={item.id} to={item?.path}>
                 <li
                    
                    className="ml-2 text-sm cursor-pointer py-1 px-3 hover:text-slate-500" >
                    {item.title}
                  </li>
                  </Link> 
                )
              )}
            </ul>
            <div className="flex items-center mr-7 cursor-pointer">
              <FaUserCircle size={29} />
              <p className="ml-3 text-sm font-semibold">login</p>
            </div>
            <ButtonGetStarted bgColor="bg-amber-500 hover:text-amber-500 hover:bg-black text-sm py-[6px] px-3" />
          </div>
          <div
            className="sm:hidden cursor-pointer"
            onClick={() => setIsOpenMenu(true)}
          >
            <GiHamburgerMenu size={35} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ButtonGetStarted
            responsive="w-[90%] sm:hidden"
            bgColor=" bg-amber-500 hover:text-amber-500 hover:bg-black py-3 text-lg"
          />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
