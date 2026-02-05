import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen hidden md:flex flex-col bg-background-light dark:bg-sidebar-dark border-r border-white/5 p-4">
      <nav className="flex flex-col gap-2">
        <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
          <span className="material-symbols-outlined">home</span>
          <p className="text-sm font-medium leading-normal">Home</p>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
          <span className="material-symbols-outlined">library_music</span>
          <p className="text-sm font-medium leading-normal">My Playlist</p>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
          <span className="material-symbols-outlined">favorite</span>
          <p className="text-sm font-medium leading-normal">Liked Songs</p>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
          <span className="material-symbols-outlined">person</span>
          <p className="text-sm font-medium leading-normal">Account</p>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
          <span className="material-symbols-outlined">settings</span>
          <p className="text-sm font-medium leading-normal">Settings</p>
        </div>
        <div className="mt-4 border-t border-white/5 pt-4">
          <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-red-400 hover:bg-red-400/5 rounded-lg cursor-pointer transition-colors">
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium leading-normal">Logout</p>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
