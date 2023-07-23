'use client'

import type { FC } from "react"
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DataContext } from "../context/DataProvider";
import supabase from "../../supabase/supabase";
import { toast } from "react-toastify";

import profile from "../../public/assets/profile.png";
import { Button } from "antd";
import { FaSearch } from "react-icons/fa";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import Logo from "./icons/Logo";
import LogoIcon from './icons/LogoIcon'

const Navbar: FC = () => { // { loc, session }
  const [show, handleShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      });
    };
  }, []);

  const { setUser } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1500);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) toast.error(error.message);
    else {
      toast.info("Successfully logged out!");
      setUser(null);
      router.push("/");
    }
  };

  return (
    <div className={`nav ${show && "nav-scroll"}`}>
       <div className='nav-inner background-gradient flex justify-between w-full'>  
          <Link href="/" className="logo">
            <LogoIcon />
          </Link>
          <div className="user">

            <Link href="/categories" className="nav-item selected">
              On-Demand
            </Link>
            |
            <Link href="/categories" className="nav-item">
              Live
            </Link>
            {/* |
            <Link href="/categories" className="nav-item">
              Categories
            </Link> */}

            {/* {loc !== "/Search" && (
              <Link href="/Search" className="nav-item">
                Search
                <FaSearch className="search-icon" />
              </Link>
            )}
            | */}

            {/* <div className="flex justify-end flex-1 space-x-8">
              {session ? (
                <>
                  <Link href="/create" className="nav-item">
                    {'Create'}
                    <AiOutlineVideoCameraAdd className='text-white' style={{ width: 30, height: 30 }} />
                  </Link>

                  <div
                    className="user-info"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                    <Image src={profile} alt="profile" />
                  </div>
                  
                    <SignOutButton />
                  </>
                ) : (
                  <Link href="/signin" className="nav-item">
                    <Button size='large' className='flex items-center bg-black'>
                      <BiUserCircle className='text-white' style={{ width: 30, height: 30 }} />
                      <p className='text-white'>{'Sign In'}</p>
                    </Button>
                  </Link>
              )}
            </div> */}

            

            {isOpen && (
              <div
                className="test"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/account" className="menu-item">
                  Account
                </Link>
                <Link href="/activity" className="menu-item">
                  Activity
                </Link>
                <div className="menu-item" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
            
          </div>
      </div>
    </div>
  );
}

export default Navbar;
