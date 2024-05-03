/** @format */
import logo from "../../src/assets/logo.svg";
import { Link } from "react-router-dom";
import { IoCartSharp, IoSearch } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then( () => {
      toast.success('Successfully log out')
    })
    .catch( () => {
      toast.error('User not log out')
    })
  };
  const links = (
    <>
      <Link
        className="text-xl font-semibold ml-5"
        to={"/"}>
        Home
      </Link>
      <Link
        className="text-xl font-semibold ml-5"
        to={"/about"}>
        About
      </Link>
     
      <Link
        className="text-xl font-semibold ml-5"
        to={"/blog"}>
        Blog
      </Link>
      <Link
        className="text-xl font-semibold ml-5"
        to={"/contact"}>
        Contact
      </Link>
      {user?.email ? (
        <>
        <button
          onClick={handleLogOut}
          className="text-xl font-semibold ml-5">
          Log out
        </button>
         <Link
         className="text-xl font-semibold ml-5"
         to={"/services"}>
         Services
       </Link>
        </>
      ) : (
        <li>
          <Link className="" to={"/login"}>Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar my-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <img
          className="w-24"
          src={logo}
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <IoCartSharp className="w-20 text-xl" />
        <IoSearch className="w-20 text-xl" />
        <button className="btn btn-outline btn-secondary">Appointment</button>
      </div>
    </div>
  );
};

export default Navber;
