import { IoMdClose } from "react-icons/io";
import { useAppContext } from "../../AppContext/AppContext";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Menu = () => {
    const{isOpenMenue,setIsOpenMenu,title}=useAppContext()
    return ( 

        <div className={`absolute bg-slate-50 w-full h-[100vh] flex items-start justify-between sm:hidden transition-transform duration-300
            ${isOpenMenue ? "translate-y-0": "-translate-y-full"}`}>
    
          <ul className="ml-3 mt-10">
          <div className="flex items-center mr-10 mb-6 ml-5 cursor-pointer">
              <FaUserCircle  size={36}/>
                <p className="ml-3 font-semibold">login</p>
               
              </div>
             {
             title.map(item => 
             <Link key={item.id} to={item?.path}> <li  className="ml-6 text-lg font-semibold cursor-pointer py-1 px-3 hover:text-slate-500">
              {item.title}</li></Link>
             )
             }
              </ul>
              <div className="mr-4 mt-3 cursor-pointer" onClick={()=>setIsOpenMenu(false)}>
              <IoMdClose size={36} />
              </div>
              
          </div>
     );
}
 
export default Menu;