import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from '@mui/icons-material/Copyright';
import {useEffect} from 'react'

// export default function Footer({hidden, theme}) {
//   useEffect(()=> {

//   })

  return (
    <footer className={`${theme==='home' ? 'bg-home-secondary' : theme === 'physics' ? 'bg-physics-secondary' : theme === 'photo' ? 'bg-photo-secondary' : ''} p-4 flex justify-between pr-72 transition-all duration-100 ease-in ${hidden ? "pl-24" : "pl-72"} `}>
      <div className="space-x-4">
        <a href="">
            <LinkedInIcon
            className="hover: cursor-pointer"
            sx={{ fontSize: 30, color: "white" }}
            />
        </a>
        <a href="">
            <EmailIcon
            className="hover: cursor-pointer"
            sx={{ fontSize: 30, color: "white" }}
            />
        </a>
      </div>
      <div className="flex items-center space-x-1">
        <CopyrightIcon sx={{ fontSize: 25, color: "white" }} />
        <p className="text-white text-md">2025</p>
        <p className="text-white text-md">Ethan Tran</p>
      </div>
    </footer>
  );

