"use client";
import dynamic from "next/dynamic";
import SvgProfile from "../icons/Profile";
import SvgLogo from "../icons/Logo";

const SideMenu = dynamic(() => import("./side-menu"), { ssr: false });
// const Profile = dynamic(() => import("../icons/Profile"), { ssr: false });
// const Image = dynamic(() => import("antd").then((mod) => mod.Image), {
//   ssr: false,
// });
const Header = () => {
  return (
    <>

      <div className="md:w-1/2 w-1/4 self-center -mt-6 z-1 fixed text-center flex flow-row justify-center">
        <img src="/images/rasa.png" alt="ras" width={100} height={150} />
      </div>
      <header className=" bg-linear-to-l from-pink-300 to-red-400 border-b py-1 sticky top-0 w-full flex flex-row justify-between items-center px-1">
        <SideMenu />
        <SvgProfile />
        {/* <Image
        src="/images/logo.png"
        
        alt="logo"
        width={40}
        height={40}
        className=""
        />
      <Profile /> */}
      </header>
    </>
  );
};

export default Header;
