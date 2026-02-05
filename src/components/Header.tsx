import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="border-b border-white/5 bg-sidebar-dark">
      <div className="relative flex h-15 max-w-7xl mx-auto items-center gap-4 px-4">
        {/* Logo */}

        <div className="flex items-center shrink-0">
          <a onClick={() => navigate("/")} className="cursor-pointer">
            <img
              src={assets.logo}
              alt="Danniel Vo logo"
              className="h-22 w-22 md:h-24 md:w-24 object-contain"
            />
          </a>
        </div>

        {/* Search bar */}
        <div
          className="flex-1 md:absolute md:left-1/2 md:-translate-x-1/2
        md:w-full md:max-w-md"
        >
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
              search
            </span>
            <input
              className="w-full bg-white dark:bg-[#1b2227] border border-slate-300 dark:border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm"
              placeholder="Search artists, songs, albums"
              type="text"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
