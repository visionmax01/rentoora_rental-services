import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const NavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleLoginRecirection = () => {
      navigate("/login"); 
    };
    const HomePageRedirection =()=>{
        navigate("/")
    }
    return (
        <div >
            <nav className='w-full h-16 md:h-12 bg-brand-navbg flex items-center'>
                <div className='flex justify-between items-center w-full px-4 md:px-12'>
                    <div onClick={HomePageRedirection} className='text-white font-semibold cursor-pointer'>Company Name</div>
                    <ul className='hidden md:flex gap-7 items-center text-white font-semibold'>
                        <li>Services</li>
                        <li>About</li>
                        <li>Developer</li>
                        <li onClick={handleLoginRecirection} className='bg-brand-dark hover:bg-blue-900 py-1 px-4 rounded-md cursor-pointer'>Login</li>
                    </ul>
                    <div className='md:hidden' onClick={toggleDrawer}>
                        {isDrawerOpen ? (
                            <CloseIcon className='h-6 w-6 text-white cursor-pointer' />
                        ) : (
                            <MenuIcon className='h-6 w-6 text-white cursor-pointer' />
                        )}
                    </div>
                </div>
            </nav>
            
            {/* Backdrop  blur effect for bg */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-30 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleDrawer}></div>
            
            {/* Side Drawer for small screen */}
            <div className={`fixed top-0 w-1/2  left-0 h-full bg-brand-navbg opacity-85 text-white p-6 z-40 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className='flex justify-end'>
                    <CloseIcon className='h-6 w-6 cursor-pointer' onClick={toggleDrawer} />
                </div>
                <ul className='flex flex-col gap-4 mt-4'>
                    <li>Services</li>
                    <li>About</li>
                    <li>Developer</li>
                    <li onClick={handleLoginRecirection} className='bg-brand-dark hover:bg-blue-900 py-1 px-4 rounded-md cursor-pointer'>Login</li>
                </ul>
            </div>
        </div>
    );
};




export default NavBar;
