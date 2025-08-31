import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ScienceIcon from "@mui/icons-material/Science";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import {NavLink} from "react-router"

export default function Nav({setHidden, hidden, theme}) {

  return (
    <aside onMouseEnter={()=>(setHidden(false))} onMouseLeave={()=>(setHidden(true))} className={`h-screen bg-slate-500 text-white fixed left-0 top-0 ${hidden ? 'w-20' : 'w-72'} transition-[width]`}>
      <nav className={`flex flex-col p-4 space-y-4 text-left text-2xl `}>
        <div className="pl-2 transition duration-300 p-2 rounded-md bg-slate-600 flex items-center hover:cursor-pointer hover:bg-home-hover">
          <HomeIcon sx={{ fontSize: 25 }} />
          <a href="" className={`transition duration-300 ease-in pl-4 rounded-m ${hidden ? 'hidden' : ''}`}>
            <NavLink to="/" end>
              Home
            </NavLink>
          </a>
        </div>
        <hr />

        <div className="pl-2 transition duration-300 ease-in p-2 rounded-md bg-slate-600 flex items-center hover:cursor-pointer hover:bg-physics-hover">
          <ScienceIcon sx={{ fontSize: 25 }} />
          <a
            href=""
            className={`transition duration-300 ease-in pl-4 rounded-m ${hidden ? 'hidden' : ''}`}
          >
            <NavLink to='/physics' end>
              Physics
            </NavLink>
          </a>
        </div>
        <div className="pl-2 p-2 transition duration-300 rounded-md bg-slate-600 flex items-center hover:cursor-pointer hover:bg-photo-hover">
          <CameraAltIcon sx={{ fontSize: 25 }} />
          <a href="" className={`transition duration-300 ease-in pl-4 rounded-m ${hidden ? 'hidden' : ''}`}>
            Photography
          </a>
        </div>
      </nav>
    </aside>
  );
}
