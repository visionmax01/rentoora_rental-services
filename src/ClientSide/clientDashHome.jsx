import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  User,
  HelpCircle,
  FileText,
  LayoutDashboard,
  ChevronDown,
  LogOut,
  KeySquare,
  Upload,

} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import CompanyLogo from "../assets/img/Main_logo.png";
import manpng from "../assets/img/man.png"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ClientHomePage from "./clientHomePage";
import ClientProfile from "./clientProfile";
import AllPost from "./displayClientPost";
import ClientPost from "./ClintPost";
import { FaSpinner } from "react-icons/fa";


const ClientDashHome = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/auth/user-data",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUser(response.data);
        fetchProfilePhoto(response.data.profilePhotoPath);
        setTimeout(() => setLoading(false), 2000); // 2 second delay
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [navigate]);
   

  const fetchProfilePhoto = (profilePhotoPath) => {
    axios
      .get(`http://localhost:7000/${profilePhotoPath}`, { responseType: "arraybuffer" })
      .then((response) => {
        const imageBlob = new Blob([response.data], { type: response.headers["content-type"] });
        const imageUrl = URL.createObjectURL(imageBlob);
        setProfilePhoto(imageUrl); // Set the profilePhoto state with the image URL
      })
      .catch((error) => {
        console.log("Error fetching profile photo:", error);
      });
  };

  const handleLogout = async () => {
    try {
      // Make the logout API request
      await axios.post('http://localhost:7000/auth/logout', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
  
      // Clear the token and user data from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
  
      // Redirect to the client login page
      navigate('/client-login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);

  const handleClickOutside = (event) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target)
    ) {
      setProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <ClientHomePage />;
      case "Profile":
        return <ClientProfile />;
      case "View_posts":
        return <AllPost />;
      case "Create_post":
        return <ClientPost />;
      default:
        return <ClientHomePage />;
    }
  };

  if (loading) return <div className="w-full h-screen mx-auto my-auto text-white flex justify-center items-center">
  <div className=" w-fit mx-auto flex justify-center flex-col">
<FaSpinner className="animate-spin  w-10 h-10 mx-auto mb-6"/>
    <p>Redirecting to Your Dashboard . . .</p>
  </div>
</div>;

if (!user) return <div className="w-full h-screen mx-auto my-auto text-white">Error loading user data.</div>;

  return (
    <div className="flex">
      <button
        className="fixed top-2 left-2 rounded hover:bg-gray-200 bg-white p-3 text-red-800 z-50"
        onClick={toggleMenu}
      >
        {isOpen ? <Menu /> : <Menu />}
      </button>
      <nav
        className={`bg-brand-bodyColor h-screen py-24 pl-2 fixed top-0 left-0 z-40 transform ${
          isOpen ? "translate-x-0 w-44" : "w-16 -translate-x-0"
        } transition-all duration-500`}
      >
        <ul className="flex gap-4 flex-col">
          {/* Navigation Items */}
          {[
            "Dashboard",
            "Profile",
            "View_posts",
            "Support",
            "Create_post",
          ].map((item) => (
            <li key={item} className="relative group">
              <a
                href="#"
                className={`flex hover:bg-brand-bgColor hover:text-white items-center gap-2 w-full px-4 rounded-l-full py-2 ${
                  activeComponent === item ? "bg-brand-bgColor text-white" : ""
                }`}
                onClick={() => setActiveComponent(item)}
              >
                {item === "Dashboard" && <LayoutDashboard />}
                {item === "Profile" && <User />}
                {item === "View_posts" && <FileText />}
                {item === "Support" && <HelpCircle />}
                {item === "Create_post" && <Upload />}
                {isOpen && <span>{item}</span>}
              </a>
              {!isOpen && (
                <div className="absolute hover:hidden flex items-center justify-center left-16 top-5 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:left-full transition-all duration-300">
                  <div className="w-6 h-6 bg-white rotate-45"></div>
                  <div className="relative -ml-5 bg-white text-red-800 font-bold p-2 max-w-fit rounded">
                    {item}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <aside
        className={`ml-auto transition-all duration-500 text-white ${
          isOpen ? "w-[calc(100%)]" : "w-full"
        }`}
        style={{ marginLeft: isOpen ? "11rem" : "4rem" }}
      >
        <div className="w-[100%] h-auto flex justify-end relative">
          <div className="bg-gradient-to-l sticky top-0 from-brand-Colorpurple to-brand-dark w-full h-12 px-4 py-8 flex items-center justify-between">
            <img src={CompanyLogo} className="h-10" alt="Company-logo" />
            <div className="h-8 w-fit flex items-center justify-center px-4 relative">
              <span className="text-white capitalize font-semibold pr-8 p-3 py-1 bg-gray-400 rounded-l-full bg-opacity-25">
                Welcome, {user.name}!
              </span>
              <button
                className="bg-white px-2 py-1 rounded-md -ml-3 flex items-center"
                onClick={toggleProfileMenu}
              >
               {profilePhoto ? (
            <img
              className="profile-img w-8 h-8 rounded object-top object-cover bg-brand-dark"
              alt="Profile"
              src={profilePhoto}
            />
          ) : (
            <img
              className="profile-img w-8 h-8 rounded object-top-center object-cover bg-brand-dark"
              src={manpng}
              alt="pic"
            />
          )}
                <ChevronDown className="ml-1 text-red-800" />
              </button>
              {profileMenuOpen && (
                <div
                  ref={profileMenuRef}
                  className="absolute   z-50 top-10 right-0 mt-2 bg-white text-red-800 shadow-lg rounded w-48"
                >
                  <ArrowDropUpIcon className="text-2xl absolute transform -translate-y-[0.9rem] text-white right-6" />
                  <p className=" text-gray-900 flex justify-start text-[14px] items-center gap-2 px-4 py-2 bg-blue-400 rounded">

                  <span className="text-sm">ClientID:</span>{user.accountId}
                  </p>
                  <div>
                  <Link
                    onClick={() => setActiveComponent("Profile")}
                    className="flex justify-start text-sm items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded"
                  >
                    <User /> Profile
                  </Link>
                  <a
                    href="#"
                    className="flex justify-start text-sm items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded"
                  >
                    <KeySquare /> Change Password
                  </a>
                  <button
                    onClick={handleLogout}
                    className="flex justify-start text-sm items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded w-full"
                  >
                    <LogOut /> Logout
                  </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>{renderComponent()}</div>
      </aside>
    </div>
  );
};

export default ClientDashHome;
