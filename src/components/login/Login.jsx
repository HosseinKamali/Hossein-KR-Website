import { Link } from "react-scroll";
import image from "../../assets/image/5073684.jpg"
import icon from "../../assets/image/icon.png"

const Login = () => {
  return (

    <div className="flex justify-center items-center h-screen overflow-y-hidden">
        <div className="w-[65%] mt-20">
          <img src={image} alt="" className="object-cover w-full h-full"/>
        </div>
      <form className="flex flex-col justify-center p-10">
      <div className="flex items-center mb-5">
            <div className="w-20 h-20">
              <img src={icon} alt="" className="w-full h-full" />
            </div>
            <div>
              <h2 className="text-xl font-bold">WeDu</h2>
              <p className="text-sm">Communicate.Collaborate.Create.</p>
            </div>
          </div>
      <h2 className="mb-12 text-2xl font-bold text-center">Login</h2>
        <label htmlFor="email" className="mb-1">Email</label>
        <input type="email" id="email" placeholder="email" className="border-[1px] border-black outline-amber-600 w-80
        h-10 p-2 mb-5"/>

        <label htmlFor="password" className="mb-1">Password</label>
        <input type="password" id="password" placeholder="Password" className="border-[1px] border-gray-700 outline-amber-600 w-80
        h-10 p-2"/>
        <p className="text-sm mt-6 text-center font-semibold">Don’t you have an account? <Link to="/sign up" className="text-blue-800 font-bold cursor-pointer mb-10">Sign up</Link></p>
      </form>
    </div>
  );
};

export default Login;
