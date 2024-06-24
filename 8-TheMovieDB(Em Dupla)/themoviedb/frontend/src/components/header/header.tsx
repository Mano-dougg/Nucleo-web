"use client";
import Link from "next/link";
import './header.css';
import SearchBar from "../searchbar/searchbar";
import { CgProfile } from "react-icons/cg";
import Profile from "../menu/menu";
import { useState } from "react";

export default function Header() {
  const [isProfileVisible, setProfileVisible] = useState(false);

  const toggleProfileVisibility = () => {
    setProfileVisible(!isProfileVisible);
  };

    return (
    <div className="header">

        <Link href="/">
            TheMovieDB
        </Link>

        
        <div className="lateral">
          <SearchBar />
          
          <CgProfile className={isProfileVisible ? 'profile-icon iconActive' : 'profile-icon'} onClick={toggleProfileVisibility}/>
          
          <Profile isVisible={isProfileVisible} onClose={toggleProfileVisibility} />
        </div>
        
        
        
    </div>
    )
};
