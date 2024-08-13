import { Menu, X, User, HelpCircle, FileText, LayoutDashboard, ChevronDown, LogOut, KeySquare   } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import ClientHomePage from './clientHomePage';
import ClientProfile from './clientProfile';
import AllPost from './allPost';
import CompanyLogo from '../assets/img/Main_logo.png';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ProfilePic from '../assets/img/profile_pic.jpg'
const ClientDashHome = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState('Dashboard');
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const profileMenuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!profileMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
            setProfileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Dashboard':
                return <ClientHomePage />;
            case 'Profile':
                return <ClientProfile />;
            case 'View all Post':
                return <AllPost />;
            default:
                return <ClientHomePage />;
        }
    };

    return (
        <div className="flex">
            {/* Toggle Button */}
            <button 
                className="absolute top-2 left-2 rounded  bg-white p-3 text-red-800 z-50"
                onClick={toggleMenu}
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Navigation Bar */}
            <nav
                className={`bg-brand-bodyColor h-screen py-24 pl-2 fixed top-0 left-0 z-40 transform ${isOpen ? 'translate-x-0 w-64' : 'w-16 -translate-x-0'} transition-all duration-500`}
            >
                <ul className="flex gap-4  flex-col">
                    <li className="relative group">
                        <a 
                            href="#"
                            className={`flex hover:bg-brand-bgColor hover:text-white items-center gap-2 w-full px-4 rounded-l-full py-2 ${activeComponent === 'Dashboard' ? 'bg-brand-bgColor text-white' : ''}`}
                            onClick={() => setActiveComponent('Dashboard')}
                        >
                            <LayoutDashboard />
                            {isOpen && <span>Dashboard</span>}
                        </a>
                        {/* hover Popup  */}

                        {!isOpen && (
                            <div className="absolute hover:hidden flex items-center justify-center left-16 top-5 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:left-full transition-all duration-300">
                                <div className="w-6 h-6 bg-white rotate-45"></div>
                                <div className="relative -ml-5 bg-white text-red-800 font-bold  p-2 max-w-fit rounded">
                                    Dashboard
                                </div>
                            </div>
                        )}
                    </li>
                    <li className="relative group">
                        <a 
                            href="#"
                            className={`flex hover:bg-brand-bgColor hover:text-white items-center gap-2 w-full px-4 rounded-l-full py-2 ${activeComponent === 'Profile' ? 'bg-brand-bgColor text-white' : ''}`}
                            onClick={() => setActiveComponent('Profile')}
                        >
                            <User />
                            {isOpen && <span>Profile</span>}
                        </a>
                        {/* hover Popup  */}

                        {!isOpen && (
                            <div className="absolute hover:hidden flex items-center justify-center left-16 top-5 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:left-full transition-all duration-300">
                                <div className="w-6 h-6 bg-white rotate-45"></div>
                                <div className="relative -ml-5 bg-white text-red-800 font-bold   p-2 rounded">
                                    Profile
                                </div>
                            </div>
                        )}
                    </li>
                    <li className="relative group">
                        <a 
                            href="#"
                            className={`flex hover:bg-brand-bgColor hover:text-white items-center gap-2 w-full px-4 rounded-l-full py-2 ${activeComponent === 'View all Post' ? 'bg-brand-bgColor text-white' : ''}`}
                            onClick={() => setActiveComponent('View all Post')}
                        >
                            <FileText />
                            {isOpen && <span>View all Post</span>}
                        </a>
                        {/* hover Popup  */}
                        {!isOpen && (
                            <div className="absolute hover:hidden flex items-center justify-center left-16 top-5 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:left-full transition-all duration-300">
                                <div className="w-6 h-6 bg-white rotate-45"></div>
                                <div className="relative -ml-5 bg-white text-red-800 font-bold  p-2 rounded">
                                    ViewPost
                                </div>
                            </div>
                        )}
                    </li>
                    <li className="relative group">
                        <a 
                            href="#"
                            className={`flex hover:bg-brand-bgColor hover:text-white  items-center gap-2 w-full px-4 rounded-l-full py-2 ${activeComponent === 'Support' ? 'bg-brand-bgColor text-white' : ''}`}
                            onClick={() => setActiveComponent('Support')}
                        >
                            <HelpCircle />
                            {isOpen && <span>Support</span>}
                        </a>

                        {/* hover Popup  */}
                        {!isOpen && (
                            <div className="absolute flex items-center justify-center left-14 top-5 transform -translate-y-1/2 opacity-0 hover:hidden group-hover:opacity-100 group-hover:left transition-all duration-300">
                                <div className="w-6 h-6 bg-white rotate-45"></div>
                                <div className="relative -ml-5 bg-white text-red-800 font-bold  p-2 rounded">
                                    Support
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>

            {/* Main Content Area */}
            <aside
                className={`ml-auto transition-all duration-500 text-white ${isOpen ? 'w-[calc(100%-16rem)]' : 'w-full'}`}
                style={{ marginLeft: isOpen ? '16rem' : '4rem' }}
            >
                <div className="w-full h-auto flex justify-end relative">
                    <div className="bg-gradient-to-l from-brand-Colorpurple to-brand-dark w-full h-12 px-4 py-8 flex items-center justify-between">

                        {/* Company Logo Branding Mark */}
                        <img src={CompanyLogo} className="h-10" alt="Company-logo" />

                        {/* User Profile Section */}
                        <div className="h-8 w-fit flex items-center justify-center px-4 relative">
                            <span className="text-white capitalize font-semibold pr-8 p-3 py-1 bg-gray-400 rounded-l-full bg-opacity-25"> Welcome ! Bhishan Prasad Sah</span>
                            <button className="bg-white px-2 py-1 rounded-md -ml-3 flex items-center" onClick={toggleProfileMenu}>
                                <img src={ProfilePic}  alt=""  className="w-8 h-8 rounded "/>
                                <ChevronDown className="ml-1 text-red-800" />
                            </button>
                            {/* Profile Menu */}
                            {profileMenuOpen && (
                                
                                <div ref={profileMenuRef} className="absolute  top-10 right-0 mt-2 bg-white text-red-800 shadow-lg rounded-sm w-48">
                                    <ArrowDropUpIcon className="text-2xl absolute transform -translate-y-[0.9rem] text-white right-6"/>
                                    <a href="#" className="flex justify-start text-sm items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded "><User/> Profile</a>
                                    <a href="#" className="flex justify-start text-sm items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded "><KeySquare />Change Password</a>
                                    <a href="#" className="flex justify-start text-sm items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded "><LogOut />Logout</a>
                                </div>
                                
                            )}
                        </div>
                    </div>
                </div>
                <div className="p-8">
                    {renderComponent()}
                </div>
            </aside>
        </div>
    );
};

export default ClientDashHome;
